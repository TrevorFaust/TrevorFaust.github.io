# This repo is covered by the user-level daily push for all projects.
# Re-run that installer to change the time. Default is 11:00 PM local time.

param(
  [string]$Time = "23:00"
)

$ErrorActionPreference = "Stop"
$UserInstall = Join-Path $env:USERPROFILE ".cursor\auto-push\install.ps1"
if (-not (Test-Path $UserInstall)) {
  throw "Missing user-level installer: $UserInstall"
}
& $UserInstall -Time $Time
