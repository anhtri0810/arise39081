@echo off
title ARISE 39081 - Ams Robotics Innovation Science Engineering
echo ========================================================
echo    ARISE 39081 - HANOI - AMSTERDAM HIGH SCHOOL
echo ========================================================
echo Dang khoi dong may chu web Robotics...

cd /d "%~dp0"

set "PYTHON_EXE=python"
where python >nul 2>nul
if %errorlevel% neq 0 (
    if exist "C:\Users\ADMIN\AppData\Local\Programs\Thonny\python.exe" (
        set "PYTHON_EXE=C:\Users\ADMIN\AppData\Local\Programs\Thonny\python.exe"
    )
)

echo Su dung: %PYTHON_EXE%
start "" http://127.0.0.1:3000
"%PYTHON_EXE%" app.py

pause
