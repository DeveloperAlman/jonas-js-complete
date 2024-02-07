'use strict';
// Selecting Elements
const scoreFirstElement = document.getElementById("score--0");
const scoreSecondElement = document.getElementById("score--1");
const scoreCurrentFirstELement = document.getElementById("current--0");
const scoreCurrentSecondELement = document.getElementById("current--1");
const diceElement = document.querySelector(".dice");
const playerFirstElement = document.querySelector(".player--0");
const playerSecondElement = document.querySelector(".player--1");
const nameFirstElement = document.querySelector("#name--0");
const nameSecondElement = document.querySelector("#name--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let dice = 0;
let currentScore = 0;
let activePlayer = 0;

let scores = [0, 0]; // totals scores that accumulating

// Making score text to 0 as an deafult score. element.textContent= "text";
scoreFirstElement.textContent = "0";
scoreSecondElement.textContent = "0";

// Adding class to a dice to make it display none. classList.add("class");
diceElement.classList.add("hidden");

const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerFirstElement.classList.toggle("player--active");
    playerSecondElement.classList.toggle("player--active");
}

const gameOver = function () {
    btnRoll.classList.add("game--over");
    btnHold.classList.add("game--over");
    diceElement.classList.add("game--over");
    document.querySelector(`#name--${activePlayer}`).textContent = `WINNER!`;
}

const resetGame = function () {
    btnRoll.classList.remove("game--over");
    btnHold.classList.remove("game--over");
    diceElement.classList.remove("game--over");
    nameFirstElement.textContent = "Player 1";
    nameSecondElement.textContent = "Player 2";

    scoreFirstElement.textContent = 0;
    scoreSecondElement.textContent = 0;
    scoreCurrentFirstELement.textContent = 0;
    scoreCurrentSecondELement.textContent = 0;
    playerFirstElement.classList.remove("player--winner");
    playerSecondElement.classList.remove("player--winner");
    playerFirstElement.classList.add("player--active");
    playerSecondElement.classList.remove("player--active");

    dice = 0;
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0]; // totals scores that accumulating
}

// Rolling dice dunctionality
btnRoll.addEventListener("click", function () {
    // 1. Generate a random dice roll
    dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`You rolled ${dice}`);

    // 2. Display the dice
    diceElement.classList.remove("hidden");
    // Adding dice img according to generated random dice roll
    diceElement.src = `dice-${dice}.png`;

    // 3. Check for roll for 1: if true then switch to other player
    if (dice !== 1) {
        // Add dice to the current score
        currentScore += dice; // currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // switch to the next player
        switchPlayer();
    }
});

btnHold.addEventListener("click", function () {
    // 1. Add current score to current player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check scorer is at least 100
    if (scores[activePlayer] >= 100) {
        // 3. Finish the game if player has 100
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        gameOver();
    }
    switchPlayer();
});

btnNew.addEventListener("click", resetGame);