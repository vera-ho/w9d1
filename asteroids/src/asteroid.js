const MovingObject = require("./moving_object");
const Util = require("./util.js");

Util.inherits(Asteroid, MovingObject);

function Asteroid(COLOR, RADIUS) {
    MovingObject.call(this, COLOR, RADIUS)
    // if(!COLOR) COLOR = "green";
    // if(!RADIUS) RADIUS = 10;

    // this.color = COLOR;
    // this.radius = RADIUS;
    // this.pos = pos;
    // this.vel = vel;
}

module.exports = Asteroid;