const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
}

//Play game 

function play(e) {
    restart.style.display = 'inline-block'
    const playerChoice= e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice, playerChoice);
    console.log( playerChoice, computerChoice, winner);
    
}

// Get computer choice
function getComputerChoice() {
    const rand = Math.random()*100;
    if (rand <= 33) {
        return 'rock'
    } else if (rand <= 66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

//Get game winner
function getWinner(p,c) {
    if (p === c) {
        return 'draw'
    } 
    
    else if (p === 'rock') {
            if (c === 'paper') {
            return 'computer';
        } 
            else {
            return 'player';
        }
    }
    
    else if (p === 'paper') {
            if (c === 'scissors') {
            return 'computer';
        } 
            else {
            return 'player';
        }
    }
    
    else if (p === 'scissors') {
            if (c === 'rock') {
            return 'computer';
        } 
            else {
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice, playerChoice) {
    
    if (winner === 'player') {
        //Inc player score
        scoreboard.player ++;
        //Show modal result
        result.innerHTML = `
        <h1 class="text-win">You Win <br> With ${playerChoice.charAt(0).toUpperCase()+playerChoice.slice(1)}</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong class="text-lose">${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>`
    }
    
    else if (winner === 'computer') {
        //Inc player score
        scoreboard.computer ++;
        //Show modal result
        result.innerHTML = `
        <h1 class="text-lose">You Lose <br> With ${playerChoice.charAt(0).toUpperCase()+playerChoice.slice(1)}</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong class="text-win">${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>`
    }    else {
        result.innerHTML = `
        <h1 >It's A Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Also Chose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}</strong></p>`
    }
    //Show score
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
   modal.style.display = 'block';
}

//restart Game
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
    restart.style.display = 'none';
}

//Clear Modal
function clearModal(e) {
    if (e.target === modal) {
    modal.style.display = 'none';
    }
}

// Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);