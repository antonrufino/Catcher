function Bucket(x, y, width, height, color) {
	this.x = x; 
	this.y = y; 
	this.width = width;
	this.height = height;
	this.color = color;
};

Bucket.prototype.moveTo = function(x, y) {
	this.x = x;
	this.y = y;
	
	if (this.x < 0) {
		this.x = 0;
	}
	else if (this.x > (canvas.width - this.width)) {
		this.x = canvas.width - this.width;
	}
}

Bucket.prototype.draw = function() {
	console.log(this);
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
}