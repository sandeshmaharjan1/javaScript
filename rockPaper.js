const getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const getUserChoice = () => {
    let userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getUserChoice();
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    } 
}

const playGame = () => {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}`);
    const result = determineWinner(userChoice, computerChoice);
    alert(result);
}
playGame();
