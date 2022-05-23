const MovingObject = require("./moving_object");
const Util = require("./util.js");

Util.inherits(Asteroid, MovingObject);

function Asteroid(obj) {
    if(!obj.color) obj.color = "blue";
    if(!obj.radius) obj.radius = 10;
    MovingObject.call(this, obj);
}

module.exports = Asteroid;