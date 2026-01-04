import os

files = [
    r"d:\My Websites\globallinkconsulting\GlobalLinkConsulting.Mvc\Views\Clones\Giaonhan247.cshtml",
    r"d:\My Websites\globallinkconsulting\GlobalLinkConsulting.Mvc\Views\Clones\Solexpress.cshtml"
]

fix_css = """
    <style>
      /* Fix for Pro font family in pseudo-elements */
      .mz-select-control-md:before {
          font-family: "Font Awesome 6 Free" !important;
          font-weight: 900 !important;
      }
    </style>
"""

def apply_fix():
    for file_path in files:
        if not os.path.exists(file_path):
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Avoid duplicates
            if "Fix for Pro font family" in content:
                print(f"Already patched {os.path.basename(file_path)}")
                continue

            if "</head>" in content:
                new_content = content.replace("</head>", fix_css + "\n  </head>")
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Patched {os.path.basename(file_path)}")
            else:
                print(f"No </head> in {os.path.basename(file_path)}")
                
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    apply_fix()
