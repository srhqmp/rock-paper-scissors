const choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

// randomly returns rock paper or scissors
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

// takes user choice and returns it
function getHumanChoice() {
  const input = prompt(`Enter your choice. (${choices.join(", ")}):`);

  const choice =
    input &&
    choices.find(
      (choice) =>
        choice.toLocaleLowerCase() === input.trim().toLocaleLowerCase()
    );

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

  console.log(message);
}

// play a single round
function playRound(humanSelection, computerSelection) {
  //   determine winner
  const score = determineScore(humanSelection, computerSelection);
  //   announce winner
  logMessage(humanSelection, computerSelection, score);
  //   increment score of winner
  humanScore = score.human ? (humanScore += 1) : humanScore;
  computerScore = score.computer ? (computerScore += 1) : computerScore;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
