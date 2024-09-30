let x = 550;
let y = 260;
let gameOver = false;

function setup() {
  createCanvas(600, 500);
}

function draw() {
  fill(225);
  background(100);

  if (!gameOver) {
  //player
  stroke(0);
  fill("white");
 
  ellipse(x, y, 10, 10);
 // Movement
  if (keyIsDown(LEFT_ARROW)) { 
    x -= 5;
  } 
  if (keyIsDown(RIGHT_ARROW)) { 
    x += 5;
  } 
  if (keyIsDown(UP_ARROW)) { 
    y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) { 
    y += 5;
  }
  x = constrain(x, 0, 600);
  y = constrain(y, 0, 500);

  //enemy
  noStroke();
  fill("grey");
  ellipse(200, 250, 100, 100);

  //collision
  let distance = dist(x, y, 200, 250); 

  if (distance <= 55) {
    gameOver = true;  
  }
    
  } else {
  // Game Over
  background(0); 
  fill("red");     
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Game Over!", width / 2, height / 2);
 }
}