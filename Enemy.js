function Enemy(x, y, width, height, color, speed, captured) {
	this.x = x; 
	this.y = y; 
	this,width = width;
	this.height = height;
	this.color = color;
	
	//The speed of Enemy when falling
	this.speed = speed;
	
	//Tells if Enemy has been captured (bool)
	this.captured = captured;
}

Enemy.prototype.fall = function() {
	this.y += this.speed;
}

Enemy.prototype.draw = function() {
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
}