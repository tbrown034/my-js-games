////// selectors

const darkModeButton = document.getElementById("dark-button");
//Select Game
const selectTic = document.getElementById("select-tic");
const selectConnect = document.getElementById("select-connect");
const selectRock = document.getElementById("select-rock");
//Game Sections

const ticSection = document.getElementById("tic-section");
const connectSection = document.getElementById("connect-section");
const rockSection = document.getElementById("rock-section");

const playButton = document.getElementsByClassName("play");
const backButton = document.querySelectorAll(".back");

// helper functions

function showTic() {
  ticSection.style.display = "flex";
}

function showConnect() {
  connectSection.style.display = "flex";
}
function showRock() {
  rockSection.style.display = "flex";
}

function goBack(e) {
  // This will find the closest parent with the class 'game-section' and hide it
  e.target.closest(".game-section").style.display = "none";
}

// event listeners

selectTic.addEventListener("click", showTic);
selectConnect.addEventListener("click", showConnect);
selectRock.addEventListener("click", showRock);

backButton.forEach((backButton) => {
  backButton.addEventListener("click", goBack);
});
