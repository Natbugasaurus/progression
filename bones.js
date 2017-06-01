var bones = [];
var speeds = [-6,-5,-4,4,5,6];
var boneCount = 3;

function makeBones() {
  if (bones.length < boneCount) {
    bones.push({
      posX:random(960,1040),posY:((enemy.posY+(enemy.sizeY/2))+random(-200,200)),sizeX:60,sizeY:25,speedX:random(4,8)
    });
  }
}

function drawBones(bone) {
  image(bonesIMG,bone.posX,bone.posY,bone.sizeX,bone.sizeY);

  if ((bone.posX + bone.sizeX) < 0 ) {
    bones.splice(i,1);
  }

  bone.posX -= bone.speedX;
}
