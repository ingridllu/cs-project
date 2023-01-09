class Pancake {
    constructor(color, color2, x, y) {
        this.x = x
        this.y = y
        this.x = random(0, windowWidth);
        this.color = color;
        this.color2 = color2;
        this.isFalling = true;
        this.speed = 2
        this.isDead = false;
    }

    checkCollision() {
        if (this.isFalling) {
            if (Math.abs(this.x - plate.x) < 70 && abs(this.y - (plate.y - (plate.numPancakes) * 10 - 10)) < 5) {
                this.isFalling = false;
                plate.numPancakes++;
                console.log(this.speed)
                return true;
            }
        }
        return false;
    }

    die() {
        plate.lives -= 1
        this.isDead = true;
    }

    checkDead() {
        if (this.y > windowHeight && this.isDead == false) {
            this.isDead = true
            return true
        }
        return false
    }

    fall() {
        if (this.isFalling == true && this.isDead == false) {
            this.updatedSpeed = this.speed + plate.numPancakes * .06
            fill(this.color)
            ellipse(this.x, this.y, 140, 60)
            fill(this.color2)
            ellipse(this.x, this.y - 3, 130, 50)
            this.y += this.updatedSpeed
        }
        return this.y
    }

}