let x = 550;
let y = 260;
let gameOver = false;
let enemies = []; //make static(enemies)

function setup() {
  createCanvas(600, 500);
  //loop to apply a random value to each instance of enemy
  for (let i = 0; i < 20; i++) {
    //apply values to enemy
    enemies.push({ x: random(width), y: random(height), size: random(20, 40) });
  }
  }

function draw() {
  fill(225);
  background(100);

  if (!gameOver) {
    // Player
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
    
    // Enemies
    noStroke();
    fill("grey");
    for (let i = 0; i < enemies.length; i++) {
      ellipse(enemies[i].x, enemies[i].y, enemies[i].size);
      //distance between player and enemy pos
      let distance = dist(x, y, enemies[i].x, enemies[i].y);
      if (distance <= enemies[i].size / 2 + 5) { 
        gameOver = true;  
      }
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