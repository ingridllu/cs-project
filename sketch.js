let plate = {
  platePosition: 1000/2,
  y: 400,
  right : function() {
    this.platePosition+=10;
  },
  left : function() {
    this.platePosition-=10;
  },
  display: function() {
    ellipse(this.platePosition, this.y, 120, 50);
    ellipse(this.platePosition, this.y, 100, 40)
  }
}

function setup() {
    createCanvas(1000, 500);
    console.log("hello world")
    plate.display()
    // movingPlate()
  }
  
  function draw() {
    background(0,0,0);

    plate.display()

    if (keyIsDown(39)) {
      plate.right();
    }
    if (keyIsDown(37)) {
      plate.left();
    }
  }

//   function keyPressed() {
//     if (keyCode == RIGHT_ARROW) {
//       plate.move();
//  }  
// }

  // function movingPlate() {
  //   let x = windowWidth/2
  //   let y = windowHeight-50
  //   ellipse(x, y, 100)
  //   if (keyCode === LEFT_ARROW) {
  //     x-=2
  //   } else if (keyCode === RIGHT_ARROW) {
  //     x+=2
  //   }
  // }
