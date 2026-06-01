import os
import json
import requests
import time

# Create the directory if it doesn't exist
folder_name = "claud_fences_assets"
os.makedirs(folder_name, exist_ok=True)

base_url = "https://claudsfences.com/img/"

image_list = [
  {"file": "p12.jpg",  "description": "Vinyl Fence Shrewsbury, MA",                       "category": "Vinyl"},
  {"file": "p2.JPG",   "description": "Pressure Treated Spruce Pine Millbury, MA",         "category": "Wood"},
  {"file": "p13.jpg",  "description": "Vinyl Fence Framingham, MA",                        "category": "Vinyl"},
  {"file": "p4.JPG",   "description": "Spruce Pine Fence Worcester, MA",                   "category": "Wood"},
  {"file": "p5.JPG",   "description": "Vinyl Fence Marlborough, MA",                       "category": "Vinyl"},
  {"file": "p6.JPG",   "description": "Spruce Pine Fir Dog Ear Wood Fence Framingham, MA", "category": "Wood"},
  {"file": "p7.JPG",   "description": "Cedar Garden Fence Lawrence, MA",                   "category": "Wood"},
  {"file": "p8.JPG",   "description": "Lattice Vinyl Fence Northborough, MA",              "category": "Vinyl"},
  {"file": "p9.JPG",   "description": "Lattice Vinyl Fence Northborough, MA",              "category": "Vinyl"},
  {"file": "p10.JPG",  "description": "Cedar Farm Fence Leominster, MA",                   "category": "Wood"},
  {"file": "p14.jpg",  "description": "Pressure Treated Pine Fence Shrewsbury, MA",        "category": "Wood"},
  {"file": "p15.jpg",  "description": "Pressure Treated Pine Fence Hudson, MA",            "category": "Wood"},
  {"file": "p16.jpg",  "description": "Spruce Fence Gardner, MA",                          "category": "Wood"},
  {"file": "p17.jpg",  "description": "Vinyl Fence Billerica, MA",                         "category": "Vinyl"},
  {"file": "p18.jpg",  "description": "Vinyl Picket Fence Mendon, MA",                     "category": "Vinyl"},
  {"file": "p19.jpg",  "description": "Pressure Treated Pine Fence Clinton, MA",           "category": "Wood"},
  {"file": "p20.jpg",  "description": "Pressure Treated Pine Fence Littleton, MA",         "category": "Wood"},
  {"file": "p21.jpg",  "description": "White Vinyl Fence Fitchburg, MA",                   "category": "Vinyl"},
  {"file": "p22.jpg",  "description": "White Vinyl Picket Fence Hopkinton, MA",            "category": "Vinyl"}
]

total_attempted = 0
succeeded = 0
failed = 0

portfolio_data = []

def download_image(url, local_path, retries=1):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
    }
    for attempt in range(retries + 1):
        try:
            response = requests.get(url, stream=True, headers=headers, timeout=10)
            if response.status_code == 200:
                with open(local_path, 'wb') as f:
                    for chunk in response.iter_content(1024):
                        f.write(chunk)
                # verify non-zero size
                if os.path.getsize(local_path) > 0:
                    return True
            print(f"Attempt {attempt + 1} failed for {url}. Status code: {response.status_code}")
        except Exception as e:
            print(f"Attempt {attempt + 1} failed for {url} with exception: {e}")
        time.sleep(1)
    return False

for item in image_list:
    total_attempted += 1
    original_filename = item["file"]
    # lowercased filename
    filename = original_filename.lower()
    local_path = os.path.join(folder_name, filename)
    url = base_url + original_filename
    
    print(f"Downloading {original_filename} to {local_path}...")
    success = download_image(url, local_path)
    
    if success:
        succeeded += 1
        item["file"] = filename
        item["local_path"] = os.path.join("claud_fences_assets", filename).replace("\\", "/")
        portfolio_data.append(item)
    else:
        failed += 1
        print(f"FAILURE: Could not download {original_filename}")

json_path = os.path.join(folder_name, "portfolio.json")
with open(json_path, 'w') as f:
    json.dump(portfolio_data, f, indent=2)

print("\n--- Summary ---")
print(f"Total attempted: {total_attempted}")
print(f"Succeeded:       {succeeded}")
print(f"Failed:          {failed}")
print(f"Metadata saved to {json_path}")
