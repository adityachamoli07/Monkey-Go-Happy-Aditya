var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime,BananaCount;

function preload(){

  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
 createCanvas(450, 380);
        
  
  ground=createSprite(300,300,900,10) ;
 ground.velocityX = -3;
 ground.x=ground.width/2;
  
  
  
 monkey=createSprite(200,250,20,20);
 monkey.addAnimation("monkey_",monkey_running);
 monkey.scale=0.1;
  
  
 

  
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  

  SurvivalTime=0;
  BananaCount=0;
}


function draw() {
  background("green")
  
  if (ground.x < 0){
        ground.x = ground.width/2;
  }
  
  if (keyDown("space")&& monkey.y >= 230){
      monkey.velocityY=-12
   }
   
  if (monkey.isTouching(bananaGroup)){
   BananaCount=BananaCount+1
   bananaGroup.destroyEach()
  }
  
   
  monkey.velocityY=monkey.velocityY+0.8
  
  
 monkey.collide(ground)
  
  spawnbanana();
  spawnobstacle();
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime=Math.round(frameCount/frameRate())
  text("SurvivalTime : "+SurvivalTime,290,30)
  
   stroke("black");
  textSize(20);
  fill("black");
  text("BananaCount : "+BananaCount,7,30)
  
  
  

  
  
 drawSprites() ;
}
 
 function spawnbanana(){
   
   if (frameCount % 100 === 0) {
 banana = createSprite(400,100,20,50);
 banana.y = Math.round(random(200 ,120 ));
 banana.addImage(" banana",bananaImage);
 banana.scale=0.08;
 banana.velocityX = -5;
 banana.lifeTime=150;
 bananaGroup.add(banana)
    
  }
  }


 function spawnobstacle(){
   
   if (frameCount % 300=== 0) {
 obstacle = createSprite(200,280,20,50);
 obstacle.addImage("obstace",obstaceImage );
 obstacle.scale=0.1;
 obstacle.velocityX = -5;
 obstacle.lifeTime=150;
 obstacleGroup.add(obstacle)
    
   }
   }



