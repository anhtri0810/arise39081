# ARISE 39081 PowerShell Launch Script
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "   ARISE 39081 - HANOI - AMSTERDAM HIGH SCHOOL          " -ForegroundColor White
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "Dang khoi dong may chu web Robotics..." -ForegroundColor Yellow

Set-Location $PSScriptRoot

$pythonExe = "python"
if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
    if (Test-Path "C:\Users\ADMIN\AppData\Local\Programs\Thonny\python.exe") {
        $pythonExe = "C:\Users\ADMIN\AppData\Local\Programs\Thonny\python.exe"
    }
}

Write-Host "Khoi dong trinh duyet tai: http://127.0.0.1:3000" -ForegroundColor Green
Start-Process "http://127.0.0.1:3000"

& $pythonExe app.py
