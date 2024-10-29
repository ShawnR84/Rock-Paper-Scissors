

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

