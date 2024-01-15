
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
let engine;
let world;
let ground;
let leftSide;
let rightSide;
let ball;


function preload()
{
	
}

function setup() {
	createCanvas(2000,684);
	
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}	


	engine = Engine.create();
	world = engine.world;

	 //creating ball body
	 var balloption={
		restitution:0.8
		}

	//Create the Bodies Here.
	ball=Bodies.circle(200,100,20,balloption)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



