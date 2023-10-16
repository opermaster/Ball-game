class Apple
{
    constructor(x,y,canvas,ctx)
    {
        this.x=x;
        this.y=y;
        this.canvas=canvas;
        this.ctx=ctx;

    }
    DrawApple(){
        this.ctx.fillStyle='red';
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,50,0,Math.PI*2,false);
        this.ctx.fill();
    }
    
}




export {Apple}