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
      if (timeLeftInCountDown === undefined) {
        timeLeftInCountDown = 3 * 60;
        bork.play();
      }
    }
  }
  if (player.posX > 137 && player.posX < 190 && player.posY > 410) {
    displayText("Here lies","white",20,50,220);
    displayText("Dhan son, Damn son","white",20,50,240);
  }
  if (player.posX > 313 && player.posX < 370 && player.posY > 410) {
    displayText("Use WASD to do","white",20,50,220);
    displayText("a heckin movement","white",20,50,240);
  }
  if (player.posX > 689 && player.posX < 742 && player.posY > 410) {
    displayText("Here lies Gabe","white",20,50,220);
    displayText("Bork In Peace smol one","white",20,50,240);
  }
  if (player.posX > 865 && player.posX < 918 && player.posY > 410) {
    displayText("Here lies Vicchan","white",20,50,220);
    displayText("Born to make history","white",20,50,240);
  }
  if (player.posX > 48 && player.posX < 101 && player.posY > 305 && player.posY < 350) {
    displayText("Here lies Nat","white",20,50,220);
    displayText("AKA Stress Boi","white",20,50,240);
  }
  if (player.posX > 255 && player.posX < 303 && player.posY > 305 && player.posY < 350) {
    displayText("Here lies Dumbledore","white",20,50,220);
    displayText("Killed by Snape","white",20,50,240);
  }
  if (player.posX > 600 && player.posX < 653 && player.posY > 305 && player.posY < 350) {
    displayText("You're standing on me!","white",20,50,220);
  }
  if (player.posX > 777 && player.posX < 830 && player.posY > 305 && player.posY < 350) {
    displayText("Here lies Justin","white",20,50,220);
    displayText("Gone too soon","white",20,50,240);
  }
}
