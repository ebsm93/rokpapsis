//SET GLOBAL VARIABLES
let playerName;
let victoryPoints;
let match;
let outcome;
let playerScore = 0;
let cpuScore = 0;

//SET HTML selector variables
const form = document.getElementById('form');
const resultBoard = document.querySelector("#resultBoard");
const resultingMoves = document.querySelector('#resultingMoves');
const result = document.querySelector("#result");
const final = document.querySelector("#final");
const setMatchButton = document.querySelector('#setMatch');
const startButton = document.querySelector('#start');
const moveButtons = document.querySelector('.moves');
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const nextRoundButton = document.querySelector('#nextRound');
const resetButton = document.querySelector("#reset");

//SET BUTTON EVENT LISTENERS

// on your marks ...
setMatchButton.addEventListener('click', () => {
  playerName = document.querySelector('#textBox').value;
  victoryPoints = parseInt(document.querySelector('#textBox2').value);
  score = document.querySelector('#score');
  score.innerHTML = `<u>score</u> <br>${playerName}: ${playerScore}<br>CPU: ${cpuScore}`;
  match = document.querySelector('#matchDisplay');
  match.innerHTML = `${playerName} vs CPU - First to ${victoryPoints} wins`;
  form.style.display = "none";
  startButton.style.display = 'inline-block';
  startButton.focus();
});

// get set ...
startButton.addEventListener('click', gameInit)

//go!
scissorsButton.addEventListener('click', function(){play('scissors')});
paperButton.addEventListener('click', function(){play('paper')});
rockButton.addEventListener('click', function(){play('rock')});
resetButton.addEventListener('click', resetGame);

document.querySelector('#textBox').focus();

//SET FUNCTIONS
function gameInit() {
  startButton.style.display = 'none';  
  moveButtons.style.display = "inline-block";
  resetButton.style.display = "inline-block";
  rockButton.focus();
}

function play(move) {
  let cpu = cpuMove();
  let player = move;

  if (cpu === player){
    outcome = 'tie';
  } else if (cpu === 'rock' && player === 'scissors'
     ||cpu === 'paper' && player === 'rock'
     ||cpu === 'scissors' && player === 'paper') {
     outcome = 'CPU wins.';
  } else if (player === 'rock' && cpu === 'scissors'
     ||player === 'paper' && cpu === 'rock'
     ||player === 'scissors' && cpu === 'paper') {
     outcome = `${playerName} wins.`;
  }
  resultingMoves.innerHTML = `${playerName} chose ${move},<br> the CPU chose ${cpu}.`
  UpdateScore(outcome);
  nextRoundButton.addEventListener('click', nextRound);
}

function cpuMove() {
  let moveS = ['rock','paper','scissors'];
  let value = Math.floor(Math.random()*3);
  return moveS[value];
}

function UpdateScore() {
  if (outcome === `${playerName} wins.`) {
    playerScore += 1;
  } else if (outcome === 'CPU wins.') {
    cpuScore += 1;
  } 
  score.innerHTML = `<u>score</u> <br>${playerName}: ${playerScore}<br>CPU: ${cpuScore}`;
  moveButtons.style.display = "none";
  result.innerHTML = outcome;
  resultBoard.style.display = 'inline-block';
  nextRoundButton.focus();
  checkVictory();
  
}

function nextRound() {
  resultBoard.style.display = "none";
  moveButtons.style.display = "inline-block";
  rockButton.focus();
}

function checkVictory() {
  if (cpuScore === victoryPoints||playerScore === victoryPoints) {
    gameOver();
  }
}

function gameOver() {
  if (playerScore > cpuScore){
    final.style.color = 'blue';
    final.innerHTML = `${playerName} IS VICTORIOUS!`;
  } else {
    final.innerHTML = `THE CPU HAS DEFEATED YOU ...`;
    final.style.color = 'red';
  }
  final.style.display = 'inline-block';
  nextRoundButton.style.display = 'none';
  resetButton.style = "font-size: x-large";
  resetButton.style.display = "inline-block";
  resetButton.focus();
}

function resetGame() {
  nextRoundButton.style.display = 'inline-block';
  moveButtons.style.display = "none";
  resetButton.style = "font-size: xx-small";
  resetButton.style.display = "none";
  resultBoard.style.display = "none";
  final.style.display = 'none';
  resultBoard.style.display = 'none';
  final.style.display = 'none';
  score.innerHTML = '';
  match.innerHTML = '';
  form.style.display = 'inline-block';
  playerScore = 0;
  cpuScore = 0;
  document.querySelector('#textBox').value = '';
  document.querySelector('#textBox2').value = '';
  document.querySelector('#textBox').focus();
}
