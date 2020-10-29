class Player {
    constructor(){
      this.x = 0;
      this.y = 230;
      this.width = 30;
      this.height = 30;
      // this.img = './Images/player.jpg';
      this.img = './Images/pink-blue-heart.gif'
    }
    
    drawPlayer(){
      const playerImg = new Image();
      playerImg.src = this.img;   
      playerImg.addEventListener('load', (event) => {
        ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);
    });
    }

    resetPlayer(){
      playerImg.src = this.img;        
      playerImg.addEventListener('load', (event) => {
        ctx.drawImage(playerImg, 0, 230, this.width, this.height);
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
        if (this.x < 850){
          this.x += 10;
        }
        break;

        case 40:
        if (this.y < 430) {
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

