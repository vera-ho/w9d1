const Asteroid = require("./asteroid.js");
const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function() {
    const canvasEl = document.getElementById("canvas");
    const ctx = canvasEl.getContext("2d");

    canvasEl.width = 400;
    canvasEl.height = 400;

    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 400, 400);


    mo.draw(ctx);
    a1.draw(ctx);
    a2.draw(ctx);
})

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

const a1 = new Asteroid({
    pos: [50, 100], 
    vel: [10, 10], 
    radius: 9,
    color: "purple"
})

const a2 = new Asteroid({
    pos: [350, 70],
    vel: [15, 15]
})

