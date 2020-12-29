
var dog, happyDog, database, foodS, foodStock
var dogImg, happyDogImg;



function preload()
{
  
  
  dogImg=loadImage("happyDog.png");
  happyDogImg=loadImage("dog.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
 dbref=database.ref('Food');
  dbref.on("value",readStock);
  dog = createSprite(250,250,50,50);

  
  
 
  dog.addImage("dog",dogImg);
  

  
}
function readStock(data){
  foodStock=data.val();
}

function writeStock(x){
  
  if(x<=0){
    x=0;
  
  }else{
    x=x-1;
  }

console.log(x);

  database.ref('/').update({
    Food:x
  })
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodStock);
  dog.addImage("dog", happyDogImg);
}

  
  drawSprites();
  //add styles here
  dog.scale=0.5;
  fill("black");
  text("Food remaining:"+ foodStock,220,425);
  



  fill("white");
  textSize=1.5;
  text("Note: press UP arrow to feed jack milk",165,25);
  
  
}



