var scrollingText = 200;

function drawScene2() {
  myCamera.x = width/2;
  myCamera.y = height/2;
  myCamera.zoom = 1;
  rumbleSound.pause();
  backgroundMusic.pause();
  if (!bossMusic.isPlaying()) {
    bossMusic.play();
  }
  background("black");
  displayText("BOOP THE BOSS!","white",75,scrollingText,100);
  scrollingText -= 5;
  if (scrollingText < -800) {
    scrollingText = width;
  }
  activeObjects = [player, enemy];
  player.movement();
  makeBones();
  for (i=0;i<bones.length;i++) {
    drawBones(bones[i]);
  }
  for (i=0;i<activeObjects.length;i++) {
    activeObjects[i].draw();
  }

  handleCollisions();
}
