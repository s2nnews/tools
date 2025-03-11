import matplotlib.pyplot as plt
import numpy as np
import os

# Define the path for saving images
SAVE_PATH = r"C:\Users\micha\OneDrive\Documents\GitHub\s2n_daily-routines\tools\docs\images"

# Create the images directory if it doesn't exist
os.makedirs(SAVE_PATH, exist_ok=True)

# Create some sample data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Create the plot
plt.figure(figsize=(12, 6))
plt.plot(x, y, linewidth=2, color='blue')
plt.title('Simple Sine Wave', pad=20)
plt.xlabel('X')
plt.ylabel('Y')
plt.grid(True, alpha=0.3)

# Add some padding around the plot
plt.tight_layout()

# Save the plot
save_file = os.path.join(SAVE_PATH, 'test_plot.png')
plt.savefig(save_file, dpi=300, bbox_inches='tight')
plt.close()

print(f"Plot saved to: {save_file}")