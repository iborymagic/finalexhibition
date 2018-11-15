var turnOn;
var turnOff;
var broken;
var clicked;

function setup() {
	createCanvas(400, 530);
	background(0);
	turnOn = loadImage("turnon.png");
	turnOff = loadImage("turnoff.png");
	broken = loadImage("broken.png");
	
	clicked = 0;
}

function draw() {
	background(0);
	
	if(clicked > 20) {
		image(broken, 0, 0, 400, 530);
	}else {
		if(mouseIsPressed) {
			if(mouseX >= 125 && mouseX <= 305 && mouseY >= 80 && mouseY <= 240) {
				image(turnOff, 0, 0, 400, 530);
			}else {
				image(turnOn, 0, 0, 400, 530);
			}
		}else {
			image(turnOn, 0, 0, 400, 530);
		}
	}
}

function mousePressed() {
	clicked++;
}