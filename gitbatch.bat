call git add .
set /p id="Enter Commit Description: "\r\n
call git commit -m "%id%"
REM call git push https://github.com/snawasth/cloudprint.git
call git push origin master
pause