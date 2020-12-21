class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
          }
      
          this.chain = Constraint.create(options)
          World.add(world,this.chain)
    }
    display(){ 
        strokeWeight(3)
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        
        var Anchore1X=pointA.x
        var Anchore1Y=pointB.y
        var Anchore2X=pointB.x+this.offsetX
        var Anchore2Y=pointB.y+this.offsety
        line(Anchore1X,Anchore1y,Anchore2X,Anchore2Y);
    }
}