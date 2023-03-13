let homeScore = 0;
let homeScoreEl = document.getElementById("home-score-el");

let guestScore = 0;
let guestScoreEl = document.getElementById("guest-score-el");

//* home score functions below /

function increaseHomeScoreOne() {
  homeScore += +1;
  homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreTwo() {
  homeScore += +2;
  homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreThree() {
  homeScore += +3;
  homeScoreEl.textContent = homeScore;
}

//* guest score functions below /

function increaseGuestScoreOne() {
  guestScore += +1;
  guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreTwo() {
  guestScore += +2;
  guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreThree() {
  guestScore += +3;
  guestScoreEl.textContent = guestScore;
}

//* below is the reset button for the scoreboard /

function reset() {
  homeScore = 0;
  homeScoreEl.textContent = homeScore;

  guestScore = 0;
  guestScoreEl.textContent = guestScore;
}
