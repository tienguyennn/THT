$path = "d:\My Websites\globallinkconsulting\GlobalLinkConsulting.Mvc\Views\Shared\_Header.cshtml"
$content = Get-Content $path -Raw -Encoding UTF8
$newContent = $content -replace 'src="/images/', 'src="~/images/'
$newContent | Set-Content $path -Encoding UTF8
Write-Host "Fixed image paths in _Header.cshtml"
