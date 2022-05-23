const Asteroid = require("./asteroid.js");
const Util = require("./util.js");

const DIMX = 400;
const DIMY = 400;
const NUM_ASTEROIDS = 50;

function Game() {
    this.asteroids = [];
    for(let i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(this.addAsteroids());
    }

}

Game.prototype.addAsteroids = function() {
    const a1 = new Asteroid({
        pos: this.randomPosition(),
        vel: Util.randomVec(Math.floor(Math.random() * 10)),
        game: this
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
    context.fillRect(0, 0, DIMX, DIMY);
    for(let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(context);
    }
}

Game.prototype.moveObjects = function() {
    for(let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
    }
}

Game.prototype.wrap = function(pos) {
    /*  if asteroid moves to top of screen, y = 0, set y = 400 and keep x the same
        if asteroid moves to bottom of screen, y = 400, set y = 0 and keep x the same
        if asteroid moves to right of screen, x = 400, set x = 0 and keep y the same
        if asteroid moves to left of screen, x = 0, set x = 400 and keep y the same
    */
    if(pos[0] < 0) {
        pos[0] = DIMX;
    }
    if(pos[0] > DIMX){
        pos[0] = 0;
    }
    if(pos[1] < 0) {
        pos[1] = DIMY;
    }
    if(pos[1] > DIMY) {
        pos[1] = 0;
    }

    return pos;
}

module.exports = Game;