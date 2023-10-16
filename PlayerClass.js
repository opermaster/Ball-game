import {Bomb} from './BombClass.js'
class Player
{   
    score=0;
    constructor(x,y,xVelocity,yVelocity,speed)
    {
        this.x=x;
        this.y=y;
        this.xVelocity=xVelocity;
        this.yVelocity=yVelocity;
        this.speed=speed;
    }
    DrawPlayer(ctx) {
        ctx.fillStyle='green';
        ctx.beginPath();
        ctx.arc(this.x,this.y,50,0,Math.PI*2,false);
        ctx.fill();
    }
    PlayerMovement(){
        this.x=this.x+this.xVelocity*this.speed;
        this.y=this.y+this.yVelocity*this.speed;
    }
    BorderCollision(canvas){
        if(this.y<25) 
            this.y=canvas.height-25;
        if(this.y>canvas.height-25) 
        this.y=25;
        if(this.x<25) 
        this.x=canvas.height-25;
        if(this.x>canvas.width-25) 
        this.x=25;
    }
    CollisionApple(apple,ctx,arr){
        if (apple.x<this.x+50 && apple.y<this.y+50 && apple.x>this.x-50 && apple.y>this.y-50)
        {
            apple.x=Math.floor(Math.random()*apple.canvas.width-10);
            apple.y=Math.floor(Math.random()*apple.canvas.height-10);
            this.score++;
            apple.canvas.width+=50;
            apple.canvas.height+=50;
            this.speed+=1;
            if (this.score%2==1)
            {
                let b=new Bomb(Math.random()*apple.canvas.width-10,Math.random()*apple.canvas.height-10,ctx);
                arr.push(b);
            }
            
        }
        
    }
    UpdateScore(ctx){
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.fillText(this.score, 30, 30); 
    }
}
export {Player};