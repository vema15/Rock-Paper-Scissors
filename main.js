


alert(gameFunc());
function gameFunc() {
    
    let compChoice = compChoiceFunc();
    function compChoiceFunc(compChoice) {
        let numChoice = (Math.floor(Math.random() * 3) + 1);
          if (numChoice == 1) {
            return compChoice = `Rock`;
          } else if (numChoice == 2) {
            return compChoice = `Paper`;
          } else if (numChoice == 3) {
            return compChoice = `Paper`;
          }
    }


    let userChoice = prompt(`Please enter 'Rock', 'Paper', or 'Scissors':`);
    let winStatus = winDecider(userChoice, compChoice);
    return winStatus

    function winDecider(userChoice, compChoice, winStatus) {
        if (userChoice == "Rock" && compChoice == "Scissors" || userChoice == "Paper" && compChoice == "Rock" || userChoice == "Scissors" && compChoice == "Paper") {   
            return winStatus = `You have won!`;                     
        } else if (compChoice == "Rock" && userChoice == "Scissors" || compChoice == "Paper" && userChoice == "Rock" || compChoice == "Scissors" && userChoice == "Paper") {
            return winStatus = `You lose, please try again!`;
        } else if (userChoice == compChoice) {
            return winStatus = `You have tied!`;
        }
    }


}





/*gameFunc();
function gameFunc() {
        const userInput = prompt("Please enter 'Rock', 'Paper' or 'Scissors':");
        innerFunc(userInput);    
        function innerFunc(userInput) {
                let compChoice;
                let numChoice = (Math.floor(Math.random() * 3)+1);
                    if (numChoice === 1) {
                         compChoice = "Rock";
                    } else if (numChoice === 2) {
                         compChoice = "Paper";
                    } else if (numChoice === 3) {
                         compChoice = "Scissors";
                    }

                    winDecider(userInput, compChoice);
                    console.log(winDecider(userInput,compChoice));

                function winDecider(userInput, compChoice) {           
                   let winStatus;
                    if (userInput == "Rock" && compChoice == "Scissors" || userInput == "Paper" && compChoice == "Rock" || userInput == "Scissors" && compChoice == "Paper") {                        
                    } else if (compChoice == "Rock" && userInput == "Scissors" || compChoice == "Paper" && userInput == "Rock" || compChoice == "Scissors" && userInput == "Paper") {
                    } else if (userInput == compChoice) {
                    }
                }
            }            
           



    

        }

*/