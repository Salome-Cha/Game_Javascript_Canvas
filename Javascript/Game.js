class Game {
    constructor() {
        this.player = {},
        // this.obstacles = [];  // Only if create obstacles later on.
        this.score = 0,
        this.availableBackgrounds = 
        ['morgan-freeman',
        'barack-obama', 
        'scarlett-johansson', 
        'penelope-cruz',
        'steven-spielberg',
        'pedro-almodovar',
        'mike-jagger',
        'meryl-streep',
        'javier-bardem',
        'emma-watson',
        'cristiano-ronaldo',
        'alexandria-ocasio-cortes',
        'rihanna', 
        'al-pacino',
        'marcelo-rebelo-de-sousa',  
        'dalai-lama']
        this.randomBackground =''
    }


    getRandomBackground() {   
        this.randomBackground = this.availableBackgrounds[Math.floor(Math.random()* this.availableBackgrounds.length)]
        this.expectedInput = this.randomBackground.replaceAll("-", " ");
    }
    
}




