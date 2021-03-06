
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
//text("NEWTON'S CRADLE",200,200);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob(250,500,30);
fill("white"); 
bob2 = new Bob(300,500,30);
bob3 = new Bob(350,500,30);
bob4 = new Bob(400,500,30);
bob5= new Bob(450,500,30);

roof = new Roof(300,200,230,20);
rope1 = new Rope(bob1.body,roof.body,-80,0);

rope2 = new Rope(bob2.body,roof.body,-30,0);
rope3 = new Rope(bob3.body,roof.body,20,0);
rope4 = new Rope(bob4.body,roof.body,80,0);
rope1.shapeColour="white";
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("purple");

  rectMode(CENTER);
  //imageMode(CENTER);
  //circleMode(RADIUS);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  
  roof.display();
  rope1.display();
 
  rope2.display();
  rope3.display();
  rope4.display();
  stroke("black");
  textSize(55);
  fill("yellow");
  text("NEWTON'S CRADLE ",160,100);        
  
  
 
}


function keyPressed(){
  if (keyCode === UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:0})

  }
}
