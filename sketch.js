const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var base; 
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var pendulum;
var string;
var engine;
var world;

function setup(){
createCanvas(3000,400);
engine = Engine.create()
world = engine.world

base = new ground(1300,300, 300, 30)
block1 = new Box(1250,250,50,50)
block2 = new Box(1300,250,50,50)
block3 = new Box(1350,250,50,50)
block4 = new Box(1370,270,50,50)
block5 = new Box(1340,270,50,50)
block6 = new Box(1345,280,50,50)
pendulum = new ball(900,250,90,90)
string = new rope(900,125,60,100)

}

function draw(){
background("grey")
Engine.update(engine);
base.display()
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
pendulum.display()
string.display()

}

function mouseDragged(){
    
        Matter.Body.setPosition(pendulum.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
