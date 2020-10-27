class Player {
    constructor(){
      this.x = 0;
      this.y = 230;
      this.width = 20;
      this.height = 20;
      this.img = './Images/player.jpg';
    }
    
    drawPlayer(){
      const playerImg = new Image();
      playerImg.src = this.img;   
      ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);
      playerImg.addEventListener('load', (event) => {
        draw(playerImg);
    });
    }


    movePlayer(keyCode){
 
      ctx.clearRect(this.x, this.y, this.width, this.height);

      switch(keyCode){
        case 37:
        if(this.x > 0){
          this.x -= 10;
        }
        break;

        // right
        case 39:
        if (this.x < 860){
          this.x += 10;
        }
        break;

        case 40:
        if (this.y < 440) {
            this.y += 10;
        } 
        break;

        case 38:
            if (this.y >  0) {
                this.y -= 10;
            }
        break;
      }
    }
  }

// Attention chercher pourquoi l'image n'apparait plus.