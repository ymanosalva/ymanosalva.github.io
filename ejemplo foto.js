//Yonathan Manosalva
//ejemplo foto
//Diego Rivera

var foto;
function preload(){
	foto=loadImage("foto.gif");
}

function setup() {
createCanvas(1400,700);
}

function draw() {
	image=(foto,0,0);
}