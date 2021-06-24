
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3; 
var cradle,cradle1,cradle2
var ground;
var rope1,rope2,rope3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	cradle = new Cradle(400,350,100,10);
	bob1 = new Bob(100,200,30);
	ground = new Cradle(400,700,1000,10);
	rope1 = new Rope(bob1.body,cradle.body,60,0);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  cradle.display();
  bob1.display()
  ground.display();
  rope1.display();


 
}



