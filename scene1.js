activeObjects = [];

function drawScene1() {
  if (!backgroundMusic.isPlaying()) {
    backgroundMusic.play();
  }
  background("black");
  image(scene1BG,0,0);
  for (i=0;i<activeObjects.length;i++) {
    activeObjects[i].draw();
  }
  player.movement();
  handleCollisions();
  graveInteraction();
  sortActiveObjects();
  for (i=0;i<smallGraves.length;i++) {
    drawGraves(smallGraves[i]);
  }
  if (runTimer()) {
    drawCurrentScene = drawScene2;
  }
}

function sortActiveObjects() {
  if ((player.posY + player.sizeY) > 470) {
    player.depth = 5;
  }
  if ((player.posY + player.sizeY) < 470) {
    player.depth = 3;
  }
  if ((player.posY + player.sizeY) < 355) {
    player.depth = 1;
  }
  activeObjects.sort(function (a, b) {
    return a.depth - b.depth;
  });
}
