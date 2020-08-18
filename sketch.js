const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground, box4, box5, box3;
var pig1,pig2,pig3;
var log1,log2,log3,log4;
var bird1;
var bgImg;

function preload(){
   bgImg = loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1500,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1130,350,70,70);
    box2 = new Box(1270,350,70,70);
    ground = new createGround(750,400,1500,30);
    pig1 = new pigs(1200,355);
    log1 = new log(1200,302,210,PI/2);

    box3 = new Box(1130,255,70,70);
    box4 = new Box(1270,255,70,70);
    pig2 = new pigs(1200,262);
    log2 = new log(1200,207,210,PI/2);

    pig3 = new pigs(1200,167);
    log3 = new log(1150,137,150,PI/4);
    log4 = new log(1250,137,150,-PI/4);

    bird1 = new bird(400,200);
}

function draw(){
    background(bgImg);
    Engine.update(engine);
    box1.display();   
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display();
    box3.display();   
    box4.display();
    pig3.display();
    log3.display();
    log4.display();
    bird1.display();
}