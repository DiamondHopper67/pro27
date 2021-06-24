class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=this.offsetX;
        this.offsetY=this.offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}

        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            strokeWeight(8);
            stroke(102,39,8);

            var Anchor1X=pointA.x;
            var Anchor1Y=pointA.y;

            var Anchor2X=pointB.x+this.offsetX;
            var Anchor2Y=pointB.y+this.offsetY;

            console.log(Anchor2X + ":"+ Anchor2Y)

            line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);

    }
}