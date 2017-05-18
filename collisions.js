var playerBounce = false;

function handleCollisions() {
  if (doesPlayerCollide(bigGrave)) {
    playerBounce = true;
  }

  resolveCollisions();
}

function resolveCollisions() {
  if (playerBounce === true) {

  }
}

//Function for checking if player collides with objects
//Adapted from Nico's Rectangle Collision code
function doesPlayerCollide(object) {
    return (
      (player.posX < object.posX + object.sizeX) &&
      (player.posX + player.sizeX > object.posX) &&
      (player.posY < object.posY + object.sizeY) &&
      (player.sizeY + player.posY > object.posY)
    );
}
