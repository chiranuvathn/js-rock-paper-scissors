let computerScore = 0;
let humanScore = 0;
let roundNumber = 1;
const totalRounds = 5;

const buttons = document.querySelectorAll('button');
const roundHeader = document.querySelector('#round-container');
const displayInfo = document.querySelector('#box-display');

function generateRandom() {
    const choices = ['rock', 'paper', 'scissors'];
    let randNum = Math.floor(Math.random() * 3);

    return choices[randNum];
}

function roundCounter() {
    let headTwo = document.createElement('h2');

    if (roundNumber === 1) {
        headTwo.textContent = `Round: ${roundNumber}`;
        roundHeader.appendChild(headTwo);
    } else {
        roundHeader.innerHTML = '';
        headTwo.textContent = `Round: ${roundNumber}`;
        roundHeader.appendChild(headTwo);
    }
}

function appendMsg(message) {
    let para = document.createElement('p');
    para.textContent = message;

    displayInfo.appendChild(para);
}

function compareChoice(humanChoice) {
    roundCounter();

    let computerChoice = generateRandom();
    
    appendMsg(`Player: ${humanChoice} vs. Computer: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        appendMsg(`Draw! You both selected the same thing`);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        appendMsg("You won! What you selected beat the computer's choice");
        humanScore += 1;
    } else {
        appendMsg('Yow lose! What the computer selected beat your choice');
        computerScore += 1;
    }

    roundNumber += 1;

    if (roundNumber > totalRounds) {
        appendMsg('Game Over');

        if (humanScore === computerScore) {
            appendMsg('No winner. You both scored the same');
        } else if (humanScore > computerScore) {
            appendMsg(`The winner is: Human! With the final score of ${humanScore} vs. ${computerScore}`);
        } else {
            appendMsg(`The winner is: Computer! With the final score of ${computerScore} vs. ${humanScore}`);
        }

        // Terminate and reset the game once reached fifth round //
        buttons.forEach(button => {
            button.disabled = true;
        });

        playAgain();
    }
}

function playRound() {
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            let btnStrSplit = event.target.id.split("-");
            let humanChoice = btnStrSplit[1];
            compareChoice(humanChoice);
        });
    })
}

function resetGame() {
    roundHeader.innerHTML = '';
    displayInfo.innerHTML = '';

    computerScore = 0;
    humanScore = 0;
    roundNumber = 1;

    buttons.forEach(button => {
        button.disabled = false;
    });
}

function playAgain() {
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Play Again';

    displayInfo.appendChild(resetBtn);

    resetBtn.addEventListener('click', resetGame);
}

playRound();