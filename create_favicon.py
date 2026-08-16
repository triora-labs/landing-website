from PIL import Image

def create_favicon():
    img = Image.open('public/images/light.png')
    bbox = img.getbbox()
    if not bbox:
        print("Empty image")
        return
        
    print("Total BBox:", bbox)
    
    # Calculate square crop for the icon on the left
    # Assuming the icon height is the full height of the bbox
    height = bbox[3] - bbox[1]
    
    # Square crop based on height, starting from the left edge of bbox
    crop_box = (bbox[0], bbox[1], bbox[0] + height, bbox[3])
    
    icon_img = img.crop(crop_box)
    
    # Save as Next.js app icon
    icon_img = icon_img.resize((256, 256), Image.Resampling.LANCZOS)
    icon_img.save('src/app/icon.png')
    print("Successfully created src/app/icon.png")

create_favicon()
