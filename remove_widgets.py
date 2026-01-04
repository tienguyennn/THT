import os

files_to_edit = [
    {
        "path": r"d:\My Websites\globallinkconsulting\GlobalLinkConsulting.Mvc\Views\Clones\Solexpress.cshtml",
        "ranges": [
            (1964, 2065, "<!-- Facebook Messenger Removed -->\n"),
            (2066, 2108, "<!-- Toolbar Removed -->\n"),
            (2199, 2216, "<!-- Progress Wrap Removed -->\n"),
            (2218, 2238, "<!-- Btn Phone Removed -->\n"),
            (2239, 2247, "<!-- Btn Zalo Removed -->\n")
        ]
    },
    {
        "path": r"d:\My Websites\globallinkconsulting\GlobalLinkConsulting.Mvc\Views\Clones\Giaonhan247.cshtml",
        "ranges": [
            (9854, 9887, "<!-- Fixed Button Group Removed -->\n"),
            (9891, 10032, "<!-- Chatbox Skin2 Removed -->\n")
        ]
    }
]

def remove_widgets():
    for file_info in files_to_edit:
        file_path = file_info["path"]
        ranges = file_info["ranges"]
        
        if not os.path.exists(file_path):
            print(f"File not found: {file_path}")
            continue

        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                lines = f.readlines()
        except UnicodeDecodeError:
            print(f"Failed to read {file_path} with utf-8.")
            continue

        new_lines = []
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
        
        print(f"Successfully removed widgets from {os.path.basename(file_path)}.")

if __name__ == "__main__":
    remove_widgets()
