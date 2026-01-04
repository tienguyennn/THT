$path = "d:\My Websites\globallinkconsulting\GlobalLinkConsulting.Mvc\Views\Page\en\resources\blog.cshtml"
$content = Get-Content $path -Raw -Encoding UTF8

# Function to reverse Mojibake (UTF8 bytes interpreted as Windows-1252)
function Fix-Mojibake ($text) {
    # Get bytes as if it were Windows-1252
    $encoding1252 = [System.Text.Encoding]::GetEncoding(1252)
    $bytes = $encoding1252.GetBytes($text)
    
    # Interpret those bytes as UTF-8
    $encodingUtf8 = [System.Text.Encoding]::UTF8
    return $encodingUtf8.GetString($bytes)
}

try {
    $fixedContent = Fix-Mojibake $content
    $fixedContent | Set-Content $path -Encoding UTF8
    Write-Host "Fixed encoding in blog.cshtml"
} catch {
    Write-Host "Error fixing encoding: $_"
}
