const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint
var engine,world;
var ground;
var hero,string,backgroundImg;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,bx19,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box28
var stand;
var monster;
function preload() {
//preload the images here
backgroundImg=loadImage("images/images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
   engine = Engine.create();
   world = engine.world;
   ground = new Ground(1500,height-20,3000,20);
   stand = new Ground(600,600,200,20);
   hero = new Hero(500,3000,100,100);
   monster=new Monster(750,500,100,100);
   string = new Fly(hero,{x:470,y:200});
   box1 =new Box(520,590,20,20);
   box2 = new Box(540,580,20,20);
   box3 = new Box(560,580,20,20);
   box4=new Box(580,580,20,20);
   box5=new Box(600,580,20,20);
   box6=new Box(620,580,20,20);
   box7=new Box(640,580,20,20);
   box8=new Box(660,580,20,20);
   box9=new Box(680,580,20,20);
   box10=new Box(540,560,20,20);
   box11=new Box(560,560,20,20);
   box12=new Box(580,560,20,20);
   box13=new Box(600,560,20,20);
   box14=new Box(620,560,20,20);
   box15=new Box(640,560,20,20);
   box16=new Box(660,560,20,20);
   box17=new Box(560,540,20,20);
   box18=new Box(580,540,20,20);
   box19=new Box(600,540,20,20);
   box20=new Box(620,540,20,20);
   box21=new Box(640,540,20,20);
   box22=new Box(560,520,20,20);
   box23=new Box(580,520,20,20);
   box24=new Box(600,520,20,20);
   box25=new Box(620,520,20,20);
   box26=new Box(580,500,20,20);
   box27=new Box(600,500,20,20);
   box28=new Box(590,480,20,20);
}

function draw() {
  background(backgroundImg);
   Engine.update(engine);
  ground.display();
  hero.display();
  string.display();
  stand.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  stand.display();
  monster.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

