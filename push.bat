@echo off
cd /d "D:\Oktarico\Github\files"
echo Adding all files...
git add -A
echo Committing...
git commit -m "Update %date% %time%"
echo Pushing to GitHub...
git push origin master
echo.
echo ================================
echo Done! Website updated on GitHub.
echo ================================
pause
