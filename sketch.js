
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boyImg,bgImg,mangoTree,mango1,mango2,mango3,mango4,mango5,stone,slingShot,ground
function preload()
{
boyImg	= loadImage("images/boy.png")
bgImg= loadImage("images/unnamed.jpg")
}

function setup() {
	createCanvas(1600, 800);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone= new Stone(185,625,20)

	mango1= new Mango(1200,300,30)
	mango2= new Mango(1000,300,30)
	mango3= new Mango(1400,300,30)
	mango4= new Mango(1100,150,30)
	mango5= new Mango(1300,200,30)
	mangoTree=new Tree(1200,400,550,800)
 
	
	//boy = createSprite(150,700)
	//boy.addImage("boyImg",boyImg)
	//boy.scale=0.15
	slingShot = new Slingshot(stone.body,{x:185,y:625});
	ground= new Ground(800,780,1600,20)
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(bgImg);
  //Engine.update(engine);
  image(boyImg,150,550,200,300);
  mangoTree.display();
  stone.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   stone.display();
   slingShot.display();
   ground.display();
   detectCollision(stone,mango1)
   detectCollision(stone,mango2)
   detectCollision(stone,mango3)
   detectCollision(stone,mango4)
   detectCollision(stone,mango5)
  //drawSprites();
 
}
function mouseDragged(){
	console.log("mousedragged");
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
	
	}
function mouseReleased(){
	
	slingShot.fly();
	
	}
function detectCollision(lstone,lmango){
mangobodyposition= lmango.body.position
stonebodyposition= lstone.body.position
var distance= dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y)
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false)
}
}

