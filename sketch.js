var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var pack;

const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body   = Matter.Body;

function preload(){

	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {

	createCanvas(700, 500);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35,700,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageSprite = new Samhita(width/2, 80, 10,10);

	packageBody = Bodies.circle(width/2 , 80 , 10 , {isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, height - 35 , width, 10 , {restitution:3,isStatic:true});
	World.add(world, ground);
	
    Package1 = new lines(350,390,102,10);
	Package2 = new lines(405,360,10,60);
	Package3 = new lines(295,360,10,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.display();
  Package1.display();
  Package2.display();
  Package3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    

     }
}



