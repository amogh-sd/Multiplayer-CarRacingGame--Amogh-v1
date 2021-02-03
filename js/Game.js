class Game {
  constructor() {
    this.exit = createButton("Reset")

    this.tumtum = createElement("h2")
    var x = 1.8
  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100, 200, 20, 60);
    car2 = createSprite(300, 200, 20, 60);
    // car3 = createSprite(500, 200);
    // car4 = createSprite(700, 200);
    cars = [car1, car2];
  }

  play() {
    form.hide();

    // this.tumtum2 = createElement("h1")
    // this.tumtum2.position(displayWidth / 2, -1200)
    // this.tumtum2("FINISH")
    // this.exit.position(500, 50)

    // this.exit.mousePressed(() => {
    //   this.exit.hide()
    //   playerCount = 0;
    //   gameState = 0;
    //   player.index = playerCount;
    //   player.updateCount(playerCount);
    //   player.update();

    //   this.sumat = createElement('h3')
    //   this.sumat.html("You may close this tab now")
    //   this.sumat.position(displayWidth / 2, displayHeight / 2)


    // })

    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      //var display_position = 100;

      //index of the array
      var index = 0;

      //x and y position of the cars
      // var x = 0;
      var x = distanceX;
      var y;

      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //position the cars a little away from each other in x direction
        // x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;

        x = displayWidth / 2 - allPlayers[plr].distanceX;
        cars[index - 1].x = x;
        cars[index - 1].y = y;

        if (index === player.index) {
          cars[index - 1].shapeColor = "blue";

          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index - 1].y
        }

      }

    }

    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 10
      player.update();
    }

    if (keyIsDown(DOWN_ARROW) && player.index !== null) {
      player.distance -= 10
      player.update();
    }

    if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
      player.distanceX -= 10
      player.update();
    }

    if (keyIsDown(LEFT_ARROW) && player.index !== null) {
      player.distanceX += 10
      player.update();
    }
    if (cars.distance > 1200) {

      this.tumtum.html("Player 1 wins")
      this.tumtum.position(displayWidth / 2, 40)
    }



    drawSprites();
  }
}