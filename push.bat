@echo off
cd /d "D:\Oktarico\Github\files"
git add .
git commit -m "Auto update %date% %time%"
git push origin master
echo.
echo Done! Your website is now updated on GitHub.
pause
