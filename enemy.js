var enemy = {name:"enemy",posX:810,sizeX:150,sizeY:192,health:100,
  draw: function() {
    var sineWave = sin(frameCount * 0.04) * 150;
    enemy.posY = 180 + sineWave;
    image(bossIMG, enemy.posX,enemy.posY,enemy.sizeX,enemy.sizeY);
    enemy.healthBar();
  },

  healthBar: function() {
    fill("white");
    rect(0,0,960,30);
    displayText("Boss:","black",20,180,16);
    fill("black");
    rect(248,3,404,14);
    if (enemy.health === 100) {
      fill("green");
      boneCount = 3;
    }
    else if (enemy.health === 75) {
      fill("yellow");
      boneCount = 5;
    }
    else if (enemy.health === 50) {
      fill("orange");
      boneCount = 7;
    }
    else if (enemy.health === 25) {
      fill("red");
      boneCount = 9;
    }
    if (enemy.health > 0) {
      rect(250,5,enemy.health*4,10);
    }
    else {
      drawCurrentScene = drawScene3;
    }
  }
};
