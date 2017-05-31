function drawScene2() {
  backgroundMusic.pause();
  background("black");
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
