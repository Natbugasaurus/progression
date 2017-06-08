activeObjects = [];
var bgX = 0, bgY = 0;

function drawScene1() {
  //Active Objects so graves and player drawing can be sorted for depth
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

  //Checks if timer is complete and moves to next scene
  if (runTimer()) {
    drawCurrentScene = drawScene2;
  }

  //If timer is running, play transition animation and sound
  if (timeLeftInCountDown !== undefined) {
    if (!rumbleSound.isPlaying()) {
      rumbleSound.play();
    }
    displayText("Bork!","white",40,200,220);
    displayText("*respectfully*","white",20,165,240);
    myCamera.x += (sin(frameCount)*2);
    myCamera.y -= (sin(frameCount)*2);
    myCamera.zoom += 0.01;
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
