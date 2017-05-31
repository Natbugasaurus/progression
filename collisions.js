var playerBounce = false;
var playerHit = false;
var playerHitBoss = false;

function handleCollisions() {
  if (drawCurrentScene === drawScene1) {
    if (doesPlayerCollide(bigGrave)) {
      playerBounce = true;
    }

    for (i=0;i<smallGraves.length;i++) {
      if (doesPlayerCollide(smallGraves[i])) {
        playerBounce = true;
      }
    }
  }

  for (i=0;i<bones.length;i++) {
    if (doesPlayerCollide(bones[i])) {
      playerHit = true;
      bones.splice(i,1);
    }
  }

  if (doesPlayerCollide(enemy)) {
    playerHitBoss = true;
  }

  resolveCollisions();
}

function resolveCollisions() {
  if (playerBounce === true) {
    player.speedX = player.speedX * -1;
    player.speedY = player.speedY * -1;
    playerBounce = false;
  }

  if (playerHit === true) {
    player.posX -= 5;
  }

  if (playerHitBoss === true) {
    enemy.health -= 5;
    displayText("Bork Bork","white",20,player.posX-100,player.posY-20);
    player.speedX = player.speedX * - 1.5;
    playerHitBoss = false;
  }
}

//Function for checking if player collides with objects
//Adapted from Nico's Rectangle Collision code
function doesPlayerCollide(object) {
  //rect(player.posX-(player.sizeX/2),(player.posY+(player.sizeY/2)),player.sizeX,(player.sizeY/2));
  if (drawCurrentScene === drawScene1) {
    return (
      (player.posX - (player.sizeX/2) < object.posX + object.sizeX) &&
      (player.posX + (player.sizeX/2) > object.posX) &&
      ((player.posY + (player.sizeY/1.2)) < object.posY + object.sizeY) &&
      (player.sizeY + player.posY > object.posY)
    );
  }
  else {
    return (
      (player.posX - (player.sizeX/2) < object.posX + object.sizeX) &&
      (player.posX + (player.sizeX/2) > object.posX) &&
      (player.posY < object.posY + object.sizeY) &&
      (player.sizeY + player.posY > object.posY)
    );
  }
}
