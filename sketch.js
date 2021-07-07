
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ground1;
var paper; 
var paper1;
var dustbin;
var dustbin1;
var dustbin2;
var dustbin3;

function preload()
{

}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(500,480,width,40)
	paper1 = new Paper(50,100,50)
	dustbin1 = new Dustbin(925,400,40,120)
	dustbin2 = new Dustbin(665,400,40,120)
	dustbin3 = new Dustbin(795,440,300,40)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();

  if((paper1.x===680)&&(paper1.x===900)){
	Paper.restitution=0
}

 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}





