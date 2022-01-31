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

	else
	{
		return "Draw!!! You both chose " + playerSelection + ". "; 
	}

  
}

let playerSelectionRaw = prompt("Choose one among rock, paper and scissor.");
let computerSelection = computerPlay();
let playerSelection = playerSelectionRaw.toLowerCase();

console.log(playRound(playerSelection, computerSelection));
