// Where is the circle
var x;
var y;

var start1;
var start2;

var r = 0;
var g = 0;
var b = 0;


function setup() {
  createCanvas(1200, 650);
  x = width / 2;
  y = height;
  background(r,g,b);

}

function draw() {

  // Draw a circle
  stroke(255, 0, 0);
  strokeWeight(3)
  fill(255);
  ellipse(x , y, 24, 24);

  // Jiggling randomly on the horizontal axis
  x = x + random(10, -10);
  // Moving up at a constant speed
  y = y - 6;

  // Reset to the bottom
  if (y < 0) {
    y = height;
  }

  if (x > 800) {
    x = width / 2;
    y = height;
  }

  if (x < 0) {
    x = width / 2;
    y = height;
  }

}
