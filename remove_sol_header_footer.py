import os

file_path = r"d:\My Websites\globallinkconsulting\GlobalLinkConsulting.Mvc\Views\Clones\Solexpress.cshtml"

def remove_lines():
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except UnicodeDecodeError:
        print("Failed to read with utf-8, trying mixed?")
        return

    new_lines = []
    # 1-based index conversion
    # Ranges to remove:
    # 737 - 860 (Header Part 1)
    # 862 - 1276 (Header Part 2)
    # 2500 - 2716 (Footer)
    
    ranges = [
        (737, 860, "<!-- Header Part 1 Removed -->\n"),
        (862, 1276, "<!-- Header Part 2 Removed -->\n"),
        (2500, 2716, "<!-- Footer Removed -->\n")
    ]

    for i, line in enumerate(lines):
        line_num = i + 1
        skip = False
        replacement = ""
        
        for start, end, rep in ranges:
            if start <= line_num <= end:
                skip = True
                if line_num == start:
                    replacement = rep
                break
        
        if skip:
            if replacement:
                new_lines.append(replacement)
        else:
            new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    print("Successfully removed lines.")

if __name__ == "__main__":
    remove_lines()
