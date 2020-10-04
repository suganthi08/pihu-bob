
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5, roof
var chain1, chain2, chain3, chain4, chain5;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
  rectMode(CENTER)

	engine = Engine.create();
  world = engine.world;
  roof = new Roof(width/2,height/4,width/7,20);
  bobDiameter = 40;
  bobPositionx = width/2;
  bobPositiony = height/4+500;
  bob1 = new Bob(bobPositionx-bobDiameter*2,bobPositiony,bobDiameter);
  bob2 = new Bob(bobPositionx-bobDiameter,bobPositiony,bobDiameter);
  bob3 = new Bob(bobPositionx,bobPositiony,bobDiameter);
  bob4 = new Bob(bobPositionx+bobDiameter,bobPositiony,bobDiameter);
  bob5 = new Bob(bobPositionx+bobDiameter*2,bobPositiony,bobDiameter);

    chain1 = new Chain(bob1.body,roof.body,-bobDiameter*2,0);
    chain2 = new Chain(bob2.body,roof.body,-bobDiameter,0);
    chain3 = new Chain(bob3.body,roof.body,0,0);
    chain4 = new Chain(bob4.body,roof.body,bobDiameter,0);
    chain5 = new Chain(bob5.body,roof.body,bobDiameter*2,0);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(230);
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  }
}

