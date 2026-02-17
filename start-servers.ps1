# PowerShell script to start both Vite and PHP servers

Write-Host "Starting development servers..." -ForegroundColor Green

# Start PHP server in background
Write-Host "`nStarting PHP server on http://localhost:8000..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\public\assets'; php -S localhost:8000; Write-Host 'PHP Server stopped' -ForegroundColor Red"

# Wait a moment for PHP server to start
Start-Sleep -Seconds 2

# Start Vite dev server
Write-Host "`nStarting Vite dev server..." -ForegroundColor Cyan
npm run dev

Write-Host "`nServers stopped." -ForegroundColor Yellow
