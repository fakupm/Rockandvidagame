var 



s_bird,
s_bg,
s_fg,
s_pipeNorth,
s_pipeSouth,
s_text,
s_score,
s_splash,
s_buttons,
s_numberS,
s_numberB;


function Sprite(img, x, y, width, height) {
	this.img = img;
	this.x = x*2;
	this.y = y*2;
	this.width = width*2;
	this.height = height*2;

};

Sprite.prototype.draw = function(ctx, x, y) {
	ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
		x, y, this.width, this.height);

};


function initSprites(img) {

	s_bird = [
		new Sprite(img, 156, 117, 28, 15),
		new Sprite(img, 156, 117, 28, 15),
		new Sprite(img, 156, 117, 28, 15)
	];
	
	nube = new Sprite(img,   0, 0, 138, 114);
	s_bg = new Sprite(img,   0, 0, 138, 114);
	s_bg.color = "#70C5CF"; // save background color
	s_fg = new Sprite(img, 0, 0, 0,  0);
	
	s_pipeNorth = new Sprite(img, 251, 0, 26, 200);
	s_pipeSouth = new Sprite(img, 277, 12.5, 26, 200);
	
	s_text = {
		FlappyBird: new Sprite(img, 59, 114, 96, 22),
		GameOver:   new Sprite(img, 61, 136, 70, 19),
		logo:  	    new Sprite(img, 138, 0, 112,  56),
		GetReady:   new Sprite(img, 138, 0, 112,  56)
	}
	s_buttons = {
		Rate:  new Sprite(img,  79, 177, 40, 14),
		Menu:  new Sprite(img, 119, 177, 40, 14),
		Share: new Sprite(img, 159, 177, 40, 14),
		Score: new Sprite(img,  79, 191, 40, 14),
		Ok:    new Sprite(img, 119, 191, 40, 14),
		Start: new Sprite(img, 159, 191, 40, 14)
	}

	s_score  = new Sprite(img, 138,  56, 113, 58);
	s_splash = new Sprite(img,   0, 114,  59, 49);

	s_numberS = new Sprite(img, 0, 177, 6,  7);
	s_numberB = new Sprite(img, 0, 190, 10.3, 20);


	s_numberS.draw = s_numberB.draw = function(ctx, x, y, num, center, offset) {
		
		num = num.toString();


		var step = this.width + 2;
		
		if (center) {
			x = center - (num.length*step-2)/2;

		}
		if (offset) {
			x += step*(offset - num.length);

		}

		for (var i = 0, len = num.length; i < len; i++) {

			var n = parseInt(num[i]);

			ctx.drawImage(img, step*n, this.y, this.width, this.height,
				x, y, this.width, this.height)
			
			x += step;

		}

	}
}