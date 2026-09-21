# Removes the end-of-day push scheduled task.

$ErrorActionPreference = "Stop"
$TaskName = "TrevorFaust.github.io Daily Push"

$task = Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
if (-not $task) {
  Write-Host "No scheduled task named '$TaskName' is registered."
  exit 0
}

Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
Write-Host "Removed scheduled task '$TaskName'."
