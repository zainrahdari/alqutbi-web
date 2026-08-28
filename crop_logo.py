from PIL import Image

def trim(im):
    # Convert to RGBA if not already
    im = im.convert("RGBA")
    # Get the bounding box of the non-transparent/non-white pixels
    # Since the logo is black text on transparent/white background:
    # Let's find all pixels that are not fully transparent and not pure white.
    datas = im.getdata()
    
    # Find bounding box
    width, height = im.size
    left = width
    top = height
    right = 0
    bottom = 0
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = datas[y * width + x]
            # If pixel is not transparent and not white
            if a > 10 and not (r > 240 and g > 240 and b > 240):
                if x < left: left = x
                if x > right: right = x
                if y < top: top = y
                if y > bottom: bottom = y
                
    # Add a small padding
    padding = 20
    left = max(0, left - padding)
    top = max(0, top - padding)
    right = min(width, right + padding)
    bottom = min(height, bottom + padding)
    
    if right > left and bottom > top:
        return im.crop((left, top, right, bottom))
    return im

try:
    img = Image.open("/Users/zainimtiaz/Desktop/Al-Qutbi web/public/logo.png")
    cropped = trim(img)
    cropped.save("/Users/zainimtiaz/Desktop/Al-Qutbi web/public/logo.png")
    print("Success: Cropped logo.png")
except Exception as e:
    print(f"Error: {e}")
