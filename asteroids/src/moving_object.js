const Util = require("./util.js");

function MovingObject(obj) {
  this.pos = obj.pos;
  this.vel = obj.vel;
  this.radius = obj.radius;
  this.color = obj.color;
  this.game = obj.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);

  ctx.strokeStyle = "3D3C3A";
  ctx.fillStyle = this.color;
  ctx.lineWidth = 1;

  ctx.fill();
  ctx.stroke();
}

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function(otherObj) {
  // collision if otherobj.pos - this.pos < (otherObj.radius + this.radius)
  console.log(this.game.asteroids);
  // debugger
  const distance = Math.abs(this.radius + otherObj.radius);
  const x_diff = Math.abs(this.pos[0] - otherObj.pos[0]);
  const y_diff = Math.abs(this.pos[1] - otherObj.pos[1]);
  const pos_diff = Math.sqrt((x_diff ** 2) + (y_diff ** 2));

  if(pos_diff > distance) {
    return false;
  } else {
    return true;
  }
}

module.exports = MovingObject;