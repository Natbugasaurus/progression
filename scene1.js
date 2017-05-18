function drawScene1() {
  background("black");
  image(scene1BG,0,0);
  player.draw();
  player.movement();
  makeGraves();
}
