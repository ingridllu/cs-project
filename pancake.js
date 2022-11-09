class Pancake{
    constructor (color, x, y){
         this.x = x
         this.y = y
        this.x = random(0, windowWidth);
        this.color = color;
        this.checkCollision==false
    }

    checkCollision() {
        if (Math.abs(this.x - plate.x)<100 && this.y==plate.y) {
            return true
        }  
        return false
    }
    fall (){
        if (this.checkCollision == false){
            let y=0
            fill(this.color)
            ellipse(this.x, this.y, 90, 35)
            this.y++
        }
    }





}