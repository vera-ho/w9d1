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

  ctx.strokeStyle = "black";
  ctx.fillStyle = this.color;
  ctx.lineWidth = 1;

  ctx.fill();
  ctx.stroke();
}

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  // debugger
  this.pos = this.game.wrap(this.pos);
}

module.exports = MovingObject;