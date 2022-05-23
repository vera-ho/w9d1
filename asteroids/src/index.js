const Asteroid = require("./asteroid.js");
const MovingObject = require("./moving_object.js");
const Game = require("./game.js");
const GameView= require('./game_view.js')

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function() {
    const canvasEl = document.getElementById("canvas");
    const ctx = canvasEl.getContext("2d");

    canvasEl.width = 400;
    canvasEl.height = 400;

    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 400, 400);

    // a.draw(ctx);
    // debugger;
    const game = new Game();
    // debugger;
    const game_view = new GameView(game,ctx);
    // console.log(game);
    // game.draw(ctx);
    // game.moveObjects();
    game_view.start();
    // ctx.stroke();
})

// const a = new Asteroid({
//     pos: [100, 100], 
//     vel: [10, 10]
// })