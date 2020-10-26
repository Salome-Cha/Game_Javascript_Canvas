class Player {
    constructor(){
      this.x = 0;
      this.y = 230;
      this.width = 20;
      this.height = 20;
      this.img = '../Images/player.jpg';
    }
    
    drawPlayer(){
      const playerImg = new Image();
      playerImg.src = this.img;
      ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);
    }

    movePlayer(keyCode){
 
      ctx.clearRect(this.x, this.y, this.width, this.height);

      switch(keyCode){
        case 37:
       
        if(this.x > 0){
          this.x -= 10;
        }
        break;

        case 39:
        if (this.x < 880){
          this.x += 10;
        }
        break;

        case 40:
        if (this.y >0) {
            this.y -= 10;
        }

        case 38:
            if (this.y < 460) {
                this.y -= 10;
            }
      }
    }
  }

