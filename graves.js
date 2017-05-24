bigGrave = {posX:375,posY:240,sizeX:170,sizeY:46,triggerPointX:450,triggerPointY:240};
smallGraves = [];
smallGravePositionsBack = [48,225,600,777];
smallGravePositionsFront = [137,313,689,865];


frontGraves = {name:"frontGraves",depth:4,
  draw: function() {
    image(frontGravesIMG,0,0);
  }
};

backGraves = {name:"backGraves",depth:2,
  draw: function() {
    image(backGravesIMG,0,0);
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

  // rect(45,355,60,20);
  // rect(222,355,60,20);
  // rect(597,355,60,20);
  // rect(774,355,60,20);

  // rect(134,470,60,20);
  // rect(310,470,60,20);
  // rect(686,470,60,20);
  // rect(862,470,60,20);
}

function drawGraves(grave) {
  //rect(grave.posX,grave.posY,grave.sizeX,grave.sizeY);
}

function graveInteraction() {
  if ((dist(player.posX,player.posY,bigGrave.triggerPointX,bigGrave.triggerPointY)) < 80) {
    displayText("Press F to pay respects","white",25,570,240);
    if (keyIsDown(70)) {
      displayText("Bork!","white",40,200,220);
      displayText("*respectfully*","white",20,165,240);
      timeLeftInCountDown = 5 * 60;
    }
  }
}
