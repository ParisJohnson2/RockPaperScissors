var userScore = 0;
var computerScore = 0;
var roundNumber = 1;
var numbersRounds = 3;
const userScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('computerScore');
const scoreBored_div = document.querySelector('.scoreBoard');
const result_p = document.querySelector('.result > p');
const roundNumber_div = document.getElementById('roundNumber');
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const switch_div = document.querySelector('.switch');
const numberr_div = document.querySelector('.numbersRounds');
const sideNote_div = document.getElementById('sideNote');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    roundNumber++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    roundNumber_div.innerHTML = roundNumber;
    numberr_div.innerHTML = numbersRounds;
    result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You Win!";

    if (userScore === 2) {
        result_p.innerHTML = 'Game Over, you win! <button onclick = "endGame()">Click here to play again</button>'
    } else if (userScore === 1 && numbersRounds === 1) {
        result_p.innerHTML = 'Game Over, you win! <button onclick = "endGame()">Click here to play again</button>'
    }
}

function lose(userChoice, computerChoice) {
    computerScore++;
    roundNumber++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    roundNumber_div.innerHTML = roundNumber;
    numberr_div.innerHTML = numbersRounds;
    result_p.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ". You Lose!";

    if (computerScore === 2) {
        result_p.innerHTML = 'Game Over, you lose! <button onclick = "endGame()">Click here to play again</button>'
    } else if (computerScore === 1 && numbersRounds === 1) {
        result_p.innerHTML = 'Game Over, you lose! <button onclick = "endGame()">Click here to play again</button>'
    }
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + ". Its a Draw!";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice , computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice , computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice , computerChoice);
        break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    });

    paper_div.addEventListener('click', function () {
        game("p");
    });

    scissors_div.addEventListener('click', function () {
        game("s");
    });
}

main();

function changeGameMode() {
    switch_div.addEventListener('click', function(){
        numberr_div.innerHTML = "1";
        numbersRounds = 1;
    })
}

changeGameMode();

function endGame() {
    userScore = 0;
    computerScore = 0;
    roundNumber = 1;
    numbersRounds = 3;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    roundNumber_div.innerHTML = roundNumber;
    numbersRounds.innerHTML = numbersRounds;
    result_p.innerHTML = '';
}