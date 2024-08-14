function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice;
    
    while (true) {    
        humanChoice = prompt("Please type 'rock', 'paper', or 'scissors' as your choice");
        
        if (
            (humanChoice === "rock") ||
            (humanChoice === "paper") ||
            (humanChoice === "scissors")
        ) {
            break;
        } else if (
            (humanChoice === "") ||
            (humanChoice === null)
        ) {
            console.log("Input cannot be empty. Please try again");
        } else {
            console.log("Invalid choice. Please try again");
        }
    }
    
    return humanChoice;
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    for (i = 1; i < 6; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        
        humanChoice = humanChoice.toLowerCase();

        console.log(`Round ${i}`);
        console.log(`This is computer's selection: ${computerChoice}`);
        console.log(`This is player's selection: ${humanChoice}`);

        if (humanChoice === computerChoice) {
            console.log("Draw! You both selected the same thing");
            console.log(`Player score: ${humanScore} vs. Computer score: ${computerScore}`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You won! What you selected beat the computer's choice");
            humanScore += 1;
            console.log(`Player score: ${humanScore} vs. Computer score: ${computerScore}`);
        } else {
            console.log("Yow lose! What the computer selected beat your choice");
            computerScore += 1;
            console.log(`Player score: ${humanScore} vs. Computer score: ${computerScore}`);
        }
    }

    console.log("Game Over");

    if (humanScore === computerScore) {
        console.log("No winner. You both scored the same");
    } else if (humanScore > computerScore) {
        console.log(`The winner is: Human! With the final score of ${humanScore} vs. ${computerScore}`);
    } else {
        console.log(`The winner is: Computer! With the final score of ${computerScore} vs. ${humanScore}`);
    }
}

playGame();