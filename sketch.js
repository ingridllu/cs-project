let pancakes = []
let plate = {
  x: 1000/2,
  y: 400,
  right : function() {
    this.x+=7;
  },
  left : function() {
    this.x-=7;
  },
  display: function() {
    fill('white')
    ellipse(this.x, this.y, 120, 50);
    ellipse(this.x, this.y, 100, 40)
  }
  // comeBack: function(){
  //   this.x=this.x%windowWidth
  //   if(this.x==-2)
  // }
}

function setup() {
    createCanvas(1000, 500);
    console.log("hello world")
    plate.display()
    // movingPlate()
    for (let i = 0; i<100; i++){
      pancakes.push(new Pancake('red', pancakes.x, -i*200))
    }
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
    for (const pancake of pancakes){
      pancake.fall();
      pancake.checkCollision();
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
