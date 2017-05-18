var player = {posX:100,posY:100,sizeX:90,sizeY:80,
  speedX:0,speedY:0,friction:0.5,direction:"right",

  draw: function() {
    if(player.direction === "right") {
      push();
      translate(player.posX - (player.sizeX/2),player.posY);
      scale(1,1);
      image(pug,0,0,player.sizeX, player.sizeY);
      pop();
    }
    else if (player.direction ===  "left") {
      push();
      translate(player.posX + (player.sizeX/2),player.posY);
      scale(-1,1);
      image(pug,0,0,player.sizeX, player.sizeY);
      pop();
    }

    player.posX += player.speedX;
    player.posY += player.speedY;
    player.speedX = player.speedX * player.friction;
    player.speedY = player.speedY * player.friction;

    if (player.posX < 0) {
      player.posX = 0;
      player.speedX = player.speedX * -1;
    }
    if(player.posX > width - player.sizeX) {
      player.posX = width - player.sizeX;
      player.speedX = player.speedX * - 1;
    }
    if (player.posY < 215) {
      player.posY = 215;
      player.speedY = player.speedY * -1;
    }
    if(player.posY > height - player.sizeY) {
      player.posY = height - player.sizeY;
      player.speedY = player.speedY * - 1;
    }
  },

  movement: function() {
    if (keyIsPressed) {
      switch (keyCode) {
        case 37:
          player.speedX = -3;
          player.direction = "left";
          break;
        case 39:
          player.speedX = 3;
          player.direction = "right";
          break;
        case 38:
          player.speedY = -3;
          break;
        case 40:
          player.speedY = 3;
          break;
      }
    }
  },
};
