import pygame
import random

random_color = random.randint(0,255)

# Constants for the game
GRID_SIZE = 4
TILE_SIZE = 50
MARGIN = 10

# Colors for the game
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
GRAY = (128, 128, 128)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)
YELLOW = (230, 230, 0)

# Initialize the Pygame library
pygame.init()

# Set the window size and title
window_size = (GRID_SIZE * TILE_SIZE) + (GRID_SIZE + 1) * MARGIN
screen = pygame.display.set_mode((window_size, window_size))
pygame.display.set_caption("2048")

# Set the font for displaying text
font = pygame.font.Font(None, 36)

# Create an empty grid
grid = [[0 for _ in range(GRID_SIZE)] for _ in range(GRID_SIZE)]

# Function to draw the grid on the screen
def draw_grid():
  for row in range(GRID_SIZE):
    for col in range(GRID_SIZE):
      value = grid[row][col]
      x = col * TILE_SIZE + (col + 1) * MARGIN
      y = row * TILE_SIZE + (row + 1) * MARGIN
      if value == 2:
        pygame.draw.rect(screen, RED, (x, y, TILE_SIZE, 50), 0)
      elif value == 4:
        pygame.draw.rect(screen, GREEN, (x, y, TILE_SIZE, 50), 0)
      elif value == 8:
        pygame.draw.rect(screen, GRAY, (x, y, TILE_SIZE, 50), 0)
      elif value == 16:
        pygame.draw.rect(screen, BLUE, (x, y, TILE_SIZE, 50), 0)
      elif value == 32:
        pygame.draw.rect(screen, YELLOW, (x, y, TILE_SIZE, 50), 0)
      elif value == 64:
        pygame.draw.rect(screen, (255, 0, 255), (x, y, TILE_SIZE, 50), 0)
      elif value == 128:
        pygame.draw.rect(screen, (26, 102, 0), (x, y, TILE_SIZE, 50), 0)
      elif value == 256:
        pygame.draw.rect(screen, (92, 138, 138), (x, y, TILE_SIZE, 50), 0)
      elif value == 512:
        pygame.draw.rect(screen, (255, 128, 255), (x, y, TILE_SIZE, 50), 0)
      elif value == 1024:
        pygame.draw.rect(screen, (0, 19, 77), (x, y, TILE_SIZE, 50), 0)
      elif value == 2048:
        pygame.draw.rect(screen, (133, 224, 224), (x, y, TILE_SIZE, 50), 0)
      else:
        pygame.draw.rect(screen, (random_color, random_color, random_color), (x, y, TILE_SIZE, 50), 0)
      if value > 0:
        text = font.render(str(value), True, WHITE)
        x = col * TILE_SIZE + (col + 1) * MARGIN
        y = row * TILE_SIZE + (row + 1) * MARGIN
        screen.blit(text, (x + TILE_SIZE // 2 - text.get_width() // 2, y + TILE_SIZE // 2 - text.get_height() // 2))

# Function to add a new tile to the grid
def add_tile():
  empty_cells = [(row, col) for row in range(GRID_SIZE) for col in range(GRID_SIZE) if grid[row][col] == 0]
  if empty_cells:
    row, col = random.choice(empty_cells)
    grid[row][col] = 2 if random.random() < 0.9 else 4

# Function to move the tiles in the specified direction
def move_tiles(direction):
  if direction == "up":
    # Move tiles up
    for col in range(GRID_SIZE):
      new_row = 0
      for row in range(GRID_SIZE):
        if grid[row][col] > 0:
          if new_row > 0 and grid[new_row - 1][col] == grid[row][col]:
            # Merge tiles
            grid[new_row - 1][col] *= 2
            grid[row][col] = 0
            new_row -= 1
          elif new_row != row:
            # Move tile
            grid[new_row][col] = grid[row][col]
            grid[row][col] = 0
          new_row += 1
  elif direction == "down":
    # Move tiles down
    for col in range(GRID_SIZE):
      new_row = GRID_SIZE - 1
      for row in range(GRID_SIZE - 1, -1, -1):
        if grid[row][col] > 0:
          if new_row < GRID_SIZE - 1 and grid[new_row + 1][col] == grid[row][col]:
            # Merge tiles
            grid[new_row + 1][col] *= 2
            grid[row][col] = 0
            new_row += 1
          elif new_row != row:
            # Move tile
            grid[new_row][col] = grid[row][col]
            grid[row][col] = 0
          new_row -= 1
  elif direction == "left":
    # Move tiles left
    for row in range(GRID_SIZE):
      new_col = 0
      for col in range(GRID_SIZE):
        if grid[row][col] > 0:
          if new_col > 0 and grid[row][new_col - 1] == grid[row][col]:
            # Merge tiles
            grid[row][new_col - 1] *= 2
            grid[row][col] = 0
            new_col -= 1
          elif new_col != col:
            # Move tile
            grid[row][new_col] = grid[row][col]
            grid[row][col] = 0
          new_col += 1
  elif direction == "right":
    # Move tiles right
    for row in range(GRID_SIZE):
      new_col = GRID_SIZE - 1
      for col in range(GRID_SIZE - 1, -1, -1):
        if grid[row][col] > 0:
          if new_col < GRID_SIZE - 1 and grid[row][new_col + 1] == grid[row][col]:
            # Merge tiles
            grid[row][new_col + 1] *= 2
            grid[row][col] = 0
            new_col += 1
          elif new_col != col:
            # Move tile
            grid[row][new_col] = grid[row][col]
            grid[row][col] = 0
          new_col -= 1
# Handle events


# Main game loop
running = True
while running:
  # Handle events
  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      running = False

    # bouton for game
    elif event.type == pygame.KEYDOWN:
      if event.key == pygame.K_UP:
        direction = "up"
        move_tiles(direction)
        pass
      elif event.key == pygame.K_DOWN:
        direction = "down"
        move_tiles(direction)
        pass
      elif event.key == pygame.K_LEFT:
        direction = "left"
        move_tiles(direction)
        pass
      elif event.key == pygame.K_RIGHT:
        direction = "right"
        move_tiles(direction)
        pass


  pygame.display.flip()

  # Add a new tile to the grid
  add_tile()

  # Draw the grid
  screen.fill(BLACK)
  draw_grid()

# Quit Pygame
pygame.quit()
