# Commits leftover saved changes in this repo and pushes them if anything is new.
# Scheduled for end of day; safe to run by hand. Use -DryRun to preview.

param(
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"

$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$Git = "C:\Program Files\Git\cmd\git.exe"
if (-not (Test-Path $Git)) {
  $resolved = Get-Command git -ErrorAction SilentlyContinue
  if (-not $resolved) {
    throw "git was not found. Install Git for Windows or add it to PATH."
  }
  $Git = $resolved.Source
}

$LogDir = Join-Path $env:LOCALAPPDATA "TrevorFaust.github.io"
$LogFile = Join-Path $LogDir "daily-push.log"
$SecretNamePattern = '(^|\\|/)(\.env($|\..+)|.*credentials.*|.*secret.*|id_rsa|id_ed25519|.*\.(pem|key|p12|pfx))$'

function Write-Log {
  param([string]$Message)
  $line = "{0}  {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $Message
  if (-not (Test-Path $LogDir)) {
    New-Item -ItemType Directory -Path $LogDir | Out-Null
  }
  Add-Content -Path $LogFile -Value $line
  Write-Host $line
}

function Invoke-Git {
  param([Parameter(ValueFromRemainingArguments = $true)][string[]]$GitArgs)
  $output = & $Git -C $RepoRoot @GitArgs 2>&1
  $code = $LASTEXITCODE
  return [pscustomobject]@{
    Code = $code
    Text = ($output | Out-String).Trim()
  }
}

function Test-GitLock {
  $gitDir = Join-Path $RepoRoot ".git"
  $lockNames = @(
    "index.lock",
    "MERGE_HEAD",
    "rebase-merge",
    "rebase-apply",
    "CHERRY_PICK_HEAD",
    "REVERT_HEAD"
  )
  foreach ($name in $lockNames) {
    if (Test-Path (Join-Path $gitDir $name)) {
      return $name
    }
  }
  return $null
}

if (-not (Test-Path (Join-Path $RepoRoot ".git"))) {
  throw "Not a git repository: $RepoRoot"
}

$lock = Test-GitLock
if ($lock) {
  Write-Log "Skipping: git is mid-operation ($lock)."
  exit 0
}

$status = Invoke-Git status --porcelain
if ($status.Code -ne 0) {
  Write-Log "git status failed: $($status.Text)"
  exit 1
}

$dirty = -not [string]::IsNullOrWhiteSpace($status.Text)
$branchResult = Invoke-Git rev-parse --abbrev-ref HEAD
$branch = $branchResult.Text
$upstream = Invoke-Git rev-parse --abbrev-ref --symbolic-full-name "@{u}"
$hasUpstream = $upstream.Code -eq 0
$ahead = 0

if ($hasUpstream) {
  $aheadResult = Invoke-Git rev-list --count "$($upstream.Text)..HEAD"
  if ($aheadResult.Code -eq 0 -and $aheadResult.Text) {
    $ahead = [int]$aheadResult.Text
  }
}

if (-not $dirty -and $hasUpstream -and $ahead -eq 0) {
  Write-Log "No new changes to push."
  exit 0
}

if ($dirty -and $branch -ne "main") {
  Write-Log "Skipping commit: leftover work is on $branch, not main. The live site only updates from main."
  exit 0
}

if ($dirty) {
  $secretHits = @()
  foreach ($line in ($status.Text -split "\r?\n")) {
    if ([string]::IsNullOrWhiteSpace($line)) { continue }
    $path = $line.Substring(3).Trim().Trim('"')
    if ($path -match $SecretNamePattern) {
      $secretHits += $path
    }
  }

  if ($secretHits.Count -gt 0) {
    Write-Log ("Skipping commit: leftover files look like secrets: {0}" -f ($secretHits -join ", "))
    if ($hasUpstream -and $ahead -eq 0) {
      exit 1
    }
  }
  else {
    $date = Get-Date -Format "yyyy-MM-dd"
    $message = "Save leftover site changes from $date."
    Write-Log "Committing leftover changes on $branch."

    if ($DryRun) {
      Write-Log "Dry run: would stage all leftover files and commit: $message"
    }
    else {
      $add = Invoke-Git add -A
      if ($add.Code -ne 0) {
        Write-Log "git add failed: $($add.Text)"
        exit 1
      }

      $commit = Invoke-Git commit -m $message
      if ($commit.Code -ne 0) {
        Write-Log "git commit failed: $($commit.Text)"
        exit 1
      }

      Write-Log "Committed leftover changes."
      $ahead = $ahead + 1
    }
  }
}

if ($DryRun) {
  if ($branch -ne "main") {
    Write-Log "Dry run: would skip push because leftover work is on $branch, not main."
  }
  elseif (-not $hasUpstream) {
    Write-Log "Dry run: would push main and set upstream on origin."
  }
  elseif ($dirty -or $ahead -gt 0) {
    $pending = $ahead
    if ($dirty) { $pending = [Math]::Max($ahead, 1) }
    Write-Log "Dry run: would push $pending commit(s) to origin/main."
  }
  exit 0
}

if ($branch -ne "main") {
  Write-Log "Skipping push: leftover work is on $branch, not main. The live site only updates from main."
  exit 0
}

if (-not $hasUpstream) {
  Write-Log "Pushing main and setting upstream to origin."
  $push = Invoke-Git push -u origin main
}
elseif ($ahead -gt 0) {
  Write-Log "Pushing $ahead commit(s) to origin/main."
  $push = Invoke-Git push origin main
}
else {
  Write-Log "Nothing to push."
  exit 0
}

if ($push.Code -ne 0) {
  Write-Log "git push failed: $($push.Text)"
  exit 1
}

Write-Log "Push succeeded."
exit 0
