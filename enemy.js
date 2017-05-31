var enemy = {name:"enemy",posX:810,sizeX:150,sizeY:192,health:100,
  draw: function() {
    var sineWave = sin(frameCount * 0.04) * 150;
    enemy.posY = 180 + sineWave;
    push();
    tint(((100 - enemy.health)*2),0,0,255);
    image(bossIMG, enemy.posX,enemy.posY,enemy.sizeX,enemy.sizeY);
    pop();
    enemy.healthBar();
  },

  healthBar: function() {
    fill("white");
    rect(0,0,960,30);
    displayText("Boss:","green",20,180,16);
    if (enemy.health > 31) {
      fill("green");
    }
    else if (enemy.health < 30) {
      fill("red");
    }
    if (enemy.health > 0) {
      rect(250,5,enemy.health*4,10);
    }
    else {
      //End screen
    }
  }
};
