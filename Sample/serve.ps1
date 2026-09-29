# ============================================================
# Lightweight Local Static File Server in PowerShell
# Runs on http://localhost:8080 without requiring Node or Python
# ============================================================

$port = 8080
$prefix = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "=========================================================" -ForegroundColor Green
    Write-Host "   ☕ Aura Cafe & Roastery Local Server Running!" -ForegroundColor Yellow
    Write-Host "   Open in Browser: $prefix" -ForegroundColor Cyan
    Write-Host "   Press Ctrl+C in this window to stop the server." -ForegroundColor Gray
    Write-Host "=========================================================" -ForegroundColor Green

    # Attempt to open the default browser automatically
    Start-Process $prefix

    $basePath = (Get-Location).Path

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath
        if ($path -eq "/" -or $path -eq "") {
            $path = "/index.html"
        }

        # Normalize relative path
        $localPath = Join-Path $basePath $path.TrimStart('/')

        if (Test-Path $localPath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            
            # MIME types
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $mime = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".svg"  { "image/svg+xml" }
                ".png"  { "image/png" }
                ".json" { "application/json" }
                default { "application/octet-stream" }
            }

            $response.ContentType = $mime
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }

        $response.OutputStream.Close()
    }
}
finally {
    $listener.Stop()
}
