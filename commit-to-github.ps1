# Git commands to commit and push to GitHub
# Make sure Git is installed and you've created the repository "Kamil-Pixel-Portfolio" on GitHub first

Write-Host "Initializing git repository..." -ForegroundColor Green
git init

Write-Host "Adding all files..." -ForegroundColor Green
git add .

Write-Host "Creating initial commit..." -ForegroundColor Green
git commit -m "Initial commit: Retro OS Portfolio with custom backgrounds and fixes"

Write-Host "Setting branch to main..." -ForegroundColor Green
git branch -M main

Write-Host "Adding remote repository..." -ForegroundColor Yellow
Write-Host "NOTE: Replace YOUR_USERNAME with your actual GitHub username!" -ForegroundColor Red
$username = Read-Host "Enter your GitHub username"
git remote add origin "https://github.com/$username/Kamil-Pixel-Portfolio.git"

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host "Done! Your code has been pushed to GitHub." -ForegroundColor Green

