import os
import re

def format_title(filename):
    # Remove file extension
    name = os.path.splitext(filename)[0]
    # Replace underscores with spaces
    name = name.replace('_', ' ')
    # Capitalize each word
    name = ' '.join(word.capitalize() for word in name.split())
    return name

def generate_html():
    chart_dir = 'tools/assets/images/chart_gallery/random'
    html_content = []
    
    # Get all PNG files
    image_files = [f for f in os.listdir(chart_dir) if f.endswith('.png')]
    
    for image_file in image_files:
        title = format_title(image_file)
        html_item = f'''  <div class="chart-item">
    <a href="./assets/images/chart_gallery/random/{image_file}" class="lightbox" title="{title}">
        <img src="./assets/images/chart_gallery/random/{image_file}" alt="{title}">
    </a>
    <h3>{title}</h3>
  </div>'''
        html_content.append(html_item)
    
    return '\n\n'.join(html_content)

if __name__ == '__main__':
    html_content = generate_html()
    print(html_content) 