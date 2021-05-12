class Game {
    constructor(){}

    getState(){
        //read game state from the data base and store it into the variable game state
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })

    }
    updateState(state){
        var gameStateRef=database.ref()
        gameStateRef.update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            player=new Player()
            player.getCount()
            form=new Form()
            form.display()

        }
        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);
        cars=[car1,car2,car3,car4]
        car1.addImage(car1img)
        car2.addImage(car2img)
        car3.addImage(car3img)
        car4.addImage(car4img)
    }
    play(){
        form.hide()
        // textSize(30)
        // text("game start",120,100)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index=0
            var x=175;
            var y;
            // var displayPosition=130
            for(var plr in allPlayers){
                index+=1
                x+=200
                y=displayHeight-allPlayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(plr==="player"+player.index){
                    cars[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }
                else{
                    cars[index-1].shapeColor="black"
                }
                //displayPosition=displayPosition+20
                // textSize(15)
                // text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,displayPosition)
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!=null){
            player.distance+=10
            player.update()
        }
        if(player.distance>3860){
            gameState=2
        }
        drawSprites()
    }
    end(){
        alert("The game has ENDED")
    }
}
