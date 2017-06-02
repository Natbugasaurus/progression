var timeLeftInCountDown;

function runTimer() {
  if (timeLeftInCountDown > 0) {
    //print("Time left in count down: " + floor(timeLeftInCountDown/60));
    timeLeftInCountDown -= 1;
  }
  else if (timeLeftInCountDown === 0) {
    timeLeftInCountDown = undefined;
    return true;
  }
  else {
    return false;
  }
}
