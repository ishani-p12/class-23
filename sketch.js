const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,box1,box2;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
ground=new Ground(200,300,50,50);
 box1=new Box(200,100,50,50);
 box2=new Box(200,300,30,80);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
 box1.display();
 box2.display();
 ground.display();
 }