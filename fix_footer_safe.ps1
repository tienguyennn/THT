$path = "d:\My Websites\globallinkconsulting\GlobalLinkConsulting.Mvc\Views\Shared\_Footer.cshtml"
$content = Get-Content $path -Raw -Encoding UTF8

# Replace NBSP
$content = $content.Replace([char]0x00A0, "&nbsp;")

# Replace Smart Quotes
$content = $content.Replace("“", "&ldquo;")
$content = $content.Replace("”", "&rdquo;")

# Replace Double-encoded NBSP (Â + NBSP) just in case
# Â is \u00C2
$doubleEncoded = [string]::Format("{0}{1}", [char]0x00C2, [char]0x00A0)
if ($content.Contains($doubleEncoded)) {
    $content = $content.Replace($doubleEncoded, "&nbsp;")
}

# Replace Â + space (if that's what view_file showed as a space?)
$doubleEncodedSpace = [string]::Format("{0} ", [char]0x00C2)
if ($content.Contains($doubleEncodedSpace)) {
    $content = $content.Replace($doubleEncodedSpace, "&nbsp;")
}


# Write back
$content | Set-Content $path -Encoding UTF8
Write-Host "Replaced special characters with HTML entities in _Footer.cshtml"
