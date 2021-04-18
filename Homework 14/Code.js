var sX = 0;
var sY = 0;

var mousex;
var mousey;

var bc = 200;
var oc = 0;

var eXs = [];
var eYs = [];
var eRs = [];
var eGs = [];
var eBs = [];
var eDs = [];
var eSXs = [];
var eSYs = [];

var triangle1;
var triangle2;
var triangle3;

function setup()
{
	createCanvas(1900,980);

	triangle1 = new triangles(175, 25, 50, 500, 500, 525, 550, 550, 500);
	triangle2 = new triangles(30, 200, 110, 450, 450, 475, 400, 500, 450);
	triangle3 = new triangles(30, 200, 110, 550, 450, 575, 400, 600, 450);

	for(var i = 0; i < 10; i++)
    {
        eXs[i] = Math.floor(Math.random() * 1800);
        eYs[i] = Math.floor(Math.random() * 880);
        eDs[i] = Math.floor(Math.random() * 5);
		eRs[i] = Math.floor(Math.random() * 235);
		eGs[i] = Math.floor(Math.random() * 235);
		eBs[i] = Math.floor(Math.random() * 235);
		eSXs[i] = Math.floor(Math.random() * 20) - Math.floor(Math.random() * 20);
		eSYs[i] = Math.floor(Math.random() * 20) - Math.floor(Math.random() * 20);
    }
}

function draw()
{
	background(20);

	movePlayer();

	createPlayer();

	createEnemies();

	moveEnemies();

	boundaries();

	drawCircle();

	triangle1.display();
	triangle2.display();
	triangle3.display();
}

function createPlayer()
{
	fill(230);
	square(sX,sY,50);
}

function movePlayer()
{
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
}

function createEnemies()
{
	for(var i = 0; i < eXs.length; i++)
    {
		fill(eRs[i],eGs[i],eBs[i]);
		circle(eXs[i],eYs[i],eDs[i] * 20);
    }
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
	mousex = 5000;
}

function drawCircle()
{
	//noLoop();
	console.log("draw");
	fill(235);
	ellipse(mousex, mousey, 30, 50);
}

function moveEnemies()
{
	for(var i = 0; i < eXs.length; i++)
	{
		if(eXs[i] < 1860 && eXs[i] > 40)
		{
			eXs[i] += eSXs[i];
		}
		else if(eXs[i] >= 1860)
		{
			eXs[i] = 41;
		}
		else if (eXs[i] <= 40)
		{
			eXs[i] = 1859;
		}
		if(eYs[i] < 940 && eYs[i] > 40)
		{
			eYs[i] += eSYs[i];
		}
		else if(eYs[i] >= 940)
		{
			eYs[i] = 41;
		}
		else if (eYs[i] <= 40)
		{
			eYs[i] = 939;
		}
	}
}

function boundaries()
{
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

	fill(oc,oc,bc);
	textSize(45);
	text('Exit',1820,485);

	if(sY >= 440 && sY <= 455 && sX>=1830 && sX <= 1850)
	{
		win();
	}
}