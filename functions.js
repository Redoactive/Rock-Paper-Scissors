let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    return Math.trunc(Math.random() * 3);
    
}
// 0 is rock, 1 is paper, 2 is scissors.
function getHumanChoice(){
    let choice;
    choice = prompt("Choose: rock (r), paper (p), scissors (s).");
    return choice.toLowerCase();
}
function playRound(computer = getComputerChoice(), human = getHumanChoice()){
    switch (human) {
        case "r":
            if (computer == 0){
                console.log("It's a tie! Both choose rock.");
            }
            else if(computer == 1){
                console.log("You lost! You choose rock, computer choose paper, paper beats rock.");
                computerScore++;
            }
            else{
                console.log("You won! You choose rock, computer choose scissors, rock beats scissors.");
                humanScore++;
            }
            break;
        case "p":
            if (computer == 0){
                console.log("You won! You choose paper, computer choose rock, paper covers rock.");
                humanScore++;
            }
            else if(computer == 1){
                console.log("It's a tie! Both choose paper.");
            }
            else{
                console.log("You lost! You choose paper, computer choose scissors, scissors cuts paper.");
                computerScore++;
            }
            break;
        case "s":
            if (computer == 0){
                console.log("You lost! You choose scissors, computer choose rock, rock beats scissors.");
                computerScore++;
            }
            else if(computer == 1){
                console.log("You won! You choose scissors, computer choose paper, scissors cut paper.");
                humanScore++;
            }
            else{
                console.log("It's a tie! Both choose scissors.");
            }
            break;
        default:
            console.log("Bad input");
            break;
    }
}
function playGame(){
    for (let i = 0; i < 5; i++){
        playRound();
        console.log("Current Score:\nYou: " + humanScore + " Computer: " + computerScore);
    }
    if (humanScore > computerScore){
        console.log("You win this game!");
    }
    else if (humanScore < computerScore){
        console.log("You lost to the computer!");
    }
    else{
        console.log("It's a tie!");
    }
}