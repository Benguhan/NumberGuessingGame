const number = document.getElementById("number");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");
const hearts = document.querySelectorAll('.fa-heart');
const result = document.getElementById("result");


const min = 1;
const max = 10;

let answer = Math.floor(Math.random() * max) + min;


console.log(answer);

let attempts = 3;


guessButton.onclick = function () {
    const guess = parseInt(number.value);

    if (!isNaN(guess)) {
        if (guess == answer) {
            result.textContent = `Congratulations! The number was ${answer}`;
            result.style.color = "green";
            disableGame(); //guessButton.disabled = true; 
        }
        else {
            attempts--;
            if (attempts > 0) {
                result.textContent = `Wrong number. You have ${attempts} attempts left`;
                result.style.color = "red";
            }
            else {
                result.textContent = `You lost. The number was ${answer}`;
                result.style.color = "red";
                disableGame();
            }
            updateHearts();
        }
    }
    else {
        result.textContent = "Please enter a valid number between 1 and 10";
        result.style.color = "red";
    }

    number.value = "";
}

restartButton.onclick = function () {
    answer = Math.floor(Math.random() * max) + min;
    attempts = 3;



    // Reset hearts
    hearts.forEach(heart => {
        heart.classList.remove('fa-regular');
        heart.classList.add('fa-solid');
    });

    result.textContent = '';

    // Enable input and buttons
    number.disabled = false;
    guessButton.disabled = false;

    // Clear the input field
    number.value = '';

}





function disableGame() {
    guessButton.disabled = true;
    number.disabled = true;
}

function updateHearts() {
    hearts[attempts].classList.remove('fa-solid');
    hearts[attempts].classList.add('fa-regular');
}