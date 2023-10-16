export class Bomb
{
    constructor(x,y,ctx){
        this.x=x;
        this.y=y;
        this.ctx=ctx;
        this.DrawBomb();
    };
    DrawBomb(){
        this.ctx.fillStyle='orange';
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,50,0,Math.PI*2,false);
        this.ctx.fill();
    }
    PlayerCollision(player,canvas){
        if (player.x<this.x+50 && player.y<this.y+50 && player.x>this.x-50 && player.y>this.y-50)
        {
            player.speed=0;
            this.ctx.font = "90px Comic Sans MS";
            this.ctx.fillStyle = "white";
            this.ctx.fillText('You lost!!', canvas.width/2-100, canvas.height/2); 
        }
    }
    
}