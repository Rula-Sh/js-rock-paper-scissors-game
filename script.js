const selectionsElem = document.getElementById("selections");
const playerSelectionElem = document.getElementById("player-selection");
const computerSelectionElem = document.getElementById("computer-selection");
const roundResult = document.getElementById("round-result");
const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("computer-score");

const modalsContainer = document.getElementById("modals-container");
const targetContainer = document.getElementById("target-container");
const radioContainer = document.getElementById("radios-container");
const numberRadBtn = document.getElementById("number");
const randomRadBtn = document.getElementById("random");
const infiniteRadBtn = document.getElementById("infinite");
const scoreTargetInput = document.getElementById("score-target-input");
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

radioContainer.addEventListener("click", () => {
  if (numberRadBtn.checked) {
    scoreTargetInput.style.display = "block";
  } else {
    scoreTargetInput.style.display = "none";
  }
});

start.addEventListener("click", () => {
  if (numberRadBtn.checked) {
    if (scoreTargetInput.value === "" || Number(scoreTargetInput.value) <= 0) {
      // TODO: popup
    } else {
      targetContainer.style.display = "none";
      modalsContainer.style.display = "none";
      targetScore = Number(scoreTargetInput.value);
    }
  } else {
    if (randomRadBtn.checked) {
      randomScore = Math.floor(Math.random() * 10 + 1);
      targetScore = randomScore;
      console.log(targetScore);
    } else {
      targetScore = "infinite";
    }
    targetContainer.style.display = "none";
    modalsContainer.style.display = "none";
  }
});

cont.addEventListener("click", () => {
  if (numberRadBtn.checked) {
    targetScore += Number(scoreTargetInput.value);
  } else {
    targetScore += randomScore;
  }
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
  scoreTargetInput.value = "";
  updatePageContent();
  showModal("target");
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
    targetContainer.style.display = "none";
  } else {
    targetContainer.style.display = "flex";
    resultContainer.style.display = "none";
  }
}
