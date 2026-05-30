param(
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$targetsPath = Join-Path $PSScriptRoot "external_account_targets.json"
$targets = Get-Content -Raw $targetsPath | ConvertFrom-Json
$edge = "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"

if (-not (Test-Path $edge)) {
  $edge = "${env:ProgramFiles}\Microsoft\Edge\Application\msedge.exe"
}
if (-not (Test-Path $edge)) {
  throw "Microsoft Edge executable not found."
}

$urls = @($targets.targets | ForEach-Object { $_.url })

if ($DryRun) {
  $urls | ForEach-Object { Write-Output $_ }
  exit 0
}

Start-Process -FilePath $edge -ArgumentList $urls
Write-Output "Opened $($urls.Count) external surfaces in Microsoft Edge."
Write-Output "Use account: $($targets.default_email)"
