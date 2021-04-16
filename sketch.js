var sprite;
var targetGroup;
var target1;
var gameState="done";

function preload()
{
  targetImg=loadImage("target.png");
}




function solo(){
  if(frameCount%40===0&&gameState==="done"){
    gameState="ready"
    target1 = createSprite(50,50,50,100)
    target1.addImage("target",targetImg)
    target1.scale = 0.7;
    target1.x = Math.round(random(100,width-200))
    target1.y = Math.round(random(100,height-200))
    //targetGroup.add(target1)
    
  }
}




function setup() {
  createCanvas(windowWidth,windowHeight);
  //sprite=createSprite(20,20,100,100);
  //sprite.x=World.mouseX;
  //sprite.y=World.mouseY;
  //targetGroup=new Group();
}

function draw() {
  background("lightblue");

  solo();  

  if(mousePressedOver(target1))
  {
    target1.destroy();
    gameState="done";  
  }
  // for(var x=0;x<targetGroup.length;x++)
  // {
  //   if(sprite.isTouching(targetGroup[x]))
  //   {
  //     targetGroup[x].destroy();
  //     console.log("inside")
  //   }
  // }
  drawSprites();
}


