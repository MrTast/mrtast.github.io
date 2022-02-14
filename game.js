class Block
{
    
    constructor(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    render()
    {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }
}

class Player
{
    constructor(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = 0.0;
    }

    render()
    {
        fill(0, 255, 255);
        rect(this.x, this.y, this.width, this.height);
    }

    update()
    {
        this.x = mouseX - this.width/2;
        this.x = constrain(this.x, 0, canvaswidth - this.width);
    }
}

class Ball
{
    constructor(x, y, width)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.velX = 0.0;
        this.velY = -3.0;
    }

    render()
    {
        fill(0, 255, 255);
        circle(this.x, this.y, this.width);
    }

    update()
    {
       this.x += this.velX;
       this.y += this.velY;

       if((this.x - this.width / 2 )<= 0)
       {
           this.velX *= -1;
       }
       if((this.x + this.width / 2) >= canvaswidth)
       {
           this.velX *= -1;
       }
       
    }
}

function AABB(ball, block)
{
    if(ball.x < block.x + block.width
    && ball.x > block.x
    && ball.y - (ball.width / 2) < block.y + block.height
    && ball.y + (ball.width / 2)> block.y)
    {
        return true;
    }
    return false;
}
function AABBplayer(ball, player)
{
    if(ball.x - (ball.width / 2) < player.x + player.width
    && ball.x + (ball.width / 2) > player.x
    && ball.y - (ball.width / 2) < player.y + player.height
    && ball.y + (ball.width / 2) > player.y)
    {
        diff = Math.abs(ball.x - player.x);
        return diff;
    }
    return false;
}





