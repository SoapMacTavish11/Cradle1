
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
const Body = Matter.Body;


var bob1,bob2,bob3;
var roof;
function preload()
{
	
}

function setup() {

	createCanvas(1200, 1000);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     roof= new Roof (600,300,550,50);

	 bob1= new Bob(600,700,100);
	 bob2= new Bob(501,700,100);
	 bob3= new Bob(402,700,100);
	 bob4= new Bob(699,700,100);
	 bob5= new Bob(799,700,100);

	 rope1=new Rope(bob1.body, roof.body -bob1.Diameter*2, 0);
	 rope2=new Rope(bob2.body, roof.body -bob2.Diameter*2, 0);
	 rope3=new Rope(bob3.body, roof.body -bob3.Diameter*2, 0);
	 rope4=new Rope(bob4.body, roof.body -bob4.Diameter*2, 0);
	 rope5=new Rope(bob5.body, roof.body -bob5.Diameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



