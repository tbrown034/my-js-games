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
const selectContainer = document.getElementById("select-container");
const randomGame = document.getElementById("random-game");

// helper functions

function showTic() {
  ticSection.style.display = "flex";
  selectContainer.style.display = "none";
}

function showConnect() {
  connectSection.style.display = "flex";
  selectContainer.style.display = "none";
}
function showRock() {
  rockSection.style.display = "flex";
  selectContainer.style.display = "none";
}

function goBack(e) {
  // This will find the closest parent with the class 'game-section' and hide it
  selectContainer.style.display = "flex";

  e.target.closest(".game-section").style.display = "none";
}

function darkMode() {
  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");
  darkModeButton.innerHTML = isDarkMode
    ? '<i class="fa-solid fa-sun"></i> Light Mode'
    : '<i class="fa-solid fa-circle-half-stroke"></i> Dark Mode';
}

function clickRandom() {
  ticSection.style.display = "none";
  connectSection.style.display = "none";
  rockSection.style.display = "none";

  let randomNumber = Math.floor(Math.random() * 3);
  console.log("rando", randomNumber);
  if (randomNumber === 0) {
    showTic();
  } else if (randomNumber === 1) {
    showConnect();
  } else {
    showRock();
  }
}

// event listeners

selectTic.addEventListener("click", showTic);
selectConnect.addEventListener("click", showConnect);
selectRock.addEventListener("click", showRock);

backButton.forEach((backButton) => {
  backButton.addEventListener("click", goBack);
});

darkModeButton.addEventListener("click", darkMode);

randomGame.addEventListener("click", clickRandom);
