let usr_name;
let outcome;
let playerScore;
let cpuScore;
game_init();

function game_init() {
  alert("let's play rock paper scissors foo");

  usr_name = prompt("what's your name esse?");
  let victory_points = parseInt(prompt(`okay, ${usr_name} how many\nwins do you wanna play to?`));
  alert(`alright ${usr_name}, it's you\nvs CPU, first to ${victory_points} wins\nwins the game.`);

  gameEngine(victory_points);
}

function gameEngine(victory_points) {
  playerScore = 0;
  cpuScore = 0;
  let no_victor = true
  while (no_victor) {
    outcome = playRound(cpuMove(),playerMove())
    score(outcome);
    if (cpuScore === victory_points||playerScore === victory_points) {
    	no_victor = false;
    }
  }
  gameOver(playerScore,cpuScore);
}


function cpuMove() {
	let moveS = ['rock','paper','scissors'];
	let value = Math.floor(Math.random()*3);
	return moveS[value];
}

function playerMove() {
	let move = prompt("type 'rock'/'r','paper'/'p' or 'scissors'/'s' \n to play your move");
	return pMoveAssess(move);
}

function pMoveAssess(move) {
	if (move === 'rock'||'r') {
		move = 'rock';
		return move;
	} else if (move === 'paper'||'p') {
		move = 'paper';
		return move;
	} else if (move === 'scissors'||'s') {
		move = 'scissors';
		return move;
	} else {
		alert(`${move} is not a valid option\nplease try again...`);
		playerMove();
	}
}

function playRound(cpu,player) {
  if (cpu === player){
  	result = 'tie';
  } else if (cpu === 'rock' && player === 'scissors'
  	  ||cpu === 'paper' && player === 'rock'
  	  ||cpu === 'scissors' && player === 'paper') {
  	  result = 'cpu wins.';
  } else if (player === 'rock' && cpu === 'scissors'
  	  ||player === 'paper' && cpu === 'rock'
  	  ||player === 'scissors' && cpu === 'paper') {
  	  result = `${usr_name} wins.`;
  alert(`you chose ${player}, the cpu chose ${cpu}`)
  alert(result);
  return result;
  }
}

function score(outcome) {
  if (outcome === `${usr_name} wins.`) {
    playerScore += 1;
  } else if (outcome === 'cpu wins.') {
  	cpuScore += 1;
  } 
  alert(`${usr_name} score: ${playerScore}\ncpu score: ${cpuScore}`)
}

function gameOver(playerScore,cpuScore) {
  if (playerScore > cpuScore){
	alert(`VICTORY FOR ${usr_name}`);
  } else {
    alert("CPU WINS.\nYOU LOSE...");
  }

  let reset = confirm('play again?');
  if (reset) {
  	game_init();
  } else {
  	alert(`until next time ${usr_name}...`)
  }
}