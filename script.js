

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
