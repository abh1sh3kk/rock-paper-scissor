document.querySelector(".scoreMessage").textContent =
  "Welcome to the game!";

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

      // return "You lost!! " + computerSelection + " beats " + playerSelection + ". ";
      // console.log("You lost!! " + computerSelection + " beats " + playerSelection + ". ");
    } else if (
      (playerSelection == "rock" && computerSelection == "scissor") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissor" && computerSelection == "paper")
    ) {
      return 1;
      // return "You won!! " + playerSelection + " beats " + computerSelection + ". ";
      // console.log("You won!! " + playerSelection + " beats " + computerSelection + ". ");
    } else if (
      (playerSelection == "rock" && computerSelection == "rock") ||
      (playerSelection == "paper" && computerSelection == "paper") ||
      (playerSelection == "scissor" && computerSelection == "scissor")
      ) {
	      return -1;
	      return "Draw!!! You both chose " + playerSelection + ". ";
	      // console.log("Draw!!! You both chose " + playerSelection + ". ");
	} else {
		return null;
		// return "Invalid Choice."
		// console.log("Invalid Choice.");
	}
}

let userScore = 0,
computerScore = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");


rock.addEventListener("click", () => {
	playerSelection = "rock";
	computerSelection = computerPlay();
	updateScore(
		playRound(playerSelection, computerSelection),
		playerSelection,
		computerSelection
		);
	});
		paper.addEventListener("click", () => {
			playerSelection = "paper";
			computerSelection = computerPlay();
			updateScore(
				playRound(playerSelection, computerSelection),
				playerSelection,
				computerSelection
				);
			});
			scissor.addEventListener("click", () => {
				playerSelection = "scissor";
				computerSelection = computerPlay();
				updateScore(
					playRound(playerSelection, computerSelection),
					playerSelection,
					computerSelection
					);
				});
				
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

    // Draw
    else {
      document.querySelector(".scoreMessage").textContent =
        "It's a tie. Computer chose the same. ";
    }
  }
//   if(computerScore === 5) {
// 	alert("You lost!!");
// }
// else if (userScore === 5) {
// 	alert("You won!!");
// }
// else {
	
// }
