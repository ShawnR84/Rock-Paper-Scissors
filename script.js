

function getComputerChoice() {
    let number = Math.floor(Math.random() * 30 ) + 1;
    let answer
    if(number <= 10) {
        answer = "Rock";
    } else if(number > 10 && number < 20) {
        answer = "Paper";
    } else if(number >= 20) {
        answer = "Scissors";
    }

    return answer;
}

function getHumanChoice() {
    let answer
  let choice = prompt('Rock, Paper, Scissors');

    if(choice.toLowerCase() == 'rock') {
        answer = 'Rock';
    } else if(choice.toLowerCase() == 'paper') {
        answer = 'Paper';
    } else if (choice.toLowerCase() == 'scissors') {
        answer = 'Scissors';
    } else {
        answer = 'Invalid input';
    }

    return answer;

}




let humanChoice = getHumanChoice().toLowerCase();
let computerChoice = getComputerChoice().toLowerCase();


function playGame(humanChoice, computerChoice, playRound){
     let humanScore = 0;
        let computerScore = 0;
     for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice().toLowerCase();
        if(humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore + 1;
            console.log('You Win! Rock beats Scissors')
        }else if(humanChoice == 'paper' && computerChoice === 'rock') {
            humanScore + 1;
            console.log('You Win! Paper beats rock.')
        }else if( humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore + 1;
            console.log('You Win! Scissors beat paper.')
        }else if(computerChoice === 'rock' && humanChoice === 'scissors') {
            computerScore + 1
            console.log('You lose! Rock beats scissors.')
        }else if(computerChoice === 'paper' && humanChoice === 'rock' ){
            computerScore + 1;
            console.log('You lose! Paper beats rock.')
        }else if(computerChoice === 'scissors' && humanChoice === 'paper'){
            computerScore + 1;
            console.log('You lose! Scissors beat paper.')
        }else if(computerChoice === humanChoice) {
            console.log(`Tie! ${humanChoice} and ${computerChoice}`)
    }else{
        console.log('Invalid Input')
    }
    }
    if(humanScore > computerScore) {
        console.log('You win!');
    } else if(humanScore < computerScore) {
        console.log('You lose!');
    }else{
        console.log(`It's a tie!`)
    }
    


 
}


playGame(humanChoice, computerChoice)