var play,life,goldScore
var end,silverScore,edges
var gameState,backGround,God,goldGroup,champGroup,bigFootGroup,gaintSquidGroup,silverGroup
var bricks1,bricks2,bricks3,bricks4,bricks5,bricks6,bricks7,bricks8,bricks9,bricks10
var bricks11,bricks12,bricks13,bricks14,bricks15,bricks16,bricks17,bricks18,bricks19,bricks20
function setup(){
play=1;
 end=0;
 gameState=play;
 life=3
 goldScore=0;
 silverScore=0;

 backGround=createSprite(200,200,400,400);
 bricks20=createSprite(190,260,50,10);
 bricks1=createSprite(300,30,70,30);
 bricks2=createSprite(150,320,50,20);
 bricks3=createSprite(160,30,70,20);
 bricks4=createSprite(70,280,50,10);
 bricks5=createSprite(340,360,70,30);
 bricks6=createSprite(90,230,50,20);
 bricks7=createSprite(305,147,70,10);
 bricks8=createSprite(49,112,50,30);
 bricks9=createSprite(150,170,70,20);
 bricks10=createSprite(332,243,50,10);
 bricks11=createSprite(190,92,70,30);
 bricks12=createSprite(334,90,50,20);
 bricks13=createSprite(241,201,70,10);
 bricks14=createSprite(40,350,50,30);
bricks15=createSprite(280,294,70,20);
 bricks16=createSprite(190,360,50,10);
 bricks17=createSprite(43,45,70,30)
  bricks18=createSprite(14,176,50,20);
 bricks19=createSprite(360,200,70,10);
 God=createSprite(40,300,20,20)
 goldGroup=createGroup();
 silverGroup=createGroup();
 champGroup=createGroup();
 bigFootGroup=createGroup();
 gaintSquidGroup=createGroup();
 weaponsGroup=createGroup();
//God.setAnimation("God")
God.scale=0.1
God.setCollider("rectangle",0,0,10,10);
//backGround.setAnimation("farm_land_1");
// bricks1.setAnimation("bricks");
// bricks2.setAnimation("bricks");
// bricks3.setAnimation("bricks");
// bricks4.setAnimation("bricks");
// bricks5.setAnimation("bricks");
// bricks6.setAnimation("bricks");
// bricks7.setAnimation("bricks");
// bricks8.setAnimation("bricks");
// bricks9.setAnimation("bricks");
// bricks10.setAnimation("bricks");
// bricks11.setAnimation("bricks");
// bricks12.setAnimation("bricks");
// bricks13.setAnimation("bricks");
// bricks15.setAnimation("bricks");
// bricks16.setAnimation("bricks");
// bricks18.setAnimation("bricks");
// bricks17.setAnimation("bricks");
// bricks14.setAnimation("bricks");
// bricks19.setAnimation("bricks");
// bricks20.setAnimation("bricks");
 bricks1.scale=0.2
bricks2.scale=0.2
bricks3.scale=0.2
bricks4.scale=0.2
bricks5.scale=0.2
bricks6.scale=0.2
bricks7.scale=0.2
bricks8.scale=0.2
bricks9.scale=0.2
bricks10.scale=0.2
bricks11.scale=0.2
bricks12.scale=0.2
bricks13.scale=0.2
bricks14.scale=0.2
bricks15.scale=0.2
bricks16.scale=0.2
bricks17.scale=0.2
bricks18.scale=0.2
bricks19.scale=0.2
bricks20.scale=0.2
}


function draw() {
background("white");

edges= createEdgeSprites();
if(gameState===play){
   spawnCoins();
spawnEnemy();
spawnWeapons();

 champGroup.bounceOff(edges);
bigFootGroup.bounceOff(edges);
gaintSquidGroup.bounceOff(edges);

if (keyDown("up")){
   God.velocityY=-(goldScore+silverScore+10)/1;
   God.velocityX=0;
   
 }
 
  if (keyDown("left")){
   God.velocityY=0;
   God.velocityX=-(goldScore+silverScore+10)/1;
   
 }
  if (keyDown("right")){
   God.velocityY=0;
   God.velocityX=(goldScore+silverScore+10)/1 ;
   
}
if(keyDown("down")){
 God.velocityY=(goldScore+silverScore+10)/1;
 God.velocityX=0;
}
God.velocityY=God.velocityY+0.8;
 
God.collide(edges);
  God.collide(bricks1);
  God.collide(bricks2);
  God.collide(bricks3);
 God.collide(bricks5);
 God.collide(bricks4);
 God.collide(bricks6);
 God.collide(bricks8);
 God.collide(bricks7);
 God.collide(bricks9);
 God.collide(bricks10);
 God.collide(bricks11);
 God.collide(bricks12);
 God.collide(bricks13);
 God.collide(bricks14);
 God.collide(bricks15);
 God.collide(bricks16);
 God.collide(bricks17);
 God.collide(bricks18);
 God.collide(bricks19);
 God.collide(bricks20);
 God.debug=true;
  if(goldGroup.isTouching(God)){
   goldGroup.destroyEach();
    playSound("sound://category_collect/vibrant_game_cartoon_game_liquid_mouth_collect_1.mp3")
    goldScore=goldScore+1;
 }
 if(silverGroup.isTouching(God)){
   silverGroup.destroyEach();
   playSound("sound://category_collect/vibrant_game_cartoon_game_liquid_mouth_collect_1.mp3")
   silverScore=silverScore+1;
 }
 if(gaintSquidGroup.isTouching(God)||life==0){
   console.log("gameover")
  gameState=end;
}
if(champGroup.isTouching(God)){
 life=life-1
 console.log(life,"abhi")
 champGroup.destroyEach();
}
if(bigFootGroup.isTouching(God)){
 life=life-1
 console.log(life,"jeet")
 bigFootGroup.destroyEach();
}
for(var i=0;i<life;i=i+1){
//  console.log("life",life)
 var player=createSprite(i*20+20,20)
// player.setAnimation("God");
 player.scale=0.1
}
}else{
   var gameOver=createSprite(200,200,20,20);
   gameOver.//setAnimation("textGameOver_1");
   champGroup.destroyEach();
   gaintSquidGroup.destroyEach();
   bigFootGroup.destroyEach();
   God.destroy();
}

drawSprites();
if(weaponsGroup.isTouching(champGroup)){
 champGroup.destroyEach();
}
if(weaponsGroup.isTouching(bigFootGroup)){
 bigFootGroup.destroyEach();
}
if(weaponsGroup.isTouching(gaintSquidGroup)){
 gaintSquidGroup.destroyEach();
}




}
function spawnWeapons(){
  if(keyDown("space")){
    
    
    if(goldScore>=1&&silverScore>=1){
      var weapons=createSprite(God.x,God.y,20,20);
      //weapons.setAnimation("axe");
      weapons.scale=0.5;
      weapons.velocityX=20;
     weaponsGroup.add(weapons);
    }
    if(goldScore>=2&&silverScore>=2){
  var weapons=createSprite(God.x,God.y,20,20);
// weapons.setAnimation("axe_diamond_1");
 weapons.scale=0.5;
weapons.velocityX=-20;
weaponsGroup.add(weapons);
    }
  }
// console.log(weapons); 
}

function spawnCoins(){
 if(World.frameCount%80==0){
   
 
var coin =createSprite(random(0,400),random(0,400));

//  coin.setAnimation("coin_gold_1");
  goldGroup.add(coin);
  coin.lifetime=100;
var coin1=createSprite(random(0,400),random(0,400))
 // coin1.setAnimation("coin_silver_1");
  silverGroup.add(coin1);

 coin1.lifetime=100;  
 }

 
}
function spawnEnemy(){

enemyType=random(1,3);
if(enemyType===1&&bigFootGroup.length==0){
 var enemy=createSprite(random(0,400),300);
 //enemy.setAnimation("bigFoot");
 bigFootGroup.add(enemy);
 
enemy.scale=0.3;
enemy.velocityX=random(0,1);
enemy.velocityY=random(-5,-10);
}else{
 if(enemyType===2&&champGroup.length==0){
   var enemy=createSprite(random(0,400),300);
 //  enemy.setAnimation("champ");
   champGroup.add(enemy);
  
enemy.scale=0.3;
enemy.velocityX=random(0,1);
enemy.velocityY=random(-5,-10);
 }else{
  
   if(gaintSquidGroup.length==0){
     var enemy=createSprite(random(0,400),300);
     /// enemy.setAnimation("giantSquid");
   gaintSquidGroup.add(enemy);
   
enemy.scale=0.3;
enemy.velocityX=random(0,1);
enemy.velocityY=random(-5,-10);
   }
 }
}



//console.log(bigFootGroup.length)
}


