const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let currentGame;
let currentPlayer;


// INITIAL STATUS


function initializeGame () {
  document.getElementById('homepage-slide').style.display = 'block';
  document.getElementById('intro-slide').style.display = 'none';
  document.getElementById('full-game-board').style.display = 'none';
  document.getElementById('failure-slide').style.display = 'none';
  document.getElementById('success-slide').style.display = 'none';
  document.getElementById('button-back-homepage').style.display = 'none';   

  document.getElementById('enter-button').onclick = () => {
  introGame();
}

}

initializeGame()



// ENTRY SLIDE

function introGame () {
  document.getElementById('homepage-slide').style.display = 'none';
  document.getElementById('intro-slide').style.display = 'block';
  document.getElementById('full-game-board').style.display = 'none';
  document.getElementById('failure-slide').style.display = 'none';
  document.getElementById('success-slide').style.display = 'none';

  document.getElementById('go-to-game-button').onclick = () => {
    goToGame();
  }
  
}

function goToGame () {
  document.getElementById('full-game-board').style.display = 'block';
  document.getElementById('homepage-slide').style.display = 'none';
  document.getElementById('intro-slide').style.display = 'none';
  document.getElementById('failure-slide').style.display = 'none';
  document.getElementById('success-slide').style.display = 'none';

  document.getElementById('start-button').onclick = () => {
    startGame();
  }
}

// START GAME 

// The startGame function launches a new round by initiating everything: new game, new player, and update canvas.
function startGame() {
  
  document.getElementById('full-game-board').style.display = 'block';



  document.getElementById('start-button').style.display = 'block';
  document.getElementById('homepage-slide').style.display = 'none';
  document.getElementById('intro-slide').style.display = 'none';
  document.getElementById('success-slide').style.display = 'none';
  document.getElementById('failure-slide').style.display = 'none';


// Create the black layer.
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 880, 460)


// Create the Game and Player.
    currentGame = new Game();
    currentPlayer = new Player();
    currentGame.player = currentPlayer;
    currentGame.player.drawPlayer();

// Remove former background and pick a new one.
    currentGame.getRandomBackground()
    
    canvas.classList.remove()
    canvas.classList.add(currentGame.randomBackground)


// Set the timer on.
    decreasingTime (counter) 


// Update the canvas.
    updateCanvas();

// Call input validation with an event listener on submit.
}


// When a key is pressed, the player knows where to move thanks to the movePlayer function from PLayer class.
document.onkeydown = (e) => {
    let whereToGo = e.keyCode;

    // Here is it currentPlayer or player > doubt?
    currentGame.player.movePlayer(whereToGo);
}


// Check the timer!
let timer = document.getElementById("countdown-current-value");

let counter = 35;

function decreasingTime (counter) {
const interval = setInterval(() => {
  counter -- 
    if (counter <= 0) { 
      clearInterval(interval)
      timer.innerHTML = "TIME'S OUT!";
      playerFailure();
    } 
    else {
        if (counter >= 10) {timer.innerHTML = `00:${counter}`}
        else {timer.innerHTML = `00:0${counter}`}
    }
}, 1000);

// Check with Miguel if necessary => to trigger the stopGame function.
  return counter
}


// This function will update my canva continuously thanks to the requestAnimationFrame function.
function updateCanvas() {
    currentGame.player.drawPlayer();
    
    requestAnimationFrame(updateCanvas);
}

// Regarder cela et comprendre. Puis comparer l'input avec ce que je souhaite.
const submit = document.getElementById('submit');

submit.addEventListener('click', e => {
  e.preventDefault; 
  let userInput = document.getElementById("guess").value;
  // console.log("user input", userInput);
  // console.log("expected input", currentGame.expectedInput);

  if (userInput.toLowerCase() === currentGame.expectedInput) {
   playerSuccess()
  } else {
   playerFailure()
  }
});


function playerSuccess () {
  document.getElementById('full-game-board').style.display = 'none';
  document.getElementById('success-slide').style.display = 'block';
  document.getElementById('homepage-slide').style.display = 'none';
  document.getElementById('intro-slide').style.display = 'none';
  document.getElementById('failure-slide').style.display = 'none';
}

function playerFailure () {
  document.getElementById('full-game-board').style.display = 'none';
  document.getElementById('failure-slide').style.display = 'block';
  document.getElementById('intro-slide').style.display = 'none';
  document.getElementById('homepage-slide').style.display = 'none';
  document.getElementById('intro-slide').style.display = 'none';
}