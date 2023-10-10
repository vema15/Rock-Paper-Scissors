
let result = [];

let btn_1 = document.getElementById('button-1');
btn_1.addEventListener('click', () => gameFunc());
        function gameFunc() {

            let compChoice = compChoiceFunc();
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
            let winStatus = winDecider(standardUC, compChoice);
            result.unshift(winStatus);
            

            function winDecider(standardUC, compChoice, winStatus) {
                if (standardUC == "rock" && compChoice == "scissors" || standardUC == "paper" && compChoice == "rock" || standardUC == "scissors" && compChoice == "paper") {
                    return winStatus = `You have won!`;
                } else if (compChoice == "rock" && standardUC == "scissors" || compChoice == "paper" && standardUC == "rock" || compChoice == "scissors" && standardUC == "paper") {
                    return winStatus = `You lose, please try again!`;
                } else if (standardUC == compChoice) {
                    return winStatus = `You have tied!`;
                }
            }

            
            document.getElementById("comp_result").innerHTML = compChoice.toUpperCase();
            document.getElementById("player_result").innerHTML = userChoice.toUpperCase();
            document.getElementById("match_result").innerHTML = winStatus.toUpperCase();
    
            
            console.log(result);
       
        }
    
let btn_2 = document.getElementById('button-2');
btn_2.addEventListener('click', ()=> resetFunc());
function resetFunc() {
    location.reload();
}



