var enemy = {name:"enemy",posX:810,sizeX:150,sizeY:192,health:100,
  draw: function() {
    var sineWave = sin(frameCount * 0.04) * 150;
    enemy.posY = 180 + sineWave;

    push();
    tint(255,55 + (enemy.health*2),55 + (enemy.health*2));
    image(bossIMG, enemy.posX,enemy.posY,enemy.sizeX,enemy.sizeY);
    pop();

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
      boneCount = 4;
    }
    else if (enemy.health === 75) {
      fill("yellow");
      boneCount = 6;
    }
    else if (enemy.health === 50) {
      fill("orange");
      boneCount = 8;
    }
    else if (enemy.health === 25) {
      fill("red");
      boneCount = 10;
    }

    if (enemy.health > 0) {
      rect(250,5,enemy.health*4,10);
    }
    else {
      if (timeLeftInCountDown === undefined) {
        timeLeftInCountDown = 5*60;
      }
      else {
        if (runTimer()) {
          drawCurrentScene = drawScene3;
        }
        else {
          bones = [];
          boneCount = 0;
          enemy.posX += (sin(frameCount)*4);
          enemy.posY = height/2;
          if (bossMusic.isPlaying()) {
            bossMusic.pause();
          }
          if (!explosion.isPlaying()) {
            explosion.play();
          }
        }
      }
    }
  }
};
