var drawCurrentScenel;
var pug, pugLeft, scene1BG, backGravesIMG, frontGravesIMG;
var silkScreen;

function preload() {
  pug = loadImage("assets/Pug.png");
  pugLeft = loadImage("assets/pug (left).png");
  scene1BG = loadImage("assets/background.png");
  frontGravesIMG = loadImage("assets/gravesFront.png");
  backGravesIMG = loadImage("assets/gravesBack.png");
  slkscr = loadFont("assets/slkscr.ttf");
  backgroundMusic = loadSound("assets/Classic Horror 3.mp3");
}

function setup() {
  noStroke();
  createCanvas(960, 540);
  drawCurrentScene = drawScene1;
  activeObjects.push(player);
  activeObjects.push(frontGraves);
  activeObjects.push(backGraves);
  makeGraves();
}

function draw() {
  drawCurrentScene();
}

function mousePressed() {
  print("MouseX: "+mouseX+" MouseY: "+mouseY);
}
