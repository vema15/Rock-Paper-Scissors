

loopFunc();
function loopFunc() {
    for (var i = 0; i < 5; i++) { 
        
alert(gameFunc());
function gameFunc() {
    
    let compChoice = compChoiceFunc();
    console.log(compChoice);
    
    function compChoiceFunc(compChoice) {
        let numChoice = (Math.floor(Math.random() * 3) + 1);
          if (numChoice == 1) {
            return compChoice = `rock`;
          } else if (numChoice == 2) {
            return compChoice = `paper`;
          } else if (numChoice == 3) {
            return compChoice = `scissors`;
          } 
    }


    let userChoice = prompt(`Please enter 'Rock', 'Paper', or 'Scissors':`);
    let standardUC = userChoice.toLowerCase();
    console.log(standardUC);
    let winStatus = winDecider(standardUC, compChoice);
    console.log(winStatus);
    return winStatus

    function winDecider(standardUC, compChoice, winStatus) {
        if (standardUC == "rock" && compChoice == "scissors" || standardUC == "paper" && compChoice == "rock" || standardUC == "scissors" && compChoice == "paper") {   
            return winStatus = `You have won!`;                     
        } else if (compChoice == "rock" && standardUC == "scissors" || compChoice == "paper" && standardUC == "rock" || compChoice == "scissors" && standardUC == "paper") {
            return winStatus = `You lose, please try again!`;
        } else if (standardUC == compChoice) {
            return winStatus = `You have tied!`;
        }
    }


}
}

}




