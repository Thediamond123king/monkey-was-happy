var survivalTime = 0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,310,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(400,350,900,20);
  ground.x = ground.width /2;
  console.log(ground.x);
  
 
 
  
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
}


function draw() {
 background("lightbrown") 
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  spawnbanana();
  spawnobstacles();
  drawSprites();
}

function spawnobstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,300,10,40);
   obstacle.velocityX = -6;
   
    
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;

      default: break;
    }
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   obstaclesGroup.add(obstacle);
 }
}
 
function spawnbanana(){
   if (frameCount % 80 === 0) {
    banana = createSprite(300,200,20,50);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(120,220))
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200
    
    bananaGroup.add(banana);
   } 
}





