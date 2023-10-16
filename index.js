import {Player} from './PlayerClass.js'
import {Apple} from './AppleClass.js'
import {Bomb} from './BombClass.js'
const canvas=document.getElementById('mycanvas');
const ctx=canvas.getContext('2d');

alert(`WASD control;
Hit red balls to increase points;
If you hit the orange ball, you will lose!
Each increase in score by 1 increases the playing field.
For new game reload page.`)
let x=150;
let y=150;
let xVelocity=0;
let yVelocity=0;
let speed=5;
const player =new Player(x,y,xVelocity,yVelocity,speed);
const apple=new Apple(500,500,canvas,ctx);

let Bombs=[];
let newBomb=new Bomb(Math.random()*apple.canvas.width-10,Math.random()*apple.canvas.height-10,ctx);
Bombs.push(newBomb);
function MainLoop()
{
    ClearCanvas();
    Bombs.forEach(bomb=>{
        bomb.DrawBomb();
        bomb.PlayerCollision(player,canvas);
    })
    apple.DrawApple();
    newBomb.DrawBomb();
    player.UpdateScore(ctx);
    player.CollisionApple(apple,ctx,Bombs);
    player.PlayerMovement();
    player.BorderCollision(canvas);
    player.DrawPlayer(ctx,Bombs);
    
}

function ClearCanvas()
{
    ctx.fillStyle="Black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

document.body.addEventListener('keydown',KeyDown);
function KeyDown(e)
{
    if (e.keyCode===87)
        if (player.yVelocity===1)
            return
        else
        {
            player.yVelocity=-1;
            player.xVelocity=0;
        }

    if (e.keyCode===83)
        if (player.yVelocity===-1)
            return
        else
        {
            player.yVelocity=1;
            player.xVelocity=0;
        }
    if (e.keyCode===65)
    if (player.xVelocity===1)
            return
        else
        {
            player.yVelocity=0;
            player.xVelocity=-1;
        }
    if (e.keyCode===68)
        if (player.xVelocity===-1)
            return
        else
        {
            player.yVelocity=0;
            player.xVelocity=1;
        }
}
setInterval(MainLoop,1000/60);