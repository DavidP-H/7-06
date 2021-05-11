const number = 15
let guess

document.getElementById('button').addEventListener('click', checker)

function checker () {
  while (guess != number) {
    guess = prompt('Guess an age.')
    if (guess == number) {
      alert('You guessed it right!')
    } else if (guess > number) {
      alert('You guessed too high, do you want to try again?')
    } else if (guess < number) {
      alert('You guessed too low, do you want to try again?')
    } else {
      alert('Invalid answer, please try again.')
    }
   }
}
