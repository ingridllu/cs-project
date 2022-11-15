class Pancake{
    constructor (color, color2, x, y){
         this.x = x
         this.y = y
        this.x = random(0, windowWidth);
        this.color = color;
        this.color2 = color2;
        this.checkCollision==false
    }

    checkCollision() {
        if (Math.abs(this.x - plate.x)<100 && this.y==plate.y) {
            return true
        }  
        return false
    }
    fall (){
        if (this.checkCollision() == false){
            let y=0
            fill(this.color)
            ellipse(this.x, this.y, 90, 35)
            fill(this.color2)
            ellipse(this.x, this.y-3, 80, 25)
            this.y++
        }
    }
}