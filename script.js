const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', getPlayerSelection);
paper.addEventListener('click', getPlayerSelection);
scissors.addEventListener('click', getPlayerSelection);

function computerPlay() {
    const computerMoves = ['rock', 'paper', 'scissors']
    const randomComputerMove = Math.floor(Math.random() * computerMoves.length);

    return (randomComputerMove, computerMoves[randomComputerMove]);
}

var computerScore = 0;
var playerScore = 0;
var roundCount = 0;

const roundText = document.getElementById("round");
const resultText = document.getElementById("result");

function game() {
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            resultText.textContent = "GAME OVER. Congratulations man won! Would you like to play again?";
        }
        if (playerScore < computerScore) {
            resultText.textContent = "GAME OVER. You lost. Machines won. Would you like to play again?";
        }

        return resetGame();
    }

    resultText.textContent = "";
    roundCount++;
    roundText.textContent = `Round #${roundCount}`;
    playRound(playerSelection, computerPlay());
}

const newGameButton = document.querySelector('#new-game');
newGameButton.addEventListener('click', () => {
    window.location.reload(false)
});

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    roundCount = 0;
}


const scoreText = document.getElementById("score");
const scoreReasonText = document.getElementById("score-reason")

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();

    if (playerSelection == "rock" && computerSelection === "scissors"
        || playerSelection == "paper" && computerSelection === "rock"
        || playerSelection == "scissors" && computerSelection === "paper") {
        playerScore++;
        scoreText.textContent = `${playerScore} - ${computerScore}`
        scoreReasonText.textContent = `Round win! ${playerSelection} beats ${computerSelection}`;

        if (playerScore >= 5) {
            return game();
        }
        return;
    }

    if (playerSelection == "scissors" && computerSelection === "rock"
        || playerSelection == "rock" && computerSelection === "paper"
        || playerSelection == "paper" && computerSelection === "scissors") {
        computerScore++;
        scoreText.textContent = `${playerScore} - ${computerScore}`
        scoreReasonText.textContent = `Round loss... ${playerSelection} loses to ${computerSelection}`

        if (computerScore >= 5) {
            return game();
        }
        return;
    }

    else {
        scoreText.textContent = `${playerScore} - ${computerScore}`
        return scoreReasonText.textContent = `It's a draw! ${playerSelection} versus ${computerSelection}`
    }


}

function getPlayerSelection(e) {
    playerSelection = e.target.id;
    game();
}