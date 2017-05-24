var timeLeftInCountDown;

function runTimer() {
  if (timeLeftInCountDown > 0) {
    print("Time left in count down: " + timeLeftInCountDown/60);
    timeLeftInCountDown -= 1;
  }
}
