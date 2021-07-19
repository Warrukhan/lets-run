var path, jake1,jake2,jake3,jake4,jake5, left_boundary,right_boundary,
var pathImg, boyImg;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  jakeImg = 
  loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.png", "jake5.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path = createSprite(200,200);
path.addImage("pathImg");
path.velocity = 4;
path.scale = 1.2;

jake = createSprite(180,340,30.30);
jakeImg.addAnimation("jakeRunning","jakeImg");

left_boundary=createSprite(0,0,100,800);
left_boundary.visible= "false";



}

function draw() {
  background(0);
  path.velocity = 4;

  
  //jake moving on Xaxis with mouse
  jake.x = World.mouseX;
  edges = createSprite();
  jake.collide(edges[3]);
  jake.collide(left_boundary);
  jake.collide(right_boundary);

  //code to reset the background
  if(path.y > 400){
     path.y = heigt/2;

  }
drawSprites();












}
