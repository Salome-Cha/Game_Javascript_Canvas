const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let currentGame;
let currentPlayer;
let intervalId;
let countdownVideo = document.getElementById('timer-start');

function keyPressed(e) {  
  let whereToGo = e.keyCode
  currentGame.player.movePlayer(whereToGo);
}

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

  let music = document.getElementById("audio-music");
  music.play();
}

function goToGame () {
  document.getElementById('full-game-board').style.display = 'block';
  document.getElementById('left-column').style.display = 'flex';
  document.getElementById('right-column').style.display = 'flex';
  document.getElementById('homepage-slide').style.display = 'none';
  document.getElementById('intro-slide').style.display = 'none';
  document.getElementById('failure-slide').style.display = 'none';
  document.getElementById('success-slide').style.display = 'none';
  document.getElementById('form').style.visibility = 'hidden';

  document.getElementById('start-button').onclick = () => {
    startGame();
  }
}

// START GAME 

// The startGame function launches a new round by initiating everything: new game, new player, and update canvas.
function startGame() {
  
  document.getElementById('full-game-board').style.display = 'block';
  document.getElementById('countdown-box').style.display = 'block';
  document.getElementById('right-column').style.display = 'flex';
  document.getElementById('start-button').style.visibility = 'hidden';
  document.getElementById('homepage-slide').style.display = 'none';
  document.getElementById('intro-slide').style.display = 'none';
  document.getElementById('success-slide').style.display = 'none';
  document.getElementById('failure-slide').style.display = 'none';
  document.getElementById('pink-arrows').style.display = 'block';
  document.getElementById('form').style.visibility = 'visible';
  document.getElementById("guess").value = '';

//  Launch video countdown:
  countdownVideo.play();

//Add the keys listener:
  document.addEventListener('keydown', keyPressed)


// Create the black layer.
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 880, 460)


// Create the Game and Player.
    currentGame = new Game();
    currentPlayer = new Player();
    currentGame.player = currentPlayer;
    currentGame.player.drawPlayer();
    

// Remove former background and pick a new one.
    canvas.removeAttribute('class');
    currentGame.getRandomBackground()
    canvas.classList.add(currentGame.randomBackground)


// Set the timer on.
    decreasingTime (counter) 


// Update the canvas.
    updateCanvas();
}


let counter = 30;

function decreasingTime (counter) {
  intervalId = setInterval(() => {
    counter -- 
      if (counter <= 0) { 
        clearInterval(intervalId)
        playerFailure();
        countdownVideo.pause();
        countdownVideo.currentTime = 0
        document.removeEventListener('keydown', keyPressed)
        
      }
  }, 1000);

  return counter
}


// This function will update the canva continuously thanks to the requestAnimationFrame function.
function updateCanvas() {
    currentGame.player.drawPlayer();
    interval = requestAnimationFrame(updateCanvas);
}


const submit = document.getElementById('submit');

submit.addEventListener('click', e => {
  e.preventDefault(); 
  let userInput = document.getElementById("guess").value;
  //console.log("user input", userInput);
  //console.log("expected input", currentGame.expectedInput);

  if (userInput.toLowerCase() === currentGame.expectedInput) {
   playerSuccess()
  } else {
   playerFailure()
  }
  document.removeEventListener('keydown', keyPressed)
  countdownVideo.pause();
  countdownVideo.currentTime = 0;
});



function playerSuccess () {
  document.getElementById('full-game-board').style.display = 'none';
  document.getElementById('success-slide').style.display = 'block';
  document.getElementById('failure-slide').style.display = 'none';
  document.getElementById('homepage-slide').style.display = 'none';
  document.getElementById('intro-slide').style.display = 'none';
  document.getElementById('failure-slide').style.display = 'none';


  // Ends the previous game!
  clearInterval(intervalId);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 880, 460);
  currentGame.player.x = 0;
  currentGame.player.y = 230;
 
  document.getElementById('start-again-winner').onclick = () => {
    backToGame();
  }

}

function playerFailure () {
  document.getElementById('full-game-board').style.display = 'none';
  document.getElementById('failure-slide').style.display = 'block';
  document.getElementById('intro-slide').style.display = 'none';
  document.getElementById('homepage-slide').style.display = 'none';
  document.getElementById('intro-slide').style.display = 'none';
  document.getElementById('success-slide').style.display = 'none';

  document.getElementById('start-again-failure').onclick = () => {
    backToGame();
}
   // Ends the previous game!
   clearInterval(intervalId);
   ctx.fillStyle = 'black';
   ctx.fillRect(0, 0, 880, 460);
   currentGame.player.x = 0;
   currentGame.player.y = 230;
}


function backToGame () {
  document.getElementById('full-game-board').style.display = 'block';
  document.getElementById('left-column').style.display = 'flex';
  document.getElementById('right-column').style.display = 'flex';
  document.getElementById('homepage-slide').style.display = 'none';
  document.getElementById('intro-slide').style.display = 'none';
  document.getElementById('failure-slide').style.display = 'none';
  document.getElementById('success-slide').style.display = 'none';
  document.getElementById('form').style.visibility = 'hidden';
  document.getElementById('start-button').style.visibility = 'visible';
  
  document.getElementById('start-button').onclick = () => {
    startGame();
  }
}

