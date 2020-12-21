class Bob
{
    constructor(x,y,r)
    {
       var options={
        restitution : 0.8,
        friction : 1.5,
        density : 0.5
       }
       this.body = Bodies.circle(x,y,50,r,options)
       World.add(world,this.body)
       this.w=50
       this.h=r
   }
     display(){
        
        eclipseMode(CENTER)
        eclipse(this.body.position.x,this.body.position.y,this.w,this.h)
         
        }
     

}