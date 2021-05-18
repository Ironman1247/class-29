const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var sling
var log6
var gamestate = "OnSling"


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 505, 300, 170);

    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    pig1 = new Pig(810, 550);
    log1 = new Log(810,460,300, PI/2);

    box3 = new Box(700,440,70,70);
    box4 = new Box(920,440,70,70);
    pig3 = new Pig(810, 420);

    log3 =  new Log(810,380,300, PI/2);

    box5 = new Box(810,360,70,70);
    log4 = new Log(760,320,150, PI/7);
    log5 = new Log(870,320,150, -PI/7);
     

    bird = new Bird(200,260);

    string = new Sling(bird.body,{x : 220, y:260})


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
     
    bird.display();
    platform.display();
    string.display();
}

function mouseDragged(){
      if(gamestate === "OnSling"){
    Matter.Body.setPosition(bird.body,{x : mouseX , y : mouseY})
      } 
}

function mouseReleased(){

    string.fly();

    gamestate = "release"
}

function keyPressed(){

    if(keyCode === 32){
        Matter.Body.setPosition(bird.body,{x :200, y : 300})
        string.attach(bird.body);

        gamestate = "OnSling"
    }
}
