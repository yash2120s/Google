//Create variables here
var search;


function preload()
{
	//load images here
 bg = loadImage("images/bg.png")
}

function setup() {
 
	createCanvas(displayWidth,displayHeight);

  back =  createSprite(displayWidth/2-50,displayHeight/2-80,50,10)
back.addImage(bg)

  input = createInput("Type to search");
 button = createButton('Search');

  input.position(displayWidth/2+250, displayHeight/2+50);
  button.position(displayWidth/2+300,displayHeight/2+80);

}


function draw() {  
background("white")
  
if(keyIsDown(ENTER)){
  serch = input.value()
  var google = "https://www.google.com/search?q="+serch
  open(google)

}
  
button.mousePressed(()=>{
 
  serch = input.value();
  var google = "https://www.google.com/search?q="+serch
  open(google)
})
//input.display();
drawSprites();


}
