const selectionsElem = document.getElementById("selections");
const playerSelectionElem = document.getElementById("player-selection");
const computerSelectionElem = document.getElementById("computer-selection");
const resultElem = document.getElementById("result");
const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("computer-score");

const selections = ["rock", "paper", "scissors"];
let computerSelection = "";
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
let result = "";

selectionsElem.addEventListener("click", (e) => {
  if (e.target.id === "selections") return;
  computerSelection = selections[Math.floor(Math.random() * 3)];
  playerSelection = e.target.id;
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "rock") {
        result = "TIE!";
      } else {
        result = computerSelection === "scissors" ? "YOU WIN!" : "YOU LOSE!";
      }
      break;
    case "paper":
      if (computerSelection === "paper") {
        result = "TIE!";
      } else {
        result = computerSelection === "rock" ? "YOU WIN!" : "YOU LOSE!";
      }
      break;
    case "scissors":
      if (computerSelection === "scissors") {
        result = "TIE!";
      } else {
        result = computerSelection === "paper" ? "YOU WIN!" : "YOU LOSE!";
      }
      break;
    default:
      result = "Error!";
  }

  if (result === "YOU WIN!") {
    playerScore++;
    resultElem.style.color = "#14e414";
  } else if (result === "YOU LOSE!") {
    computerScore++;
    resultElem.style.color = "#ff0000";
  } else {
    resultElem.style.color = "black";
  }
  playerSelectionElem.textContent = playerSelection;
  computerSelectionElem.textContent = computerSelection;
  resultElem.textContent = result;
  resultElem.style.display = "block";
  playerScoreElem.textContent = playerScore;
  computerScoreElem.textContent = computerScore;
});
