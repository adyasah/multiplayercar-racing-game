var gameState = 0
var playerCount
var database
var form, player, game
var allPlayers
var cars,car1,car2,car3,car4
var car1img,car2img,car3img,car4img,trackimg

function preload(){
    car1img=loadImage("images/car1.png")
    car2img=loadImage("images/car2.png")
    car3img=loadImage("images/car3.png")
    car4img=loadImage("images/car4.png")
    trackimg=loadImage("images/track.jpg")
    
}

function setup() {
    createCanvas(displayWidth-20,displayHeight-30)
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()

}


function draw() {
    
    if (playerCount === 4) {
       game.updateState(1)
    }
    if(gameState===1){
        clear()
        game.play()
    }
    if(gameState===2){
        game.updateState(2)
        game.end()
    }
    
}

