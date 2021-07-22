const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var box1,box2,box3,box4,box5,box6,box7;
function preload(){
    
}

function setup(){
    createCanvas(400,400);  

    engine = Engine.create();
    world = engine.world;
   
    
    ground1 = new Ground(200,300,400,15);

    box1 = new Box(100,280,30,40);
    box2 = new Box(130,280,30,40);
    box3 = new Box(160,280,30,40);
    box4 = new Box(190,280,30,40);
    box5 = new Box(220,280,30,40);
    
    box8 = new Box(110,235,30,40);
    box9 = new Box(140,235,30,40);
    box10 = new Box(170,235,30,40);
    box11 = new Box(200,235,30,40);
    box12 = new Box(120,195,30,40)
    box13 = new Box(150,195,30,40);
    box14 = new Box(180,195,30,40);
    box15 = new Box(155,155,30,40);
    
    
}

function draw(){
    background("white");
    Engine.update(engine);
    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    text();
 

}   
function text(){
    text("Drag the stone and release it toward the blocks", 100,50);
}

