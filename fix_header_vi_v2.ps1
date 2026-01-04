$viPath = "d:\My Websites\globallinkconsulting\globallinkconsulting.sg\vi.html"
$headerPath = "d:\My Websites\globallinkconsulting\GlobalLinkConsulting.Mvc\Views\Shared\_Header.cshtml"

# Read vi.html content
$viContent = Get-Content $viPath -Raw -Encoding UTF8

# Extract the block using regex
# Looking for <div id="t4-megamenu-glac-vi-vn" ... </ul></div>
if ($viContent -match '(?ms)(<div id="t4-megamenu-glac-vi-vn".*?</ul></div>)') {
    $cleanBlock = $matches[1]
    
    # Fix paths
    # Replace href="vi/ with href="/vi/
    $cleanBlock = $cleanBlock -replace 'href="vi/', 'href="/vi/'
    # Replace src="images/ with src="/images/
    $cleanBlock = $cleanBlock -replace 'src="images/', 'src="/images/'
    
    # Link to home via logo might be inside? No, that's outside this block.
    
    # Replace 'deeper' class with 'mega' to match _Header structure
    $cleanBlock = $cleanBlock -replace 'deeper', 'mega'
    
    # Replace item-700 etc with data-id?
    # _Header: <li class="nav-item dropdown mega parent" data-id="700" data-level="1" data-align="left">
    # vi.html: <li class="nav-item item-700 mega dropdown parent" data-level=1> (after replacement)
    # The structure difference is annoying.
    # However, cleaning the TEXT is the priority. 
    # If I paste the vi.html structure, I hope the CSS 'mega' class handles the layout.
    
    # Read Header lines
    $headerLines = Get-Content $headerPath -Encoding UTF8
    
    # Line 2150 is index 2149 relative to 0-based array (if file is 1-indexed in view_file)
    $targetIndex = 2149
    
    if ($headerLines[$targetIndex] -match 't4-megamenu-glac-vi-vn') {
        Write-Host "Found target block at line 2150."
        
        # Verify next line is part of it? 
        # We assume lines 2150 and 2151 are the ones to replace.
        # We construct new content.
        
        $newLines = @()
        # Keep lines before
        if ($targetIndex -gt 0) {
            $newLines += $headerLines[0..($targetIndex - 1)]
        }
        
        # Add clean block
        $newLines += $cleanBlock
        
        # Keep lines after (skip 2 lines: 2149, 2150)
        # Start at 2151 (Line 2152 in file)
        if (($targetIndex + 2) -lt $headerLines.Count) {
            $newLines += $headerLines[($targetIndex + 2)..($headerLines.Count - 1)]
        }
        
        $newLines | Set-Content $headerPath -Encoding UTF8
        Write-Host "Successfully replaced corrupted content."
    } else {
        Write-Host "Error: Line 2150 does not start with t4-megamenu-glac-vi-vn"
        Write-Host "Line content: $($headerLines[$targetIndex])"
    }
} else {
    Write-Host "Error: Could not find t4-megamenu-glac-vi-vn block in vi.html"
}
