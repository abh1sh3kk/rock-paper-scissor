function computerPlay() {
  let rps = Math.ceil(Math.random() * 3);

  if (rps === 1) return "rock";
  if (rps === 2) return "paper";
  if (rps === 3) return "scissor";
}

function playRound(playerSelection, computerSelection) {
  let resultFlag = -1;

  let cRock, cPaper, cScissor;
  let pRock, pPaper, pScissor;

  computerSelection === "rock"
    ? (cRock = 1)
    : computerSelection === "paper"
    ? (cPaper = 1)
    : computerSelection === "scissor"
    ? (cScissor = 1)
    : 0;

  playerSelection === "rock"
    ? (pRock = 1)
    : playerSelection === "paper"
    ? (pPaper = 1)
    : playerSelection === "scissor"
    ? (pScissor = 1)
    : 0;

  if (cRock) {
    if (pRock) resultFlag = -1;
    else if (pPaper) resultFlag = 1;
    else if (pScissor) resultFlag = 0;
    else resultFlag = null;
} else if (cPaper) {
	if (pRock) resultFlag = 0;
	else if (pPaper) resultFlag = -1;
	else if (pScissor) resultFlag = 1;
	else resultFlag = null;
  } else {
    if (pRock) resultFlag = 1;
    else if (pPaper) resultFlag = 0;
    else if (pScissor) resultFlag = -1;
    else resultFlag = null;
  }

  if (resultFlag === -1) return "Draw";
  else if (resultFlag == 1) return "You won!!";
  else if(resultFlag == 0) return "You lost!!";
  else return "Invalid Choice";
}

let playerSelectionRaw = prompt("Choose one among rock, paper and scissor.");
let computerSelection = computerPlay();
let playerSelection = playerSelectionRaw.toLowerCase();

console.log(playRound(playerSelection, computerSelection));
