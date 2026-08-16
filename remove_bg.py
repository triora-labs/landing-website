import sys
from PIL import Image
import math

def distance(c1, c2):
    return math.sqrt((c1[0]-c2[0])**2 + (c1[1]-c2[1])**2 + (c1[2]-c2[2])**2)

def remove_bg(input_path, output_path, tolerance=15, feather=40):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    bg_color = data[0] #assume top-left is bg
    
    new_data = []
    for item in data:
        dist = distance(item[:3], bg_color[:3])
        if dist < tolerance:
            new_data.append((item[0], item[1], item[2], 0))
        elif dist < tolerance + feather:
            alpha = int(((dist - tolerance) / feather) * 255)
            new_data.append((item[0], item[1], item[2], alpha))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

try:
    remove_bg("public/images/light.jpg", "public/images/light.png", tolerance=25, feather=40)
    remove_bg("public/images/dark.jpg", "public/images/dark.png", tolerance=25, feather=40)
    print("SUCCESS")
except Exception as e:
    print(f"ERROR: {e}")
