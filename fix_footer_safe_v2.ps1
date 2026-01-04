$path = "d:\My Websites\globallinkconsulting\GlobalLinkConsulting.Mvc\Views\Shared\_Footer.cshtml"
$content = Get-Content $path -Raw -Encoding UTF8

# Replace NBSP (convert char to string)
$nbsp = [string][char]0x00A0
$content = $content.Replace($nbsp, "&nbsp;")

# Replace Double-encoded NBSP (Â + NBSP) just in case
# Â is \u00C2
$doubleEncoded = [string]::Format("{0}{1}", [char]0x00C2, [char]0x00A0)
if ($content.Contains($doubleEncoded)) {
    $content = $content.Replace($doubleEncoded, "&nbsp;")
}

$content | Set-Content $path -Encoding UTF8
Write-Host "Replaced NBSP in _Footer.cshtml"
