const canvas = document.getElementById("retro-grid");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const perspective = 1000; // Controls depth of perspective
const gridSize = 80;      // Increased grid size for larger columns
const speed = 0.3;        // Slowed down the speed for smoother animation

let gridLines = [];

// Function to create grid lines in 3D space
function createGrid() {
  for (let z = -perspective; z < perspective; z += gridSize) {
    for (let x = -canvas.width / 2; x < canvas.width / 2; x += gridSize) {
      gridLines.push({ x, z });
    }
  }
}

// Function to project 3D points onto 2D canvas
function project(x, z) {
  const scale = perspective / (perspective + z); // Scale based on z-depth
  const screenX = x * scale + canvas.width / 2;
  const screenY = canvas.height / 2 + (canvas.height / 4 * scale);
  return { x: screenX, y: screenY };
}

// Function to draw the grid with 3D perspective
function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#CCCCCC"; // Light grey color for grid lines
  ctx.lineWidth = 1;

  for (let i = 0; i < gridLines.length; i++) {
    let line = gridLines[i];

    // Project the 3D points to 2D space
    const start = project(line.x, line.z);
    const endX = project(line.x + gridSize, line.z);
    const endZ = project(line.x, line.z + gridSize);

    // Draw horizontal grid lines
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(endX.x, start.y);
    ctx.stroke();

    // Draw vertical grid lines
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(start.x, endZ.y);
    ctx.stroke();

    // Move the grid lines towards the camera
    line.z += speed;

    // Reset the line's position if it moves out of the view
    if (line.z > perspective) {
      line.z = -perspective;
    }
  }
}

function animate() {
  ctx.fillStyle = "white"; // White background
  ctx.fillRect(0, 0, canvas.width, canvas.height); // Apply background color
  drawGrid();
  requestAnimationFrame(animate);
}

// Initialize grid and animation
createGrid();
animate();

// Adjust canvas size on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gridLines = [];
  createGrid();
});

