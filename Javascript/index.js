const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let currentGame;
let currentPlayer;


// I don't want the irght column with the Guess Who bloc to appear before the start of the game.
document.getElementById('right-column').style.display = 'none';
document.getElementById('countdown-box').style.display = 'none';

// The start button initiates a new round of the game.
document.getElementById('start-button').onclick = () => {
    startGame();
}

// The startGame function launches a new round by initiating everything: new game, new player, and update canvas.
function startGame() {
    document.getElementById('right-column').style.display = 'block';
    document.getElementById('countdown-box').style.display = 'block';


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

    // Update the canvas.
    updateCanvas();
}


// Dans la fonction stop game; il faudra remettre le layer noir intermédiaire, qui sert avant le lancement du jeu.



// When a key is pressed, the player knows where to move thanks to the movePlayer function from PLayer class.
document.onkeydown = (e) => {
    let whereToGo = e.keyCode;

    // Here is it currentPlayer or player > doubt?
    currentGame.player.movePlayer(whereToGo);
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
  let input = e.target.previousElementSibling.value;
});


// I need to check the validy of the user's input.
// let rationalizedInput = input.toUpperCase().split("").join(" ")
// Compare this with the valid value (en faisant le liant entre la randomBackground et le nom cible que cela devrait être.)






// Créer le chrono avec setInterval nommer le interval et faire un clear interval quand on est à O.
// On decrease de 1 seconde toutes les 1000 milisecondes.

// on injecte cela dans le dom en commencant par créer un TimeR dans le HTML. Avec un tag pour injecter. 

let timer = document.getElementById("countdown-current-value");

let counter = 10;

let interval = setInterval((countdownd) => {
  if (counter > 0) { 
    counter -- ;
    console.log (counter)
  } 
  else {
    clearInterval(interval)
    console.log("Time's out!")
  }
}, 1000);

timer.innerHTML = countdown;


