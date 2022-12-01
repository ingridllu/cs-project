class Pancake {
    constructor(color, color2, x, y) {
        this.x = x
        this.y = y
        this.x = random(0, windowWidth);
        this.color = color;
        this.color2 = color2;
        this.isFalling = true;
        this.speed = 1.25
        // this.checkCollision==false
    }

    checkCollision() {
        if (this.isFalling) {
            if (Math.abs(this.x - plate.x) < 70 && abs(this.y - (plate.y - (plate.numPancakes)*10-10)) < globalThis.updatedSqeed) {
                this.isFalling = false;
                plate.numPancakes++;
                this.speed += .25
                console.log(this.speed)
            }
        }
    }

    fall() {
        if (this.isFalling == true) {
            this.updatedSpeed = this.speed + plate.numPancakes * .10
            fill(this.color)
            ellipse(this.x, this.y, 90, 35)
            fill(this.color2)
            ellipse(this.x, this.y - 3, 80, 25)
            this.y+= this.updatedSpeed
                }

    }
}