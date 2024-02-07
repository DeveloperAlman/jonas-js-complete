'use strict';
// Selecting modal for DOM with document.querySelecore(".classname")
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
let btnShowModal = document.querySelectorAll(".show-modal");

// looping all btn elements (3 buttons)
// for every btn eventListener it needs to be with [i] due to the loop
for (let i = 0; i < btnShowModal.length; i++) {
    // event for every [i] index btn, for all 3 buttons each
    btnShowModal[i].addEventListener("click", function () {
        // for removing classes, need to write classList. remove("class");
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
};

const closeModal = function () {
    // for adding classes, need to write classList. add("class");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Keyboard events
// Keydown is press, hit any key, for this example Escape 
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
})