
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var ball
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	ball=new Ball(300,300)
	
	
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1100,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  ball.display()

}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:145,y:-170})
	}
}
