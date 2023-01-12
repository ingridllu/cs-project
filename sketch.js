let pancakes = []
let plate = {
  x: 0,
  y: 0,
  lives: 3,
  numPancakes: 0,
  right: function () {
    this.x += 10;
    this.comeBack()
  },
  left: function () {
    this.x -= 10;
    this.comeBack()
  },
  display: function () {
    fill('white')
    ellipse(this.x, this.y, 190, 65);
    ellipse(this.x, this.y, 170, 55);
    this.displayPancakes();
  },
  displayPancakes: function () {
    if (this.numPancakes > 0) {
      for (let i = 0; i < this.numPancakes; i++) {
        fill('beige')
        ellipse(this.x, this.y - i * 10, 140, 60)
        fill('brown')
        ellipse(this.x, this.y - 3 - i * 10, 130, 50)
      }
    }
  },
  displayBadPancakes: function () {
    if (this.numPancakes > 0) {
      for (let i = 0; i < this.numPancakes; i++) {
        fill('brown')
        ellipse(this.x, this.y - i * 10, 140, 60)
        fill('black')
        ellipse(this.x, this.y - 3 - i * 10, 130, 50)
      }
    }
  },
  comeBack: function () {
    if (this.x < -190) {
      this.x = windowWidth + 190
    }
    if (this.x > windowWidth + 190) {
      this.x = -50
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  initGame();
}

function initGame() {
  plate.x = width;
  plate.y = height - 45;

  console.log("hello world")
  // plate.display()
  // movingPlate()
  pancakes = [];
  for (let i = 0; i < 100; i++) {
    if (random() < .20) {
      pancakes.push(new BadPancake('brown', 'black', pancakes.x, -i * 400));
    }
    else {
      pancakes.push(new Pancake('beige', 'brown', pancakes.x, -i * 400))
    }

  }
}

function draw() {
  if (gameIsOver() == true) {
    displayGameOver()
  }
  else {
    run()
  }
}

function run() {
  background(255)
  plate.display()

  //moving
  if (keyIsDown(39)) {
    plate.right();
  }
  if (keyIsDown(37)) {
    plate.left();
  }
  for (const pancake of pancakes) {
    pancake.fall();
    pancake.checkCollision();
  }
  // for (const badPancake of pancakes){
  //   badPancake.fall();
  //   badPancake.checkCollision();
  //   badPancake.takePoints();
  // }
  fill(0)
  textSize(50)
  text(plate.numPancakes, 50, 50)
  console.log(plate.lives)
  amtOfLives()
  displayHearts()
}

function amtOfLives() {
  for (const pancake of pancakes) {
    console.log(typeof pancake);
    if (pancake.checkDead()) {
      pancake.die();
    }
  }
  for (const badPancake of pancakes) {
    if (badPancake.checkDead()) {
      plate.lives -= 1
      badPancake.isDead = true;
    }
  }
}

function displayHearts() {
  for (let i = 0; i <= plate.lives - 1; i++) {
    fill('red')
    heart(windowWidth - 160 + 50 * i, 50, 40)
  }
}

function displayGameOver() {
  background(0);
  fill(255)
  textSize(100)
  text("Game Over", windowWidth / 2, windowHeight / 2)
}

function gameIsOver() {
  if (plate.lives <= 0) {
    return true
  }
  return false
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}