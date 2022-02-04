function computerPlay() {
  let rps = Math.ceil(Math.random() * 3);

  if (rps === 1) return "rock";
  if (rps === 2) return "paper";
  if (rps === 3) return "scissor";
}

function playRound(playerSelection, computerSelection) {

	if (playerSelection == "rock" && computerSelection == "paper" || 
	playerSelection == "scissor" && computerSelection == "rock" || 
	playerSelection == "paper" && computerSelection == "scissor") {
		return 0;

		// return "You lost!! " + computerSelection + " beats " + playerSelection + ". ";
		// console.log("You lost!! " + computerSelection + " beats " + playerSelection + ". ");
	}

	else if (playerSelection == "rock" && computerSelection == "scissor" || 
	playerSelection == "paper" && computerSelection == "rock" || 
	playerSelection == "scissor" && computerSelection == "paper")
	{
		return 1;
		// return "You won!! " + playerSelection + " beats " + computerSelection + ". ";
		// console.log("You won!! " + playerSelection + " beats " + computerSelection + ". ");
	}

	else if (playerSelection == "rock" && computerSelection == "rock" || 
	playerSelection == "paper" && computerSelection == "paper" || 
	playerSelection == "scissor" && computerSelection == "scissor")
	{
		return -1;
		return "Draw!!! You both chose " + playerSelection + ". "; 
		// console.log("Draw!!! You both chose " + playerSelection + ". "); 
	}
	else {
		return null;
		// return "Invalid Choice."
		// console.log("Invalid Choice.");
	}
  
}

// function game()
// {	
// 	let playerSelectionRaw = prompt("Choose one among rock, paper and scissor.");
// 	let playerSelection = playerSelectionRaw.toLowerCase();

// 	let computerSelection = computerPlay();
// 	let result = playRound(playerSelection, computerSelection);
// 	console.log(result);

// 	if (result[4] == 'l') return 0;
// 	else if (result[4] == 'w') return 1;
// 	else if (result[0] == 'I') return null;
// 	else return -1;
// }


// let result;
// for (let i = 1; i <= 3; i++) {
	// 	result = game();
	// 	if (result == 1) userScore++;
	// 	else if (result == 0) computerScore++;
	// }
	// if (userScore > computerScore) 
	// 	console.log("You won!!! Congratulations.");
	// else if (computerScore > userScore) 
	// 	console.log("You lost!! Better luck next time.");
	// else 
	// 	console.log("Draw.");
	

let userScore = 0, computerScore = 0;
let playerSelection = "";

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");



rock.addEventListener("click", () => {
	playerSelection = "rock";
	computerSelection = computerPlay();
	updateScore(playRound(playerSelection, computerSelection), playerSelection, computerSelection);
	
} );
paper.addEventListener("click", () => {
	playerSelection = "paper";
	computerSelection = computerPlay();
	updateScore(playRound(playerSelection, computerSelection), playerSelection, computerSelection);
	
} );
scissor.addEventListener("click", () => {
	playerSelection = "scissor";
	computerSelection = computerPlay();
	updateScore(playRound(playerSelection, computerSelection), playerSelection, computerSelection);
} );


function updateScore(result, playerSelection, computerSelection) {
	
	// player lost
	if (result == 0) {
		document.querySelector(".computerScore").textContent = ++computerScore;
		document.querySelector(".scoreMessage").textContent = "You lost!! " + computerSelection + " beats " + playerSelection + ". ";
	}
	
	
	// player won
	else if (result == 1){
		document.querySelector(".userScore").textContent = ++userScore;
		document.querySelector(".scoreMessage").textContent = "You Won!! " + playerSelection + " beats " + computerSelection + ". ";
	}
	
	// Draw
	else{
		document.querySelector(".scoreMessage").textContent = "It's a tie. Computer chose the same. ";
	}

}

