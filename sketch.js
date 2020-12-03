var fixed, moving;


function setup() {
  createCanvas(windowWidth,windowHeight);
  fixed = createSprite(width/2,height/2, 150, 150);
  moving = createSprite(200,200,150,150);

  fixed.shapeColor = "green";
  moving.shapeColor = "green";

  fixed.debug = true;
  moving.debug = true;
}

function draw() {
  background(255,255,0);  

  moving.x = mouseX;
  moving.y = mouseY;

  if((fixed.x - moving.x < fixed.width/2 + moving.width/2 &&
    moving.x - fixed.x < fixed.width/2 + moving.width/2)&&(fixed.y - moving.y < fixed.height/2 + moving.width/2 &&
      moving.y - fixed.y < fixed.height/2 + moving.height/2)){
    fixed.shapeColor = "red";
    moving.shapeColor = "red";
  }else{
    fixed.shapeColor = "green";
    moving.shapeColor = "green";
  }

  drawSprites();
}