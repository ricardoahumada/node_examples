function Bitmap(w, h) {
	this.width = w;
	this.height = h;
	this.header = "P6\n" + w + " " + h + "\n255\n";
	this.buffer = new Buffer(w*h*3+this.header.length);
	this.buffer.write(this.header, 0, this.header.length, "ascii");
}
Bitmap.prototype = {
	putPixel: function(x, y, color) {
		var pos = this.header.length + (y*this.width*3) + x*3;
		this.buffer.write(color, pos, 3, "hex");
	},
	fill: function(color) {
		this.buffer.fill(255, this.header.length);
	},
	render: function() {
		process.stdout.write(this.buffer);
	}
};

var bitmap = new Bitmap(10, 10);
bitmap.fill("ffffff");
bitmap.putPixel(0, 0, "000000");
bitmap.render();