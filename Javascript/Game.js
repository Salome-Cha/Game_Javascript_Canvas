class Game {
    constructor() {
        this.player = {},
        // this.obstacles = [];  // Only if create obstacles later on.
        this.score = 0,
        this.availableBackgrounds = ['morgan-freeman','barack-obama', 'scarlett-johansson', 'rihanna', 'marcelo-rebelo-de-sousa', 'aung-san', 'serge-gainsbourg', 'dalai-lama']
        this.randomBackground = ''
    }


    getRandomBackground() {
        for (let i=0; i< this.availableBackgrounds.length; i++) {
        this.randomBackground= this.availableBackgrounds[Math.floor(Math.random(i))]
    }
    }
}