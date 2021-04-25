var playerX = 0;
var playerY = 0;

var targetX;
var targetY;

var bulletX;
var bulletY;

var originX;
var originY;

var bc = 200;
var oc = 0;

function setup()
{
	createCanvas(1900,980);
}

function draw()
{
	background(20);

	movePlayer();

	createPlayer();

	boundaries();

	shoot();
}

function createPlayer()
{
	fill(230);
	square(playerX,playerY,50);
}

function movePlayer()
{
	if(keyIsDown(65))
	{
		playerX -=7.5
	}
	if(keyIsDown(68))
	{
		playerX +=7.5
	}
	if(keyIsDown(87))
	{
		playerY -=7.5
	}
	if(keyIsDown(83))
	{
		playerY +=7.5
	}
}

function mousePressed() 
{
	targetX = mouseX - 25;
	targetY = mouseY - 25;

	originX = playerX;
	originY = playerY;

	bulletX = originX;
	bulletY = originY;
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

function boundaries()
{
	if(playerX > 1850)
	{
		playerX -=8
	}
	if(playerX < 0)
	{
		playerX +=8
	}
	if(playerY > 930)
	{
		playerY -=8
	}
	if(playerY < 0)
	{
		playerY +=8
	}

	fill(oc,oc,bc);
	textSize(45);
	text('Exit',1820,485);

	if(playerY >= 440 && playerY <= 455 && playerX>=1830 && playerX <= 1850)
	{
		win();
	}
}

function shoot()
{
	fill(235);
	circle(bulletX + 25, bulletY + 25, 20);
	if(bulletX < 1900 || bulletX > 0)
	{
		bulletX += (targetX - originX)/100;
	}

	if(bulletY < 980 || bulletY > 0)
	{
		bulletY += (targetY - originY)/100;
	}
}