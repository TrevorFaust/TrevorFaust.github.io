# Pushes leftover saved site changes when a Cursor session ends.
# Fail open: a hook error should not block closing the session.

$ErrorActionPreference = "Continue"
$null = [Console]::In.ReadToEnd()

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..\..")).Path
$pushScript = Join-Path $repoRoot "scripts\daily-push.ps1"

if (Test-Path $pushScript) {
  & powershell.exe -NoProfile -ExecutionPolicy Bypass -File $pushScript | Out-Null
}

Write-Output "{}"
exit 0
