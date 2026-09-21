# Removes the user-level daily push that covers this repo and the other projects.

$ErrorActionPreference = "Stop"
$UserUninstall = Join-Path $env:USERPROFILE ".cursor\auto-push\uninstall.ps1"
if (-not (Test-Path $UserUninstall)) {
  throw "Missing user-level uninstaller: $UserUninstall"
}
& $UserUninstall
