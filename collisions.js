var playerBounce = false;

function handleCollisions() {
  if (doesPlayerCollide(bigGrave)) {
    playerBounce = true;
  }

  for (i=0;i<smallGraves.length;i++) {
    if (doesPlayerCollide(smallGraves[i])) {
      playerBounce = true;
    }
  }

  resolveCollisions();
}

function resolveCollisions() {
  if (playerBounce === true) {
    player.speedX = player.speedX * -1;
    player.speedY = player.speedY * -1;
    playerBounce = false;
  }
}

//Function for checking if player collides with objects
//Adapted from Nico's Rectangle Collision code
function doesPlayerCollide(object) {
    return (
      (player.posX - (player.sizeX/2) < object.posX + object.sizeX) &&
      (player.posX + (player.sizeX/2) > object.posX) &&
      (player.posY < object.posY + object.sizeY) &&
      (player.sizeY + player.posY > object.posY)
    );
}
