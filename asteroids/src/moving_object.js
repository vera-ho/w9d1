function MovingObject(obj) {
  this.pos = obj['pos'];
  this.vel = obj['vel'];
  this.radius = obj['radius'];
  this.color = obj['color'];
}

MovingObject.prototype.draw = function(context) {
  context.beginPath();
  context.arc(200, 200, this.radius, 0, 2* Math.PI);
  context.strokeStyle = this.color;
  context.lineWidth = 2;
  context.fillStyle = "red";
  context.fill();
  context.stroke();
}

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
}



module.exports = MovingObject;