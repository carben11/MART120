var playerX = 0;
var playerY = 0;

class Bullet
{
	constructor(bulletX, bulletY, originX, originY, targetX, targetY, distance, shot)
	{
		this.bulletX = bulletX
		this.bulletY = bulletY
		this.originX = originX
		this.originY = originY
		this.targetX = targetX
		this.targetY = targetY
		this.distance = distance
		this.shot = shot
	}
	draw()
	{
		if(this.shot == 0)
		{
			this.targetX = mouseX;
			this.targetY = mouseY;

			this.originX = playerX + 25;
			this.originY = playerY + 25;

			this.bulletX = this.originX;
			this.bulletY = this.originY;

			this.distance = Math.sqrt((this.targetX - this.originX)*(this.targetX - this.originX) + (this.targetY - this.originY)*(this.targetY - this.originY));
		}		
	}
	update()
	{		
			this.shot = 0;

			this.bulletX += (this.targetX - this.originX)/this.distance*7.5;
			this.bulletY += (this.targetY - this.originY)/this.distance*7.5;
			
			fill(0, 0, 255)
			circle(this.bulletX, this.bulletY, 10);

			if(this.bulletX < 1900 && this.bulletX > -40 && this.bulletY < 980 && this.bulletY > -40)
			{
				this.shot = 1;
			}
	}
}

	var bullets = []

class Enemy
{
	constructor(enemyX, enemyY, seekX, seekY, apart, alive)
	{
		this.enemyX = enemyX
		this.enemyY = enemyY
		this.seekX = seekX
		this.seekY = seekY
		this.apart = apart
		this.alive = alive
	}
	draw()
	{
		if(this.alive == 0)
		{
			this.enemyX = (Math.floor(Math.random() * 2) * 1910);
			this.enemyY = (Math.floor(Math.random() * 2) * 960);
		}
	}
	update()
	{
		this.alive = 1
		this.seekX = playerX + 25;
		this.seekY = playerY + 25;
		this.apart = Math.sqrt((this.seekX - this.enemyX)*(this.seekX - this.enemyX) + (this.seekY - this.enemyY)*(this.seekY - this.enemyY));

		fill(235, 0, 0)
		circle(this.enemyX, this.enemyY, 40);
		
		this.enemyX += (this.seekX - this.enemyX)/this.apart;
		this.enemyY += (this.seekY - this.enemyY)/this.apart;
	}
}

	var enemies = []

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
	bullets.forEach((bullet)=>
	{
		bullet.update();
	})
	
	enemies.forEach((enemy)=>
	{
		enemy.update();

		if(enemy.apart <= 40)
		{
			lose();
		}
	})
}

function createPlayer()
{
	fill(230);
	square(playerX, playerY, 50);
}

function movePlayer()
{
	if(keyIsDown(65))
	{
		playerX -=5
	}
	if(keyIsDown(68))
	{
		playerX +=5
	}
	if(keyIsDown(87))
	{
		playerY -=5
	}
	if(keyIsDown(83))
	{
		playerY +=5
	}
}

function mousePressed() 
{
	bullets.push(new Bullet(0, 0, 0, 0, 0, 0, 0));
	bullets.forEach((bullet)=>
	{
		bullet.draw();
	})
}

this.addEventListener('keypress', event => {
	if (event.keyCode == 13) 
	{
		console.log("Enter")
		enemies.push(new Enemy(0, 0, 0, 0, 0, 0, 0, 0));
		console.log('first',enemies)
		enemies.forEach((enemy)=>
		{
			enemy.draw();
		}) 
	}
})

function lose()
{
	noLoop();
	fill(255);
	rect(0,0,2000,1000);
	console.log("lose");
	background(220);
	textSize(80);
	fill(0);
	text('You Lose!',900,490);
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
}