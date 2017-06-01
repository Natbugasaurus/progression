bigGrave = {posX:375,posY:280,sizeX:170,sizeY:46,triggerPointX:450,triggerPointY:240};
smallGraves = [];
smallGravePositionsBack = [48,225,600,777];
smallGravePositionsFront = [137,313,689,865];


frontGraves = {name:"frontGraves",depth:4,posX:0,posY:0,
  draw: function() {
    image(frontGravesIMG,frontGraves.posX,frontGraves.posY);
  }
};

backGraves = {name:"backGraves",depth:2,posX:0,posY:0,
  draw: function() {
    image(backGravesIMG,backGraves.posX,backGraves.posY);
  }
};

function makeGraves() {
  //rect(bigGrave.posX,bigGrave.posY,bigGrave.sizeX,bigGrave.sizeY);
  for (i=0;i<smallGravePositionsBack.length;i++) {
    smallGraves.push({posX:(smallGravePositionsBack[i]),posY:360,sizeX:53,sizeY:15});
  }
  for (i=0;i<smallGravePositionsFront.length;i++) {
    smallGraves.push({posX:(smallGravePositionsFront[i]),posY:470,sizeX:53,sizeY:15});
  }
}

function graveInteraction() {
  //rect(bigGrave.posX,bigGrave.posY,bigGrave.sizeX,bigGrave.sizeY);
  if ((dist(player.posX,player.posY,bigGrave.triggerPointX,bigGrave.triggerPointY)) < 80) {
    displayText("Press F to pay respects","white",25,570,240);
    if (keyIsDown(70)) {
      displayText("Bork!","white",40,200,220);
      displayText("*respectfully*","white",20,165,240);
      if (timeLeftInCountDown === undefined) {
        timeLeftInCountDown = 3 * 60;
      }
    }
  }
  if (player.posX > 313 && player.posX < 370 && player.posY > 410) {
    print("Yes!");
    displayText("Use WASD to do","white",20,50,220);
    displayText("a heckin movement","white",20,50,240);
  }
}
