var object1 , object2 ,object3 , object4 ,box;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    object1 = createSprite(50,400,100,30)
    object1.shapeColor = "Red"
    object2 = createSprite(200,400,100,30)
    object2.shapeColor = "green"
    object3 = createSprite(350,400,100,30)
    object3.shapeColor = "yellow"
    object4 = createSprite(500,400,100,30) 
    object4.shapeColor = "blue"

    box = createSprite(100,100,30,30)
    box.shapeColor = "white"
}

function draw() {
    background("black");
    //create edgeSprite
  box.x = mouseX
  box.y = mouseY
 if (isTouching(box,object1)) {
 box.shapeColor = "red"
 }
 else  if (isTouching(box,object2)) {
box.shapeColor = "green"
}
else  if (isTouching(box,object3)) {
box.shapeColor = "yellow"
}
else  if (isTouching(box,object4)) {
 box.shapeColor = "blue"
  }
else { box.shapeColor = "white"} 

  drawSprites();
    
}
 function isTouching (p1,p2){
 if( p1.x - p2.x < p1.width/2 + p2.width/2 &&
    p2.x - p1.x < p1.width/2 + p2.width/2&&
    p2.y - p1.y < p1.height/2 + p2.height/2&&
    p1.y - p2.y < p1.height/2 + p2.height/2){
  
 return true;
 }  else {

return false;

 }

 }