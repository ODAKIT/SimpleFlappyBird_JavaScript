


let IsPlay = false;
let IsDeath = false;
let gamePoint = 0;
const app = new PIXI.Application({
    height:512,
    width:288,
});


const numbersheet = [];


const TextNumber = new PIXI.Texture.from("number/numbersheet.png");
//lấy số ra từ spritesheet  
for(let i = 0 ; i<10 ; i++)
{
    let x = 0;   //Luôn đặt tại vị trí 0 là vị trí bắt đầu ảnh; //
    numbersheet[i] = new PIXI.Texture(TextNumber,new PIXI.Rectangle(x,i*36,24,36));
}







document.body.appendChild(app.view);

let btRestart = new PIXI.Sprite(new PIXI.Texture.from("restart.png"));

let bg = new PIXI.Container();

let bird = new PIXI.Container();

let spike = new PIXI.Container(); //52x320


// const sound = PIXI.sound.Sound.from('resources/wing.wav');


const bgtexture = new PIXI.Texture.from("bg.png");
const background = new PIXI.Sprite(bgtexture);

bg.addChild(background)
btRestart.scale.set(0.02);
btRestart.position.set(50,50);
btRestart.visible = false;
btRestart.anchor.set(0.5);
btRestart.buttonMode=true;
btRestart.interactive=true;

btRestart.on('pointerdown',()=>{
    location.reload()
});



bird.anchor=0.5;



let curanim = new PIXI.Sprite(frames[0]);
curanim.position.set(mybird.posx,mybird.posy);

curanim.anchor.set(0.5);

bird.addChild(curanim)
const ticker = new PIXI.Ticker();

document.addEventListener('click',Click)

document.addEventListener('click',ClickToPlay)

function ClickToPlay()
{
    if(IsPlay==false && IsDeath==false)
    {
        IsPlay=true
        Click();
    };
}

let Num1Sprite = new PIXI.Sprite(numbersheet[0]);
let Num2Sprite = new PIXI.Sprite(numbersheet[0]);
Num2Sprite.position.x = Num1Sprite.position.x+24;

function UpdatePoint()
{
    let number1 = Math.floor(gamePoint/10%10);
    let number2 = gamePoint%10;

    Num1Sprite.texture = numbersheet[number1];
    Num2Sprite.texture = numbersheet[number2];







    


    
}


app.ticker.add(()=>{
    //console.log(spike.position)
Update();
curanim.texture =  frames[(Math.floor(Date.now()/300)%2)];
Physic();
UpdatePoint();
});




app.stage.addChild(bg);

app.stage.addChild(spike);

app.stage.addChild(btRestart)


app.stage.addChild(bird);


app.stage.addChild(Num1Sprite);
app.stage.addChild(Num2Sprite);










