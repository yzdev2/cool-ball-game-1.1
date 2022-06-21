var ball,engine,world
const Bodies=Matter.Bodies
const World=Matter.World
const Engine=Matter.Engine
var ground
var solider
var BulletImg
 var bulletGroup
var charger
var boss 
var ball
var base1
function preload(){
BulletImg=loadImage("missle.png")
}
function setup(){
    createCanvas(1500,600)
engine=Engine.create()

world=engine.world
ground= new Ground(750,580,1500,10)
ball= new Ball(100,20,30)
base1= new Ground(850,200,150,10)
boss= new Boss(850,150,25)
solider= new Solider(1200,550,25)
bulletGroup=new Group()
}
function draw(){
    
    background("#A3A3A3")
    push()
    fill("green")
    stroke("green")
    strokeWeight(100)
    line(1450,0,1450,580)
    pop()
    drawSprites()
    ground.show()
    ball.show()
    for(var i=0;i<bulletGroup.length;i++){
        bulletGroup.get(i).y=ball.body.position.y
    }
    base1.show()
    
    boss.display()
    bossShoots()
    solider.display()
   if(ball.body.position.x>1450){
    push()
    stroke("green")
    fill("red")
    strokeWeight(10)
    textSize(30)
    text("You won",700,300)
    pop()

   }
Engine.update(engine)    
}
function keyPressed(){
    if(keyCode==38){
        ball.Moveup()
    }

if(keyCode==40){
    ball.Movedown()
}

if(keyCode==39){
    ball.Moveforward()
}
if(keyCode==37){
    ball.MoveBackward()
}
}
function bossShoots(){
    if(frameCount%60===0){
        var bossbullet= createSprite(boss.body.position.x,boss.body.position.y)
bossbullet.rotation=230
        bossbullet.addImage(BulletImg)
        bossbullet.velocityX=-3
        bossbullet.scale=0.245
        bossbullet.lifetime=400
        bulletGroup.add(bossbullet)
    }
}
