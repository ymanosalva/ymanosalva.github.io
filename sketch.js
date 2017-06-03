//Yonathan Manosalva
//ejemplo 1
//Diego Rivera

//var x=0;
var rojo;
var verde;
var azul;

function setup() {
createCanvas(1400,700);
background(0,100,200);
}

function draw() {
	frameRate(10);
	rojo=random(0,255);
	verde=random(0,255);
	azul=random(0,255);
	
	if(mouseIsPressed == true){
		rojo=0;
		verde=0;
		azul=0;
	}
	else{
		rojo=random(0,255);
		verde=random(0,255);
		azul=random(0,255);
	
	}
background(1,1,1);
  fill(255,255,255);
  ellipse(mouseX,mouseY,500,300);
    fill(rojo,verde,azul,250);
  ellipse(mouseX,mouseY,300,300);
  fill(255,0,0);
  ellipse(mouseX,mouseY,200,200);
//  x=x+2;
  fill(0,0,0); //negro
  ellipse(mouseX,mouseY,100,100);


}