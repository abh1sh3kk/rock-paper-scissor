let userScore = 0;
let computerScore = 0;

let choiceList = document.querySelectorAll(".choose");
choiceList.forEach(function (currentValue) {
  currentValue.addEventListener("click", () => {
    computerSelection = computerPlay();
    playerSelection = currentValue.className.split(" ")[1];

    updateScore(playRound(playerSelection, computerSelection),playerSelection, computerSelection);

  });
});

// ###################################################################################################################

// Functions

function updateScore(result, playerSelection, computerSelection) {  
  // player lost
  if (result == 0) {
    document.querySelector(".computerScore").textContent = ++computerScore;
    document.querySelector(".scoreMessage").textContent =
      "You lost!! " + computerSelection + " beats " + playerSelection + ". ";
  }

  // player won
  else if (result == 1) {
    document.querySelector(".userScore").textContent = ++userScore;
    document.querySelector(".scoreMessage").textContent =
      "You Won!! " + playerSelection + " beats " + computerSelection + ". ";
  }

  // Tie
  else {
    document.querySelector(".scoreMessage").textContent =
      "It's a tie. Computer chose the same. ";
  }
}

function computerPlay() {
  let rps = Math.ceil(Math.random() * 3);

  if (rps === 1) return "rock";
  if (rps === 2) return "paper";
  if (rps === 3) return "scissor";
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissor" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissor")
  ) {
    return 0;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    return 1;
  } else if (
    (playerSelection == "rock" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "paper") ||
    (playerSelection == "scissor" && computerSelection == "scissor")
  ) {
    return -1;
  } else {
    return null;
  }
}
