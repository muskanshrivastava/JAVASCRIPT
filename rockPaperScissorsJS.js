// Score variables
let userScore = 0
let computerScore = 0

// DOM variables
const userScore_SpanId = document.getElementById('userScore');
const computerScore_SpanId = document.getElementById('computerScore');
const scoreBoard_Div = document.querySelector('.scoreBoard')
const message = document.getElementById('result-msg')
const rock_icon = document.getElementById("rock")
const paper_icon = document.getElementById("paper")
const scissors_icon = document.getElementById("scissors")
const userOutcome = document.getElementById("userChoice")
const computerOutcome = document.getElementById("computerChoice")

// GET COMPUTER CHOICE
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

// GAME WIN FUNCTION
function win(user,computer) {
    userScore++;
    userScore_SpanId.innerHTML = userScore;
    userOutcome.innerHTML = user;
    computerOutcome.innerHTML = computer;
    message.innerHTML = "YaYY!! User WON ";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('green-glow');
    }, 1000);
    
}

// GAME LOSE FUNCTION
function lose(user,computer) {
    computerScore++;
    computerScore_SpanId.innerHTML = computerScore;
    userOutcome.innerHTML = user;
    computerOutcome.innerHTML = computer;
    message.innerHTML = "OOPS!! User LOSE ";
    document.getElementById(user).classList.add('red-glow')
    setTimeout(function () {
        document.getElementById(user).classList.remove('red-glow');
    }, 1000);
}

// GAME DRAW FUNCTION
function draw(user, computer) {
    userOutcome.innerHTML = user;
    computerOutcome.innerHTML = computer;
    message.innerHTML = "Is a DRAW !!";
    document.getElementById(user).classList.add('grey-glow')
    setTimeout(function () {
        document.getElementById(user).classList.remove('grey-glow');
    }, 1000);
}

// USER CHOICE FUNCTION
function game(userChoice) {

    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice,computerChoice);
            break;
        
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            lose(userChoice,computerChoice);
            break;
        
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice,computerChoice);
            break;
    
        default:
            break;
    }
    
}

// MAIN FUNCTION
function main() {
    rock_icon.addEventListener('click', function () {
        game('rock');
    })

    paper_icon.addEventListener('click', function () {
        game('paper');
    })

    scissors_icon.addEventListener('click', function () {
        game('scissors');
    })

}

main();