
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var stonePosition, mangoPosition

function preload()
{
	tree = loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options = {
		isStatic:true
	}
	ground = Bodies.rectangle(400, 595, 800, 10, options)
	World.add(world, ground);
    
	stone = new Stone();
	
	mango1 = new Mango(500, 300 , 35);
	

	slingshot = new Catapult(stone.body, {x:100, y:450})

	Engine.run(engine);
  
}


function draw() {


  background(255);
  Engine.update(engine)

  


  rectMode(CENTER);
  push();
  fill(100, 51, 11)
  rect(400, 595, 800, 10)
  pop();

  image(tree, 400, 210, 400, 400)
  stone.display();
  mango1.display();
  slingshot.display();
 
 detectCollision(mango1, stone)

  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased() {
	slingshot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
       slingshot.attach(stone.body);
	}
}

function detectCollision (mango, stone) {
   stonePosition = stone.body.position
   mangoPosition = mango.body.position

   var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y)

   if (distance  <= mango.r + stone.r) {
	   Matter.Body.setStatic(mango.body, false);
   }
}


