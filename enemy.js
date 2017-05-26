

var enemy = {name:"enemy",posX:900,sizeX:150,sizeY:190,health:100,
  draw: function() {
    var sineWave = sin(frameCount * 0.04) * 150;
    enemy.posY = 180 + sineWave;
    fill("white");
    rect(enemy.posX,enemy.posY,enemy.sizeX,enemy.sizeY);
    enemy.healthBar();
  },
  healthBar: function() {
    fill("white");
    rect(0,0,960,30);
    displayText("Boss:","green",20,180,16);
    fill("green");
    if (enemy.health > 0) {
      rect(250,5,enemy.health*4,10);
    }
    else {
      //End screen
    }
  }
};
