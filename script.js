console.log("Hello world");

const choices = ["Rock", "Paper", "Scissors"];

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

  if (!choice) getHumanChoice();
  return choice;
}

console.log(getHumanChoice());
