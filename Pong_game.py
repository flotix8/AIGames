import sys
import pygame
import random

# Initialize Pygame
pygame.init()

random = random.randint(0,750)

# Set up the screen
screen = pygame.display.set_mode((1080, 720))
pygame.display.set_caption('Pong')

# Set up the colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)


def draw_button(rect, text, font, color, hover_color, surface):
    # Draw the outline
    pygame.draw.rect(surface, color, rect, 2)

    # Check if the mouse is hovering over the button
    if rect.collidepoint(pygame.mouse.get_pos()):
        # Draw the filled-in version of the button
        text_surface = font.render(text, True, RED)

        # pygame.draw.rect(surface, hover_color, rect)
    else:
        # Draw the empty version of the button
        text_surface = font.render(text, True, WHITE)

        # pygame.draw.rect(surface, color, rect)

    # Get the rectangle that surrounds the text
    text_rect = text_surface.get_rect()

    # Center the text rectangle within the button rectangle
    text_rect.center = rect.center

    # Draw the text on the screen
    screen.blit(text_surface, text_rect)

def menu():
    # Set up the screen
    screen = pygame.display.set_mode((1080, 720))
    pygame.display.set_caption('Menu')

    # Set up the fonts
    font = pygame.font.Font(None, 100)

    # Set up the button rectangles
    replay_button = pygame.Rect(500, 150, 120, 50)
    setting_button = pygame.Rect(500, 320, 120, 50)
    quit_button = pygame.Rect(500, 500, 120, 50)

    # Game loop
    while True:
        # Handle events
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

        # Fill the screen with a solid color
        screen.fill(BLACK)

        # Draw the buttons
        draw_button(replay_button, 'Play', font, BLACK, BLACK, screen)
        draw_button(setting_button, 'Setting', font, BLACK, BLACK, screen)
        draw_button(quit_button, 'Quit', font, BLACK, BLACK, screen)

        if event.type == pygame.MOUSEBUTTONDOWN:
            if replay_button.collidepoint(event.pos):
                test()
            elif setting_button.collidepoint(event.pos):
                continue
            elif quit_button.collidepoint(event.pos):
                pygame.quit()
                sys.exit()

        # Flip the display
        pygame.display.flip()

def test():
    # Set up the paddles
    left_paddle = pygame.Rect(80, 275, 10, 100)
    right_paddle = pygame.Rect(1000, 275, 10, 100)

    # Set up the ball
    ball = pygame.Rect(random, random, 10, 10)
    ball_speed_x = 5
    ball_speed_y = 5

    # Set up the clock
    clock = pygame.time.Clock()

    score = 0

    # Game loop
    while True:
        # Handle events
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                print(score)
                pygame.quit()
                sys.exit()

        # Move the paddles
        keys = pygame.key.get_pressed()
        if keys[pygame.K_z]:
            left_paddle.y -= 5
        if keys[pygame.K_s]:
            left_paddle.y += 5
        if keys[pygame.K_UP]:
            right_paddle.y -= 5
        if keys[pygame.K_DOWN]:
            right_paddle.y += 5

        # Move the ball
        ball.x += ball_speed_x
        ball.y += ball_speed_y

        # Check if the ball has hit a paddle or the wall
        if ball.colliderect(left_paddle) or ball.colliderect(right_paddle):
            ball_speed_x *= 1.05
            ball_speed_y *= 1.05
            ball_speed_x *= -1
            score += 1
        if ball.y > 700 or ball.y < 5:
            ball_speed_y *= -1
        if ball.x > 1080 or ball.x < 0:
            print(score)
            menu()
        if right_paddle.y <= 0:
            right_paddle.y = 0
        elif right_paddle.y >= 620:
            right_paddle.y = 620
        if left_paddle.y <= 0:
            left_paddle.y = 0
        elif left_paddle.y >= 620:
            left_paddle.y = 620


        # Draw everything
        screen.fill(BLACK)
        pygame.draw.rect(screen, WHITE, left_paddle)
        pygame.draw.rect(screen, WHITE, right_paddle)
        pygame.draw.rect(screen, WHITE, ball)
        pygame.display.flip()

        # Limit the frames per second
        clock.tick(60)

test()