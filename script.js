const choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
let isGameStarted = false;

// player section
const humanSection = document.getElementById("human-section");
const computerSection = document.getElementById("computer-section");
// selection card
const humanSelectionCard = humanSection.querySelector(".selection-card");
const computerSelectionCard = computerSection.querySelector(".selection-card");
// computer
const loadingIndicator = document.querySelector(".status-indicator");
// human
const humanSelection = humanSelectionCard.querySelectorAll("div");

// randomly returns rock paper or scissors
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

// takes user choice and returns it
function getHumanChoice() {
  const choice = humanSelected;

  if (!choice) {
    return getHumanChoice();
  }
  return choice;
}

function determineScore(humanSelection, computerSelection) {
  //   tie
  if (humanSelection === computerSelection) {
    return { computer: 0, human: 0 };
  }
  //   win
  if (
    (humanSelection === choices[0] && computerSelection === choices[2]) ||
    (humanSelection === choices[1] && computerSelection === choices[0]) ||
    (humanSelection === choices[2] && computerSelection === choices[1])
  ) {
    return { human: 1, computer: 0 };
  }
  //   lose
  return { human: 0, computer: 1 };
}

function logMessage(humanSelection, computerSelection, score) {
  let message;

  if (score.computer === score.human) {
    message = `It's a tie! You both chose ${humanSelection}.`;
  } else if (score.computer > score.human) {
    message = `You lose! ${computerSelection} beats ${humanSelection}.`;
  } else {
    message = `You win! ${humanSelection} beats ${computerSelection}.`;
  }

  const messageContainer = document.querySelector(".message");
  messageContainer.textContent = message;
}

function logMatchOutcome() {
  let message;

  if (humanScore === computerScore) {
    message = "It's a tie!";
  } else if (humanScore > computerScore) {
    message = "You win!";
  } else {
    message = "You lose!";
  }

  console.log(
    `${message} Final Score: Player: ${humanScore} - Computer: ${computerScore}`
  );
}

function simulateComputerPicking() {
  const computerSelection = getComputerChoice();

  if (computerSelection) {
    loadingIndicator.style.display = "none";
    computerSection.querySelector(".status-card").textContent =
      "Computer made a pick";
    return computerSelection;
  }
}

function showComputerPick(computerSelection) {
  loadingIndicator.style.display = "none";
  computerSelectionCard.querySelector(
    `.pick-${computerSelection.toLowerCase()}`
  ).style.display = "block";
}

function playRound(humanSelection, computerSelection) {
  isGameStarted = true;
  document.getElementById("round-number").textContent = currentRound;
  //   determine winner
  showComputerPick(computerSelection);
  const score = determineScore(humanSelection, computerSelection);
  //   announce winner
  logMessage(humanSelection, computerSelection, score);
  //   increment score of winner
  humanScore = score.human ? (humanScore += 1) : humanScore;
  computerScore = score.computer ? (computerScore += 1) : computerScore;

  currentRound += 1;
}

humanSelectionCard.querySelectorAll("div").forEach((div) => {
  return div.addEventListener("click", (event) => {
    const target = event.target;

    const humanSelection = target.alt;
    const computerSelection = simulateComputerPicking();

    humanSection.querySelector(".status-card").textContent = "You made a pick";
    humanSelectionCard.querySelectorAll("div").forEach((div) => {
      console.log(div.classList);
      if (!div.classList.contains(`pick-${target.alt.toLowerCase()}`)) {
        div.style.display = "none";
      }
    });

    playRound(humanSelection, computerSelection);
  });
});

// while (isGameStarted && humanScore !== 5 || humanScore !== 5) {

// }
