class Chain{
    constructor(bodyA,bodyB,offsetx,offsety)
    {
        this.offsetx= offsetx;
        this.offsety= offsety;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetx,y:this.offsety}
        }
     this.chain = Constraint.create(options)
     World.add(world,this.chain)
    }
    display()
    {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(2);
        var anchor1x = pointA.x
        var anchor1y = pointA.y
        var anchor2x = pointB.x + this.offsetx
        var anchor2y = pointB.y + this.offsety
        line(anchor1x,anchor1y,anchor2x,anchor2y);
    }
}