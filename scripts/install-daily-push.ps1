# Registers a Windows scheduled task that runs scripts/daily-push.ps1 every night.
# Re-run this script to change the time. Default is 11:00 PM local time.

param(
  [string]$Time = "23:00"
)

$ErrorActionPreference = "Stop"

$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$PushScript = Join-Path $PSScriptRoot "daily-push.ps1"
$TaskName = "TrevorFaust.github.io Daily Push"

if (-not (Test-Path $PushScript)) {
  throw "Missing daily push script: $PushScript"
}

try {
  $null = [DateTime]::ParseExact($Time, "HH:mm", [Globalization.CultureInfo]::InvariantCulture)
}
catch {
  throw "Time must look like 23:00. Got: $Time"
}

$action = New-ScheduledTaskAction `
  -Execute "powershell.exe" `
  -Argument "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$PushScript`"" `
  -WorkingDirectory $RepoRoot

$trigger = New-ScheduledTaskTrigger -Daily -At $Time
$settings = New-ScheduledTaskSettingsSet `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries `
  -StartWhenAvailable `
  -ExecutionTimeLimit (New-TimeSpan -Minutes 15)
$principal = New-ScheduledTaskPrincipal `
  -UserId $env:USERNAME `
  -LogonType Interactive `
  -RunLevel Limited

Register-ScheduledTask `
  -TaskName $TaskName `
  -Action $action `
  -Trigger $trigger `
  -Settings $settings `
  -Principal $principal `
  -Description "If this site has leftover saved changes, commit them and push at the end of the day." `
  -Force | Out-Null

$task = Get-ScheduledTask -TaskName $TaskName
$next = (Get-ScheduledTaskInfo -TaskName $TaskName).NextRunTime
Write-Host "Registered '$TaskName' for $env:USERNAME."
Write-Host "Runs daily at $Time local time."
Write-Host "Next run: $next"
Write-Host "Logs: $env:LOCALAPPDATA\TrevorFaust.github.io\daily-push.log"
Write-Host "Task state: $($task.State)"
