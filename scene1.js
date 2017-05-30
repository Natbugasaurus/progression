activeObjects = [];

function drawScene1() {
  activeObjects = [player,frontGraves,backGraves];
  if (!backgroundMusic.isPlaying()) {
    backgroundMusic.play();
  }
  background("black");
  image(scene1BG,0,0);
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

  while (timeLeftInCountDown !== undefined) {

  }
}

function sortActiveObjects() {
  //print(player.depth);
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
