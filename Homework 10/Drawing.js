
var eyeMove;
var lEye = 142.5;
var rEye = 257.5;
var yMove;
var noseY = 280;
var hairY = 25;
var mouthX = 200;
var mouthY = 350;
var mouthMove;
var txtSize = 12;
var txtChange = 2;

function setup()
{
	createCanvas(400,600);

	eyeMove = Math.floor(Math.random()*1)+1;
	yMove = Math.floor(Math.random()*1)+1;
	mouthMove = Math.floor(Math.random()*1)+1;
}

function draw()
{
	background(120);
	fill(50,25,0);
	rect(75,hairY,250,200);
	fill(110,0,0);
	rect(40,420,320,500);
	fill(240, 195, 125);
	ellipse(200,250,250,350);
	ellipse(40,545,80,250);
	ellipse(360,545,80,250);
	triangle(180,noseY,200,230,220,noseY);
	fill(250);
	ellipse(142.5,200,50,40);
	ellipse(257.5,200,50,40);
	fill(210,135,130);
	ellipse(mouthX,mouthY,80,60);
	fill(50,25,0);
	ellipse(lEye,200,15,15);	//eye
	ellipse(rEye,200,15,15);	//eye
	fill(0);
	line(65,450,332.5,450);
	line(77.5,500,322.5,500);
	line(80,550,320,550);
	textSize(txtSize);
	text('Ben Carter',100,600);

	if(lEye >= 155 || lEye <= 130)
	{
		eyeMove *= -1;
	}
	lEye += eyeMove;
	rEye += eyeMove;

	if(noseY >= 300 || noseY <= 260)
	{
		yMove *= -1;
	}
	hairY += yMove;
	noseY += yMove;

	if(mouthX >= 240 || mouthX <= 160)
	{
		mouthMove *= -1;
	}
	mouthX += mouthMove;
	mouthY += mouthMove;

	if(txtSize >=60 || txtSize <=2.4)
	{
		txtChange *= -1;
	}
	txtSize += txtChange;
}

