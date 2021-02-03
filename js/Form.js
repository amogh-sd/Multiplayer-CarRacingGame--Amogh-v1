class Form {

  constructor() {
    this.exit = createButton("Reset")
    // this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide() {
    this.greeting.hide();
    this.button.hide();
    // this.input.hide();
    this.exit.hide();
  }

  display() {
    var title = createElement('h2')
    title.html("Car Racing Game- AMOGH v1.1");
    title.position(displayWidth / 2 - 50, 0);


    // this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
    this.button.position(displayWidth / 2 + 30, displayHeight / 2);

    this.button.mousePressed(() => {
      // this.input.hide();
      this.button.hide();
      playerCount += 1;
      player.index = playerCount;
      player.updateCount(playerCount);
      player.update();

      player.name = "PLAYER"

      if (playerCount === 1) {
        player.name = "Player 1"
        playerNumber = 1
      }

      if (playerCount === 2) {
        player.name = "Player 2"
        playerNumber = 2
      }


      this.greeting.html("Hello " + player.name + ", your opponent will be called Player 2")
      this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
      this.exit.position(displayWidth - 200, 30)

      // if (car1.distance > 1200) {

      //   this.tumtum.html("Player 1 wins")
      //   this.tumtum.position(displayWidth / 2, 40)
      // }

      this.tumtum.html("FINISH")

      this.tumtum.position(displayWidth / 2, displayHeight - 1200)


    });

    this.exit.mousePressed(() => {
      this.exit.hide()
      playerCount = 0;
      player.index = playerCount;
      player.updateCount(playerCount);
      player.update();
      gameState = 0
    })

  }
}
