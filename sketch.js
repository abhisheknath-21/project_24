var ground, dustbin1, dustbin2, dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
                      
function setup() {
	createCanvas(1100, 300);
            
	engine = Engine.create();
	world = engine.world;
            
	//Create the Bodies Here.
	paper1 = new Paper(100, 250);

	ground = createSprite(550, 280, 1100, 15);
	ground.shapeColor=("yellow");

	dustbin1= createSprite(900, height-40, 200, 20);
	dustbin1.shapeColor=("white")

	dustbin2=createSprite(800, 210, 20, 100);
	dustbin2.shapeColor=("white")
  
	dustbin3=createSprite(1000, 210, 20, 100);
	dustbin3.shapeColor=("white")

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper1.display();

  keyPressed();       
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:85, y:-85} );
	}
}


