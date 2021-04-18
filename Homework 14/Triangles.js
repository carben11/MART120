class triangles
{
	constructor(fillR, fillG, fillB, lX, lY, tX, tY, rX, rY)
	{
		this.fillR = fillR;
		this.fillG = fillG;
		this.fillB = fillB;
		this.lX = lX;
		this.lY = lY;
		this.tX = tX;
		this.tY = tY;
		this.rX = rX;
		this.rY = rY;
	}
	display()
	{
		/*
		fillR = Math.floor(Math.random() * 235);
		fillG = Math.floor(Math.random() * 235);
		fillB = Math.floor(Math.random() * 235);
		lX = Math.floor(Math.random() * 1800 - 20);
		lY = Math.floor(Math.random() * 880 - 20);
		tX = lX + 50;
		tY = lY + 100;
		rX = lX + 100;
		rY = lY;
		*/

		fill(this.fillR, this.fillG, this.fillB);
		triangle(this.lX, this.lY, this.tX, this.tY, this.rX, this.rY);
	}
}
