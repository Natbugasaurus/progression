activeObjects = [];
var bgX = 0, bgY = 0;

function drawScene1() {
  //print("Player X: "+ player.posX+" & Player Y: " + player.posY);
  activeObjects = [player,frontGraves,backGraves];
  if (!backgroundMusic.isPlaying()) {
    backgroundMusic.play();
  }
  background("black");
  image(scene1BG,bgX,bgY);
  sortActiveObjects();
  for (i=0;i<activeObjects.length;i++) {
    activeObjects[i].draw();
  }
  player.movement();
  handleCollisions();
  graveInteraction();

  if (runTimer()) {
    drawCurrentScene = drawScene2;
  }

  if (timeLeftInCountDown !== undefined) {
    if (!rumbleSound.isPlaying()) {
      rumbleSound.play();
    }
    bgX = bgX+(sin(frameCount)*2);
    bgY = bgY-(sin(frameCount)*2);
    frontGraves.posX += (sin(frameCount)*2);
    frontGraves.posY -= (sin(frameCount)*2);
    backGraves.posX += (sin(frameCount)*2);
    backGraves.posY -= (sin(frameCount)*2);
    player.posX += (sin(frameCount)*2);
    player.posY -= (sin(frameCount)*2);
  }
}

function sortActiveObjects() {
  if ((player.posY + player.sizeY) > 470) {
    player.depth = 5;
  }
  if ((player.posY + player.sizeY) < 475) {
    player.depth = 3;
  }
  if ((player.posY + player.sizeY) < 362) {
    player.depth = 1;
  }

  activeObjects.sort(function (a, b) {
    return a.depth - b.depth;
  });
}
