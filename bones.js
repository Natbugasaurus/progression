var bones = [];
var boneCount = 3;

function makeBones() {
  //Make bones based on boneCount, which changes depending on the bosses health
  if (bones.length < boneCount) {
    bones.push({
      posX:random(960,1040),posY:((enemy.posY+(enemy.sizeY/2))+random(-200,200)),sizeX:60,sizeY:25,speedX:random(6,10)
    });
  }
}

function drawBones(bone) {
  image(bonesIMG,bone.posX,bone.posY,bone.sizeX,bone.sizeY);

  //Remove bones if they leave the screen
  if ((bone.posX + bone.sizeX) < 0 ) {
    bones.splice(i,1);
  }

  bone.posX -= bone.speedX;
}
