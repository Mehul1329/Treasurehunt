

var bow , arrow,  background;
var bowImage, arrowImage, backgroundImage;
var zombieImage , zombie , Player;
var BulletR , BulletL , BulletImgR , BulletImgL
 
function preload(){
  
  backgroundImage = loadImage("Background Images/pngtree-halloween-night-background-with-haunted-house-on-the-lake-with-blue-image_301258.jpg");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  //red_balloonImage = loadImage("red_balloon0.png");
  //green_balloonImage = loadImage("green_balloon0.png");
  //pink_balloonImage = loadImage("pink_balloon0.png");
  //blue_balloonImage = loadImage("blue_balloon0.png");
  
 zombieImage = loadAnimation("Zombie Images/z1.png","Zombie Images/z2.png","Zombie Images/z3.png","Zombie Images/z4.png","Zombie Images/z5.png","Zombie Images/z6.png","Zombie Images/z7.png","Zombie Images/z8.png","Zombie Images/z9.png","Zombie Images/z10.png","Zombie Images/z11.png","Zombie Images/z12.png")
 zombieImage2 = loadAnimation("Zombie 2/zo1.png","Zombie 2/zo2.png","Zombie 2/zo3.png","Zombie 2/zo4.png","Zombie 2/zo5.png","Zombie 2/zo6.png","Zombie 2/zo7.png",);
 Player = loadAnimation("PC/pc1.png","PC/pc2.png","PC/pc3.png","PC/pc4.png","PC/pc5.png","PC/pc6.png","PC/pc7.png","PC/pc8.png","PC/pc9.png","PC/pc10.png","PC/pc11.png","PC/pc12.png",);
 //PlayerR = loadImage("PC/pc1.png","PC/pc3.png");

 BulletImg = loadImage("bullet2.png");
 //BulletImg2 = loadImage("bullet.png");
}

function setup() {
  createCanvas(1200, 800);
  
  //creating background
  background = createSprite(0,0,600,400);
  background.addImage(backgroundImage);
  background.scale = 4
  
  // creating bow to shoot arrow
  bow = createSprite(600,300,20,50);
  bow.addAnimation("PlayerWalking",Player); 
  bow.scale = 1.3;
  
  
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  //bow.y = World.mouseY
  
   // release arrow when space key is pressed
   if (keyDown("LEFT_ARROW")) {
    BulletR = createBullet();
    BulletR.addImage(BulletImg);
     BulletR.y = bow.y -30;
  }

  //if (keyDown("RIGHT_ARROW")) {
   // BulletL = createBullet2();
    //Bullet.addImage(BulletImg2);
    //B//ullet.y = bow.y -30;
  
  //var select_balloon = Math.round(random(1,4));
  //console.log(select_balloon);
  
  if(World.frameCount % 150 == 0){
    createZombie();

  
  }
  //createZombie();
  drawSprites();
}





// Creating  arrows for bow
function createBullet() {
  arrow= createSprite(480, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.2;
  return arrow;
}

//function createBullet2() {
 // arrow= createSprite(480, 100, 5, 10);
 // arrow.velocityX = 6;
 // arrow.scle = 0.2;
 // return arrow;
//}

 function createZombie(){
  var rand = Math.round(random(1,2))
  switch(rand){
    case 1:
      zombie = createSprite(1200,340,50,50);
    zombie.velocityX = -2
    zombie.addAnimation("zombieWalking",zombieImage);
    zombie.scale = 0.5
  break;
  case 2:

  zombie2 = createSprite(0,300,50,50);
  zombie2.velocityX = 2
  zombie2.addAnimation("zombieWalking",zombieImage2);
  zombie2.scale = 0.5
  break;
}
 }

