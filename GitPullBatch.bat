@echo off
REM call git add .
REM set /p id="Enter Commit Description: "\r\n
REM call git commit -m "%id%"
REM echo Wait for Process to complete.....
REM call git push https://github.com/grimmhuntress/Test1.git
call git pull https://github.com/snawasth/LoginApi.git master
pause