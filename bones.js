var bones = [];
var speeds = [-6,-5,-4,4,5,6];

function makeBones() {
  if (bones.length < 6) {
    bones.push({
      posX:random(960,1040),posY:((enemy.posY+(enemy.sizeY/2))+random(-100,100)),sizeX:30,sizeY:15,speedX:random(4,8)
    });
  }
}

function drawBones(bone) {
  fill("white");
  rect(bone.posX,bone.posY,bone.sizeX,bone.sizeY);

  if ((bone.posX + bone.sizeX) < 0 ) {
    bones.splice(i,1);
  }

  bone.posX -= bone.speedX;
}
