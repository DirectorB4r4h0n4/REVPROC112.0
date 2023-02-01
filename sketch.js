var sea;
var RMSConcorde ,ship_moving;

function preload(){
  ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png","ship-4.png")
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200, 200, 400, 300); 
  sea.addImageaddImage("sea.png", seaImage);

}

function draw() {
  background("blue");
  sea.velocityX = -2
  console.log(sea.x)

  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  
 drawSprites();
}