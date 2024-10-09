let randomNumber = Math.floor(Math.random() * 10) +1;
let Attempts = 0;

function checkGuess(){
    let userGuess = parseInt(document.getElementById(`guessinput`).value);
    let message = document.getElementById(`message`);
    Attempts++;

    if( userGuess === randomNumber){
        message.textContent = `Bravo! You successfully guessed the number ${randomNumber} in ${Attempts} attempts!    `;
        message.style.color = "#460f42";
    } else if (userGuess > randomNumber){
        message.textContent = `Oops, that’s higher than the number! Try again.`;
        message.style.color = "red";
    }else if (userGuess < randomNumber){
        message.textContent = `That’s beneath the number! Give it another shot.`;
        message.style.color = "red";
    }
    document.getElementById('Attempts').textContent =`Attempts: ${Attempts}`;
}

function restartgame(){
randomNumber = Math.floor(Math.random() * 10) +1;
Attempts = 0;
document.getElementById(`guessinput`).value = "";
document.getElementById(`message`).textContent = "";
document.getElementById('Attempts').textContent =`Attempts: 0`;
}
const guessinput = document.getElementById(`guessinput`);
 
