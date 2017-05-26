var player = {name:"player",posX:480,posY:400,sizeX:90,sizeY:80,
  speedX:0,speedY:0,friction:0.5,direction:"right",depth:5,

  draw: function() {
    if (player.direction === "right" && !playerHit) {
      push();
      translate(player.posX - (player.sizeX/2),player.posY);
      scale(1,1);
      image(pug,0,0,player.sizeX, player.sizeY);
      pop();
    }
    else if (player.direction ===  "left" && !playerHit) {
      push();
      translate(player.posX + (player.sizeX/2),player.posY);
      scale(-1,1);
      image(pug,0,0,player.sizeX, player.sizeY);
      pop();
    }
    else if (playerHit) {
      push();
      translate(player.posX - (player.sizeX/2), player.posY + (player.sizeY*1.2));
      scale(1,-1);
      tint(255,0,0,200);
      image(pug,0,0,player.sizeX, player.sizeY);
      pop();
    }

    player.posX += player.speedX;
    player.posY += player.speedY;
    player.speedX = player.speedX * player.friction;
    player.speedY = player.speedY * player.friction;

    if (drawCurrentScene === drawScene1) {
      if (player.posX < 0) {
        player.posX = 0;
        player.speedX = player.speedX * -1;
      }
      if (player.posX > width - player.sizeX) {
        player.posX = width - player.sizeX;
        player.speedX = player.speedX * - 1;
      }
      if (player.posY < 215) {
        player.posY = 215;
        player.speedY = player.speedY * -1;
      }
      if (player.posY > height - player.sizeY) {
        player.posY = height - player.sizeY;
        player.speedY = player.speedY * - 1;
      }
    }

    else if (drawCurrentScene === drawScene2) {
      if (player.posX - (player.sizeX/2) < 0) {
        player.posX = 0 + (player.sizeX/2);
        player.speedX = player.speedX * -1;
        playerHit = false;
      }
      if (player.posY < 30) {
        player.posY = 30;
        player.speedY = player.speedY * -1;
      }
      if (player.posY > height - player.sizeY) {
        player.posY = height - player.sizeY;
        player.speedY = player.speedY * - 1;
      }
      if (player.posX > width - (player.sizeX/2)) {
        player.posX = width - (player.sizeX/2);
        player.speedX = player.speedX * - 1;
      }
    }
},

  movement: function() {
    if (drawCurrentScene === drawScene1) {
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
    }

    if (drawCurrentScene === drawScene2) {
      player.friction = 0.8;
      if (keyIsPressed && !playerHit) {
        if (keyCode === 38) {
          player.speedY = -5;
        }
        if (keyCode === 40) {
          player.speedY = 5;
        }
        if (keyCode === 39) {
          player.speedX = 5;
          player.direction = "right";
        }
        if (keyCode === 37) {
          player.speedX = -3;
          player.direction = "left";
        }
      }
    }
  },
};
