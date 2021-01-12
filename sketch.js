const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;




function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(500,490,1000,10);
    box1=new Box(700,440,100,100);
    box2= new Box(700,340,100,100);
    box3= new Box(700,240,100,100);
    box4= new Box(700,140,100,100);
    box5=new Box(800,440,100,100);
    box6= new Box(800,340,100,100);
    box7= new Box(800,240,100,100);
    box8= new Box(800,140,100,100);

    ball=new Ball(400,250,50);
    string=new String(ball.body,{x:400,y:50})
}

function draw(){
    background(0)
    ground.display();
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    ball.display();
    string.display();

}

function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY}); 
  
}



