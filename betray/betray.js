var pipe;
var title;
var fire;
var smoke;
var smokes = [];
var smoking;
var lighter;
var cigarette;
var fireTimer;
var scaleImg;

function setup() {
	createCanvas(1000, 500);
	background(255);
	pipe = loadImage("thisisnotapipe.png");
	title = loadImage("title.png");
	fire = loadImage("fire.png");
	smoke = loadImage("smoke1.png");
	frameRate(30);
	
	fireTimer = 0;
	smoking = 7;
	lighter = false;
	cigarette = false;
	scaleImg = 1;
	
	for(var i = 0; i < smoking ; i++) {
		smokes.push(new smokesClass());
	}
}

function draw() {
	background(255);
	image(pipe, 100, 80);
	image(title, 350, 350, 350, 30);
	
	if(lighter) {
		image(fire, mouseX - 25, mouseY - 85, random(45,50), random(85,90));
	}
	
	if(fireTimer >= 2) {
		cigarette = true;
		for(var k = 0; k < smoking; k++) {
			smokes[k].display();
			smokes[k].up();
		}
	}
	
	if(cigarette) {
		noStroke();
		rect(300, 340, 2 * scaleImg, 50);
	}
}

function keyPressed() {
  if(key == 'f' || key == 'F') {
    lighter = true;
  }
}

function mousePressed() {
	if(lighter && mouseX >= 330 && mouseX <= 450 && mouseY >= 120 && mouseY <= 160) {
    fireTimer++;
  }
}

function smokesClass() {
	this.grayColor = int(random(50, 250));
	this.x = int(random(330, 370));
	this.y = 100;
	this.size = int(random(50, 90));
	this.speed = int(random(5,15))
	
	this.display = function() {
		image(smoke, this.x, this.y, this.size, this.size - 30);
	};
	
	this.up = function() {
		this.y = this.y - this.speed;
		if(this.y < -50) {
			this.y = 100;
		}
	}
}

function mouseWheel(event) {
	var e = event.delta;
	scaleImg += e * 0.05;
}