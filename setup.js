canvaswidth = 480;
canvasheight = 360;


function setup()
{
    createCanvas(canvaswidth,canvasheight);
    blockarray = [];
    for(var i = 0; i < 4; i++)
    {
        for(var j = 0; j < 12; j++)
        {
            block = new Block(j * 40, i * 20, 40, 20);
            blockarray.push(block);
        }
    }

    player = new Player((canvaswidth / 2) - 30, canvasheight - 30, 60, 10);
    ball = new Ball(100, 150, 15);
}

function draw()
{
    background(0);
    for(var i = 0; i < blockarray.length; i++)
    {
        blockarray[i].render();
        if(AABB(ball, blockarray[i]))
        {
            blockarray.splice(i, 1);
            ball.velY *= -1;
        }
    }
    diff = AABBplayer(ball, player);
    if(diff)
    {
        ball.velY *= -1;
        ball.velX -= diff * 0.1;
    }
    
    

    player.render();
    player.update();
    ball.render();
    ball.update();
   
}


