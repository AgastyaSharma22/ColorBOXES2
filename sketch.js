var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(40,200,80,30);
  movingRect.shapeColor="green";

  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="green";
  gameObject3=createSprite(300,100,50,50);
  gameObject3.shapeColor="green";
  gameObject4=createSprite(400,100,50,50);
  gameObject4.shapeColor="green";

}

function draw() {
  background(0,0,0); 
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor="blue";
   gameObject2.shapeColor="blue";
  }else{
    movingRect.shapeColor="green";
   gameObject2.shapeColor="green";
  }

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor="blue";
   gameObject1.shapeColor="blue";
  }else{
    movingRect.shapeColor="green";
   gameObject1.shapeColor="green";
  }

  if(isTouching(movingRect,gameObject3)){
    movingRect.shapeColor="blue";
   gameObject3.shapeColor="blue";
  }else{
    movingRect.shapeColor="green";
   gameObject3.shapeColor="green";
  }
  
  if(isTouching(movingRect,gameObject4)){
    movingRect.shapeColor="blue";
   gameObject4.shapeColor="blue";
  }else{
    movingRect.shapeColor="green";
   gameObject4.shapeColor="green";
  }
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY; 
  drawSprites();
}
