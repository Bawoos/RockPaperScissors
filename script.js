const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

const choiceList = document.querySelector(".choices");
const results = document.querySelector(".results");

choiceList.appendChild(rock);
choiceList.appendChild(paper);
choiceList.appendChild(scissors);

rock.addEventListener("click", () => {
  playGame("rock");
});
paper.addEventListener("click", () => {
  playGame("paper");
});
scissors.addEventListener("click", () => {
  playGame("scissors");
});

function playGame(userChoice) {
  let humanScore = 0;
  let computerScore = 0;

  playRound(userChoice, getComputerChoice());

  results.textContent = `Final Score: You - ${humanScore}, Computer - ${computerScore}`;
  if (humanScore > computerScore) {
    results.textContent = "Congratulations! You won the game!";
  } else if (humanScore < computerScore) {
    results.textContent = "Sorry! The computer won the game.";
  } else {
    results.textContent = "It's a tie game!";
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      results.textContent = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
      computerScore++;
      results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
    results.textContent = `Score: You - ${humanScore}, Computer - ${computerScore}`;
  }
}
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

playGame();
