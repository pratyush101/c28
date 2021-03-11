
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone1;
var mango2,mango3,mango4,mango5;
var elelastic1;


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	  mango1=new mango(1100,100,30);
	  mango2=new mango(950,100,30);
    mango3=new mango(1030,100,30);
    mango4=new mango(1010,180,30);
    mango5=new mango(900,200,30);

   



	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone1 = new Stone(400,200,1);

  elelastic1 = new Elastic(stone1.body, {x:230,y:420} );
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  

  groundObject.display();

  stone1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  elelastic1.display();

  


}

function mouseDragged(){

Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY});


}

function mouseReleased(){

  elelastic1.fly();


}

//function detect(lstone,lmango){

//mangoBodyPosition=lmango.body.position
//stoneBodyPosition=lstone.body.position

//var distace= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

//if(distace<=lmango.r+lstone.r){

//Matter.Body.setStatic(lmango.body,false);

//}

  
//}

//Matter.Body.setStatic(lmango.body,false);


function keyPressed(){

if(keyCode === 32){

Matter.Body.setPosition(stone1.body, {x:235, y:420})
launcherObject.attach(stone1.body);


}



}
