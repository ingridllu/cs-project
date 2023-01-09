class BadPancake extends Pancake {
    constructor(color, color2, x, y) {
        super(color, color2, x, y)
    }
    checkCollision() {
        if (super.checkCollision()) {
            this.takePoints();
        }
       
    }

    die() {
        
    }

    // checkDead() {
    //     super.checkDead()
    // }

    // fall() {
    //     super.fall()
    // }
    takePoints(){
        plate.numPancakes=0;
    }
}