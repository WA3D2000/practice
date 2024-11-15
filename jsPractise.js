function playRound() {
    let numBoxes = Math.floor(Math.random() * 5) + 3;  
    let treasureBox = Math.floor(Math.random() * numBoxes) + 1; 

    console.log(`Guess the treasure box out of ${numBoxes}. You have 3 attempts.`);

    for (let attempt = 1; attempt <= 3; attempt++) {
        let guess = prompt(`Attempt ${attempt}: Enter your guess (1-${numBoxes}):`);

        // Ensure the guess is a valid number
        guess = parseInt(guess);

        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
            attempt--; 
            continue;
        }

        if (guess === treasureBox) {
            console.log("Winner, winner, chicken dinner!! You found the treasure!");
            return true;
        }

        console.log(guess < treasureBox ? "Too low!" : "Too high!");
    }

    console.log(`You ran out of attempts. The treasure box was ${treasureBox}.`);
    return false;
}

function main() {
    let totalScore = 0;
    console.log("Welcome to the Treasure Box Guessing Game!");

    while (true) {
        let playerInput = prompt("Do you want to play? (yes/no):").toLowerCase();

        if (playerInput === "yes") {
            totalScore += playRound() ? 1 : -1;
            console.log(`Your score is ${totalScore}`);

        } 
        else if (playerInput === "no") {
            console.log("Thanks for playing!");
            break;
        } 
        else {
            console.log("Please enter 'yes' or 'no'.");
        }
    }
}

main();
