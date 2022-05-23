const Asteroid = require("./asteroid.js");
const MovingObject = require("./moving_object.js");
const Game = require("./game.js");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function() {
    const canvasEl = document.getElementById("canvas");
    const ctx = canvasEl.getContext("2d");

    canvasEl.width = 400;
    canvasEl.height = 400;

    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 400, 400);

    a.draw(ctx);

    const game = new Game();
    console.log(game);
    game.draw(ctx);
})

const a = new Asteroid({
    pos: [100, 100], 
    vel: [10, 10]
})