// Secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// Score calc
let score = 20;
// Click button
document.querySelector('.check').addEventListener('click', function () {
    console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);
    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
        // When player wins
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        // When guess is too high
    }
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score = score - 1; // = score--
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
        // When guess is too low
    }
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});
