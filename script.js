let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.33) {
    return "rock";
  } else if (choice >= 0.33 && choice < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(getComputerChoice());

function getHumanChoice() {
  let answer = prompt("Choose wisely");
  if (answer.toLowerCase() === "rock") {
    return "rock";
  } else if (answer.toLowerCase() === "paper") {
    return "paper";
  } else if (answer.toLowerCase() === "scissors") {
    return "scissors";
  } else {
    console.log("Invalid input. Try again");
    return getComputerChoice();
  }
}
