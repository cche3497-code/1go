// Pong Game Logic

const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

// Create the Pong Paddle
const paddleWidth = 10;
const paddleHeight = 100;
const playerPaddle = {
    x: 0,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: 'white',
};

// Create the Pong Ball
const ballSize = 10;
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: ballSize,
    speed: 5,
    velocityX: 5,
    velocityY: 5,
    color: 'white',
};

// Draw the elements
function draw() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw player paddle
    context.fillStyle = playerPaddle.color;
    context.fillRect(playerPaddle.x, playerPaddle.y, playerPaddle.width, playerPaddle.height);
    // Draw the ball
    context.fillStyle = ball.color;
    context.fillRect(ball.x, ball.y, ball.size, ball.size);
}

// Update the position of the ball
function update() {
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    // Ball collision with top and bottom
    if (ball.y + ball.size > canvas.height || ball.y < 0) {
        ball.velocityY = -ball.velocityY;
    }

    // Ball collision with paddles (not implemented in this logic)
}

// Game loop
function gameLoop() {
    draw();
    update();
    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();