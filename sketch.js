//i have googled on how to declare variables more quickly which helps me save time
const {Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector} = Matter;

var engine,world;

var ground2;
var ground;

var plinkos = [];
var divisions=[];

var particle;

var gamestate ="play";

var divisionHeight=300;

var score = 0;
var turn = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  
  if(turn===5){
    gamestate="end";
  }

  text("500",25,530);
  text("500",105,530);
  text("500",185,530);
  text("500",265,530);

  text("100",345,530);
  text("100",425,530);
  text("100",505,530);
  text("200",585,530);
  text("200",665,530);
  text("200",745,530);

  text("Score : "+score,20,30);
  text("Turns : "+turn,700,30);

    Engine.update(engine); 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   } 

   for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
   }

   if(particle !== undefined && particle !== null){
    particle.display();
    if(particle.body.position.y>760){

     if(particle.body.position.x<300){
      score=score+500;
      turn++
      particle=null;
      
     }
    }

  if(particle !== undefined && particle !== null){
    particle.display();
    if(particle.body.position.y>760){

     if(particle.body.position.x>301 && particle.body.position.x<600 ){
      score=score+100;
      turn++
      particle=null;
     }
    }
  }

  
  if(particle !== undefined && particle !== null){
    particle.display();
    if(particle.body.position.y>760){

     if(particle.body.position.x>601 && particle.body.position.x<900 ){
      score=score+200;
      turn++
      particle=null;
      
     }
    }
  }
  }
 
  if(gamestate === "end"){
    textSize(70);
    text("GameOver",250,250)
  }
}

function mousePressed(){
  if(gamestate !== "end"){
    particle=new Particle(mouseX,10,10);
    particle.display();
  }
}