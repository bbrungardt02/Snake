const startGameButton = document.getElementById("startGameButton");
const gameContainer = document.getElementById("gameContainer");
const newGameButton = document.getElementById("newGameButton");

let snake = {
  body: [[0, 0]],
  nextDirection: [1, 0],
};

let gameState = {
  apple: [10, 8],
  snake: snake, // from above
};

function startGame() {
  startGameButton.style.display = "none";
}

startGameButton.addEventListener("click", startGame);
