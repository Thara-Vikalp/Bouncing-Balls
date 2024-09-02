// Get the canvas element
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the canvas dimensions
canvas.width = 600;
canvas.height = 400;

// Define the ball object
class Ball {
  constructor(x, y, radius, color, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off the walls
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.speedY = -this.speedY;
    }
  }
}

// Create an array to store the balls
const balls = [];

// Create 10 balls with random properties
for (let i = 0; i < 10; i++) {
  const x = Math.random() * (canvas.width - 20) + 10;
  const y = Math.random() * (canvas.height - 20) + 10;
  const radius = Math.random() * 20 + 10;
  const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
  const speedX = Math.random() * 4 - 2;
  const speedY = Math.random() * 4 - 2;
  balls.push(new Ball(x, y, radius, color, speedX, speedY));
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].draw();
  }

  requestAnimationFrame(animate);
}

animate();
