import os

files = [
    r"d:\My Websites\globallinkconsulting\GlobalLinkConsulting.Mvc\Views\Clones\Giaonhan247.cshtml",
    r"d:\My Websites\globallinkconsulting\GlobalLinkConsulting.Mvc\Views\Clones\Solexpress.cshtml"
]

force_css = """
    <style>
      /* Force Font Awesome 6 Free for all icon classes to override legacy/conflicting styles */
      .fa, .fas, .fa-solid {
          font-family: "Font Awesome 6 Free" !important;
          font-weight: 900 !important;
      }
      .far, .fa-regular {
          font-family: "Font Awesome 6 Free" !important;
          font-weight: 400 !important;
      }
      .fab, .fa-brands {
          font-family: "Font Awesome 6 Brands" !important;
          font-weight: 400 !important;
      }
    </style>
"""

def inject_force_css():
    for file_path in files:
        if not os.path.exists(file_path):
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if we already added it to avoid duplicates
            if "Force Font Awesome 6 Free" in content:
                print(f"Already patched {os.path.basename(file_path)}")
                continue

            # Insert before </head>
            if "</head>" in content:
                new_content = content.replace("</head>", force_css + "\n  </head>")
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Injected CSS into {os.path.basename(file_path)}")
            else:
                print(f"No </head> tag in {os.path.basename(file_path)}")
                
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    inject_force_css()
