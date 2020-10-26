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
    // currentGame.player.drawPlayer();

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
    currentGame.currentPlayer.movePlayer(whereToGo);
}

// This function will update my canva continuously thanks to the requestAnimationFrame function.
function updateCanvas() {
 
    currentGame.player.drawPlayer();
    
    
    requestAnimationFrame(updateCanvas);
}


















/* Probably useless because we will do this part in html css
ctx.font = '40px Roboto';
ctx.fillStyle = "white"
ctx.fillText('GUESS WHO?', 1000, 60, 180);
*/

/*

function draw (y) {
    ctx.fillRect (860, y, 20, 20);
    ctx.fillStyle = "white";
    y+=3;

    setTimeout (() =>{
        draw(y)}, 80);
}

draw(-4)


function clearCanvas() {
  ctx.clearRect(0, 0, 700, 450); // 700 and 450 are canvas width and height
}

function drawCanvas(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function updateCanvas() {

  requestAnimationFrame(updateCanvas);
}

updateCanvas()

*/