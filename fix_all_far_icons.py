import re
import os

files = [
    r"d:\My Websites\globallinkconsulting\GlobalLinkConsulting.Mvc\Views\Clones\Giaonhan247.cshtml",
    r"d:\My Websites\globallinkconsulting\GlobalLinkConsulting.Mvc\Views\Clones\Solexpress.cshtml"
]

def fix_all_far():
    for file_path in files:
        if not os.path.exists(file_path):
            print(f"Skipping {file_path}")
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # regex for strict word boundary to avoid replacing partial words
            # looking for class usage like "far fa-..." or " far "
            
            # Simplest approach: global replace of word boundary 'far' with 'fas'
            # verifying it doesn't break other things (unlikely 'far' is a variable name in cshtml HTML parts)
            
            new_content, count = re.subn(r'\bfar\b', 'fas', content)
            
            if count > 0:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Replaced {count} instances of 'far' -> 'fas' in {os.path.basename(file_path)}")
            else:
                print(f"No 'far' instances found in {os.path.basename(file_path)}")
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    fix_all_far()
