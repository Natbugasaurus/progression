var drawCurrentScenel;
var pug, pugLeft, scene1BG;

function preload() {
  pug = loadImage("assets/Pug.png");
  pugLeft = loadImage("assets/pug (left).png");
  scene1BG = loadImage("assets/background.png");
}

function setup() {
  createCanvas(960, 540);
  drawCurrentScene = drawScene1;
}

function draw() {
  drawCurrentScene();
}

function mousePressed() {
  print("MouseX: "+mouseX+" MouseY: "+mouseY);
}
