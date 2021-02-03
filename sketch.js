var canvas, backgroundImage;

var gameState = 0;
var playerNumber = 0
var playerCount;
var allPlayers;
var distance = 0;
var distanceX = 0
var database;

var car1, car2, car3, car4;

var cars


var form, player, game;


function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  if (playerCount === 2) {
    game.update(1);
    text("The game has started!!", displayWidth / 2, 300)
  }
  if (playerCount === 0) {
    game.update(0);

  }
  if (gameState === 1) {
    clear();
    game.play();
  }

}
