function computerPlay(){
	let rps = Math.ceil(Math.random() * 3);

	if (rps === 1) return ("rock");
	if (rps === 2) return ("paper");
	if (rps === 3) return ("scissor");
}

function playRound(playerSelection, computerSelection) {
	let resultFlag = -1;

	let cRock, cPaper, cScissor;
	let pRock, pPaper, pScissor;

	(computerSelection === "rock") ? cRock = 1 : 
		(computerSelection === "paper") ? cPaper = 1 : 
			(computerSelection === "scissor") ? cScissor = 1 : 1;
	
	(playerSelection === "rock") ? pRock = 1 : 
		(playerSelection === "paper") ? pPaper = 1 : 
			(playerSelection === "scissor") ? pScissor = 1 : 1;


	if (cRock)
	{
		if (pRock)
			resultFlag = -1;
		else if (pPaper)
			resultFlag = 1;
		else if (pScissor)
			resultFlag = 0;
	}
	else if (cPaper)
	{
		if (pRock)
			resultFlag = 0;
		else if (pPaper)
			resultFlag = -1;
		else if (pScissor)
			resultFlag = 1;
	}
	else 
	{
		if (pRock)
			resultFlag = 1;
		else if (pPaper)
			resultFlag = 0;
		else if (pScissor)
			resultFlag = -1;
	}

	let resultText = "";

	if (resultFlag === -1)
		return ("Draw");
	else if (resultFlag == 1) 
		return ("You won!!");
	else 
		return ("You lost!!");
      }
      
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));