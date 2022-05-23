
const Asteroid = require("./asteroid.js");

const DIMX = 400;
const DIMY = 400;
const NUM_ASTEROIDS = 500;

function Game() {
    this.asteroids = [];
    for(let i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(this.addAsteroids());
    }
    // return this.asteroids;
}

Game.prototype.addAsteroids = function() {
    const a1 = new Asteroid({
        pos: this.randomPosition(),
        vel: [10, 10]
    });
    return a1;
}

Game.prototype.randomPosition = function() {
    let pos = [];
    pos.push(Math.floor(Math.random() * DIMX));
    pos.push(Math.floor(Math.random() * DIMY));
    return pos;
}

Game.prototype.draw = function(context) {
    context.clearRect;
    context.fillStyle = "grey";
    context.fillRect(0, 0, 400, 400);
    for(let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(context);
    }
}

Game.prototype.moveObjects = function() {
    for(let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
    }
}

module.exports = Game;