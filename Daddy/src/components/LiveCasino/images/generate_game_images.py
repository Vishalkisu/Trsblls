from PIL import Image, ImageDraw, ImageFont
import random
import colorsys
import os

def generate_gradient_background(width, height):
    """Generate a smooth gradient background."""
    base = Image.new('RGB', (width, height), (255, 255, 255))
    draw = ImageDraw.Draw(base)

    # Generate two complementary colors
    hue1 = random.random()
    hue2 = (hue1 + 0.5) % 1.0
    
    rgb1 = [int(x * 255) for x in colorsys.hsv_to_rgb(hue1, 0.7, 0.8)]
    rgb2 = [int(x * 255) for x in colorsys.hsv_to_rgb(hue2, 0.7, 0.8)]

    for y in range(height):
        # Linear gradient
        r = int(rgb1[0] + (rgb2[0] - rgb1[0]) * y / height)
        g = int(rgb1[1] + (rgb2[1] - rgb1[1]) * y / height)
        b = int(rgb1[2] + (rgb2[2] - rgb1[2]) * y / height)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    return base

def add_game_elements(image, game_name):
    """Add game name and decorative elements to the image."""
    draw = ImageDraw.Draw(image)
    
    # Load a nice font (you might need to adjust the font path)
    try:
        font_large = ImageFont.truetype("arial.ttf", 60)
        font_small = ImageFont.truetype("arial.ttf", 30)
    except IOError:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()

    # Add game name
    draw.text((50, image.height - 150), game_name, font=font_large, fill=(255, 255, 255))
    
    # Add some decorative icons or shapes
    for _ in range(5):
        x = random.randint(0, image.width)
        y = random.randint(0, image.height)
        size = random.randint(10, 50)
        color = (255, 255, 255, 50)  # Translucent white
        draw.ellipse([x, y, x+size, y+size], fill=color)

def generate_game_images():
    """Generate a set of game images."""
    games = [
        'Teen Patti Classic',
        'Andar Bahar',
        'Roulette Royal',
        'Poker Masters',
        'Dragon Tiger',
        'Blackjack Elite',
        'Casino Royale',
        'Lucky 7',
        'Aviator Game',
        'Evolution Live'
    ]

    output_dir = 'c:/Users/Visha/OneDrive/Documents/React Projects/Game Project/Casino-Games/public/Image'
    os.makedirs(output_dir, exist_ok=True)

    for game in games:
        # Create image
        width, height = 800, 600
        image = generate_gradient_background(width, height)
        
        # Add game elements
        add_game_elements(image, game)
        
        # Save image
        filename = game.lower().replace(' ', '_') + '.jpg'
        filepath = os.path.join(output_dir, filename)
        image.save(filepath, quality=90)
        print(f"Generated {filename}")

if __name__ == '__main__':
    generate_game_images()
