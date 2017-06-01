var drawCurrentScenel;
var pug, pugLeft, scene1BG, backGravesIMG, frontGravesIMG, bonesIMG, bossIMG;
var silkScreen;

function preload() {
  pug = loadImage("assets/Pug.png");
  pugLeft = loadImage("assets/pug (left).png");
  scene1BG = loadImage("assets/background.png");
  frontGravesIMG = loadImage("assets/gravesFront.png");
  backGravesIMG = loadImage("assets/gravesBack.png");
  bonesIMG = loadImage("assets/bone.png");
  bossIMG = loadImage("assets/boss.png");
  slkscr = loadFont("assets/slkscr.ttf");
  backgroundMusic = loadSound("assets/Classic Horror 3.mp3");
  bossMusic = loadSound("assets/bonetrousle.mp3");
  rumbleSound = loadSound("assets/earthquake.mp3");
  bork = loadSound("assets/bork.mp3");
  attack = loadSound("assets/attack.mp3");
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
