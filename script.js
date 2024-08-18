console.log("Hello world");

const choices = ["Rock", "Paper", "Scissors"];

// randomly returns rock paper or scissors
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

// console.log(getComputerChoice());
