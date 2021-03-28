function setup()
{
	createCanvas(1900,980)
}

var sX = 0;
var sY = 0;

var mousex;
var mousey;

var bc = 200;
var oc = 0;

var e1x = 950;
var e1y = 490;
var e1r = Math.floor(Math.random()*(235));
var e1g = Math.floor(Math.random()*(235));
var e1b = Math.floor(Math.random()*(235));
var e1sx = Math.floor(Math.random()*(10)) - Math.floor(Math.random()*(10));
var e1sy = Math.floor(Math.random()*(10)) - Math.floor(Math.random()*(10));

var e2x = 950;
var e2y = 490;
var e2r = Math.floor(Math.random()*(235));
var e2g = Math.floor(Math.random()*(235));
var e2b = Math.floor(Math.random()*(235));
var e2sx = Math.floor(Math.random()*(10)) - Math.floor(Math.random()*(10));
var e2sy = Math.floor(Math.random()*(10)) - Math.floor(Math.random()*(10));


var e3x = 950;
var e3y = 490;
var e3r = Math.floor(Math.random()*(235));
var e3g = Math.floor(Math.random()*(235));
var e3b = Math.floor(Math.random()*(235));
var e3sx = Math.floor(Math.random()*(10)) - Math.floor(Math.random()*(10));
var e3sy = Math.floor(Math.random()*(10)) - Math.floor(Math.random()*(10));


function draw()
{
	background(20);

	//Player
	fill(230);
	square(sX,sY,50);

	if(keyIsDown(65))
	{
		sX -=7.5
	}
	if(keyIsDown(68))
	{
		sX +=7.5
	}
	if(keyIsDown(87))
	{
		sY -=7.5
	}
	if(keyIsDown(83))
	{
		sY +=7.5
	}

	if(sX > 1850)
	{
		sX -=8
	}
	if(sX < 0)
	{
		sX +=8
	}
	if(sY > 930)
	{
		sY -=8
	}
	if(sY < 0)
	{
		sY +=8
	}

	if(sY >= 440 && sY <= 455 && sX>=1830 && sX <= 1850)
	{
		win();
	}

	//Enemies
	fill(e1r,e1g,e1b);
	circle(e1x,e1y,75);
	fill(e2r,e2g,e2b);
	circle(e2x,e2y, 75);
	fill(e3r,e3g,e3b);
	circle(e3x,e3y, 75);

	if(e1x < 1860 && e1x > 40)
	{
		e1x += e1sx;
	}
	else if(e1x >= 1860)
	{
		e1x = 41;
	}
	else if (e1x <= 40)
	{
		e1x = 1859;
	}
	if(e1y < 940 && e1y > 40)
	{
		e1y += e1sy;
	}
	if(e1y < 940 && e1y > 40)
	{
		e1y += e1sy;
	}
	else if(e1y >= 940)
	{
		e1y = 41;
	}
	else if (e1y <= 40)
	{
		e1y = 939;
	}

	if(e2x < 1860 && e2x > 40)
	{
		e2x += e2sx;
	}
	else if(e2x >= 1860)
	{
		e2x = 41;
	}
	else if (e2x <= 40)
	{
		e2x = 1859;
	}
	if(e2y < 940 && e2y > 40)
	{
		e2y += e2sy;
	}
	if(e2y < 940 && e2y > 40)
	{
		e2y += e2sy;
	}
	else if(e2y >= 940)
	{
		e2y = 41;
	}
	else if (e2y <= 40)
	{
		e2y = 939;
	}

	if(e3x < 1860 && e3x > 40)
	{
		e3x += e3sx;
	}
	else if(e3x >= 1860)
	{
		e3x = 41;
	}
	else if (e3x <= 40)
	{
		e3x = 1859;
	}
	if(e3y < 940 && e3y > 40)
	{
		e3y += e3sy;
	}
	if(e3y < 940 && e3y > 40)
	{
		e3y += e3sy;
	}
	else if(e3y >= 940)
	{
		e3y = 41;
	}
	else if (e3y <= 40)
	{
		e3y = 939;
	}
	fill(0,200,0);
	ellipse(mousex, mousey, 30, 50);

	fill(oc,oc,bc);
	textSize(45);
	text('Exit',1820,485);
}
function mousePressed() 
    {
		mousex = mouseX;
		mousey = mouseY;
    }

function win()
{
	noLoop();
	fill(255);
	rect(0,0,2000,1000);
	console.log("win");
	background(220);
	textSize(80);
	fill(0);
	text('You Win!',900,490);
	bc = 220;
	oc = 220;
	e1r = 255;
	e1b = 255;
	e1g = 255;
	e2r = 255;
	e2b = 255;
	e2g = 255;
	e3r = 255;
	e3b = 255;
	e3g = 255;
	e1x = 0;
	e1y = 0;
	e2x = 0;
	e2y = 0;
	e3x = 0;
	e3y = 0;
}