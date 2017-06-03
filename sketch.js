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
	frameRate(23);
	rojo=random(0,255);
	verde=random(0,255);
	azul=random(0,255);
	
fill(0,0,0);
triangle(200,200,400,200,500,300);
  fill(255,255,255);
  ellipse(mouseX,mouseY,500,300);
    fill(rojo,verde,azul,250);
  ellipse(mouseX,mouseY,300,300);
  fill(255,0,0);
  ellipse(mouseX,mouseY,200,200);
//  x=x+2;
  fill(0,0,0); //negro
  ellipse(mouseX,mouseY,100,100);
	
  fill(0,0,0);
  ellipse(mouseX,mouseY,100,100);

}
