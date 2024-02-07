'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const secretNumberDOM = document.querySelector(".number");
console.log(secretNumber);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
    return message;
}

document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // When no input number
    if (!guess) {
        displayMessage("⛔ No number!");

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage("✅ Correct number!");
        document.querySelector("body").style.background = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        secretNumberDOM.textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = guess > secretNumber ? displayMessage("📈Number is too high!") :
                displayMessage("📉 Number is too low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            // When a player lose
            displayMessage("❗ You lose the game!");
            document.querySelector(".score").textContent = 0;
        }

    }
})

const again = document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector(".score").textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector("body").style.background = "#222";
    document.querySelector(".number").style.width = "15rem";
    secretNumberDOM.textContent = "?";
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = "";
    console.log(secretNumber);
})