
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5,ground,chain,chain2,chain3,chain4,chain5,line1,line2,line3,line4,line5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
     engine = Engine.create();
	world = engine.world;
    bob1=new Bob(300,550,-PI/6)
	bob2=new Bob(330,550,-PI/6)
	bob3=new Bob(360,550,-PI/6)
	bob4=new Bob(390,550,PI/6)
	bob5=new Bob(420,550,PI/6)
  ground= new Ground(150)
  chain=new Chain(bob1,ground,20,20)
  chain2=new Chain(bob2,ground,20,20)
  chain3=new Chain(bob3,ground,20,20)
  chain3=new Chain(bob4,ground,20,20)
  chain4=new Chain(bob5,ground,20,20)
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  ground.display()
  drawSprites();
 
}



