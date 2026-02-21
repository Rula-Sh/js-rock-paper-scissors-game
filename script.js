const selectionsElem = document.getElementById("selections");
const playerSelectionElem = document.getElementById("player-selection");
const computerSelectionElem = document.getElementById("computer-selection");
const roundResult = document.getElementById("round-result");
const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("computer-score");

const modalsContainer = document.getElementById("modals-container");
const targetContainer = document.getElementById("target-container");
const scoreTarget = document.getElementById("score-target");
const start = document.getElementById("start");
const resultContainer = document.getElementById("result-container");
const resultElem = document.getElementById("result");
const reset = document.getElementById("reset");
const cont = document.getElementById("continue");

const selections = ["rock", "paper", "scissors"];
let computerSelection = "";
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
let result = "";
let targetScore = 0;

showModal("target");

selectionsElem.addEventListener("click", (e) => {
  if (e.target.id === "selections") return;
  computerSelection = selections[Math.floor(Math.random() * 3)];
  playerSelection = e.target.id;

  if (computerSelection === playerSelection) {
    updatePageContent();
  } else {
    switch (playerSelection) {
      case "rock":
        computerSelection === "scissors"
          ? updatePageContent("player")
          : updatePageContent("computer");
        break;
      case "paper":
        computerSelection === "rock"
          ? updatePageContent("player")
          : updatePageContent("computer");
        break;
      case "scissors":
        computerSelection === "paper"
          ? updatePageContent("player")
          : updatePageContent("computer");
        break;
    }
  }

  if (targetScore === playerScore && playerScore === computerScore) {
    result = "TIE!";
    resultElem.style.color = "black";
  } else if (targetScore === playerScore) {
    result = "YOU WON! 🎉";
    resultElem.style.color = "#14e414";
  } else if (targetScore === computerScore) {
    result = "YOU LOST! 😢";
    resultElem.style.color = "#ff0000";
  }

  if (targetScore === playerScore || targetScore === computerScore) {
    showModal("result");
  }
});

cont.addEventListener("click", () => {
  targetScore += Number(scoreTarget.value);
  console.log(targetScore);
  resultContainer.style.display = "none";
  modalsContainer.style.display = "none";
});

reset.addEventListener("click", () => {
  resultContainer.style.display = "none";
  modalsContainer.style.display = "none";
  computerSelection = "";
  playerSelection = "";
  playerScore = 0;
  computerScore = 0;
  result = "";
  targetScore = 0;
  scoreTarget.value = "";
  updatePageContent();
  showModal("target");
});

start.addEventListener("click", () => {
  if (scoreTarget.value === "" || Number(scoreTarget.value) <= 0) {
    // TODO: popup
  } else {
    targetContainer.style.display = "none";
    modalsContainer.style.display = "none";
    targetScore = Number(scoreTarget.value);
  }
});

function updatePageContent(roundWinner) {
  if (roundWinner === "player") {
    playerScore++;
    roundResult.textContent = "Player +1";
    roundResult.style.color = "#14e414";
  } else if (roundWinner === "computer") {
    computerScore++;
    roundResult.textContent = "Computer +1";
    roundResult.style.color = "red";
  } else {
    roundResult.textContent = "Tie";
    roundResult.style.color = "black";
  }
  playerSelectionElem.textContent = playerSelection;
  computerSelectionElem.textContent = computerSelection;
  playerScoreElem.textContent = playerScore;
  computerScoreElem.textContent = computerScore;
}

function showModal(type) {
  modalsContainer.style.display = "block";
  if (type === "result") {
    resultContainer.style.display = "flex";
    resultElem.textContent = result;
  } else {
    targetContainer.style.display = "flex";
  }
}
