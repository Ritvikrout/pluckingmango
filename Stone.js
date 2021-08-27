class Stone {
    constructor () {
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(100, 400, 10, options)
        World.add(world, this.body)
    }
 
    display() {
        var stonepos = this.body.position
        push();
        translate(stonepos.x, stonepos.y)
        ellipse(0, 0, 20)
        pop();
    }
}