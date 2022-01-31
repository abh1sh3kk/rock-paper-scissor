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
		return "You lost!! " + computerSelection + " beats " + playerSelection + ". ";
	}

	else if (playerSelection == "rock" && computerSelection == "scissor" || 
	playerSelection == "paper" && computerSelection == "rock" || 
	playerSelection == "scissor" && computerSelection == "paper")
	{
		return "You won!! " + playerSelection + " beats " + computerSelection + ". ";
	}

	else if (playerSelection == "rock" && computerSelection == "rock" || 
	playerSelection == "paper" && computerSelection == "paper" || 
	playerSelection == "scissor" && computerSelection == "scissor")
	{
		return "Draw!!! You both chose " + playerSelection + ". "; 
	}
	else {
		return "Invalid Choice."
	}

  
}

function game()
{	
	let playerSelectionRaw = prompt("Choose one among rock, paper and scissor.");
	let playerSelection = playerSelectionRaw.toLowerCase();

	let computerSelection = computerPlay();
	let result = playRound(playerSelection, computerSelection);
	console.log(result);

	if (result[4] == 'l') return 0;
	else if (result[4] == 'w') return 1;
	else if (result[0] == 'I') return null;
	else return -1;
}
let userScore = 0, computerScore = 0;

let result;
for (let i = 1; i <= 3; i++) {
	result = game();
	if (result == 1) userScore++;
	else if (result == 0) computerScore++;
}
if (userScore > computerScore) 
	console.log("You won!!! Congratulations.");
else if (computerScore > userScore) 
	console.log("You lost!! Better luck next time.");
else 
	console.log("Draw.");