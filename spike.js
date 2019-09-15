





let spikeOn1 = {
    posx:180,
    posy:50,
}

let spikeUnder1 = 
{
    posx:spikeOn1.posx,
    posy:spikeOn1.posy+450,
}

let spikeOn2 = {
    posx:330,
    posy:80,
}

let spikeUnder2 = {
    posx:spikeOn2.posx,
    posy:spikeOn2.posy+450,
}

let spikeOn3 = {
    posx:480,
    posy:50,
}

let spikeUnder3 = {
    posx:spikeOn3.posx,
    posy:spikeOn3.posy+450,
}


let textspike = new PIXI.Texture.from("spike.png");
let spikebelow1 = new PIXI.Sprite(textspike);
let spikeabove1 = new PIXI.Sprite(textspike);

let spikebelow2 = new PIXI.Sprite(textspike);
let spikeabove2 = new PIXI.Sprite(textspike);

let spikebelow3 = new PIXI.Sprite(textspike);
let spikeabove3 = new PIXI.Sprite(textspike);

spikeabove1.rotation=3.15;

spikeabove2.rotation=3.15;

spikeabove3.rotation=3.15;

//spikebelow.position.set()

spikeabove1.position.set(spikeOn1.posx,spikeOn1.posy);
spikebelow1.position.set(spikeUnder1.posx,spikeUnder1.posy);

spikeabove2.position.set(spikeOn2.posx,spikeOn2.posy);
spikebelow2.position.set(spikeUnder2.posx,spikeUnder2.posy);

spikeabove3.position.set(spikeOn3.posx,spikeOn3.posy);
spikebelow3.position.set(spikeUnder3.posx,spikeUnder3.posy);



spikeabove1.anchor.set(0.5);

spikebelow1.anchor.set(0.5);

spikeabove2.anchor.set(0.5);

spikebelow2.anchor.set(0.5);

spikeabove3.anchor.set(0.5);

spikebelow3.anchor.set(0.5);

spikebelow1.position.y=spikeabove1.position.y+450;
spikebelow2.position.y=spikeabove2.position.y+450;
spikebelow3.position.y=spikeabove3.position.y+450;


spike.addChild(spikeabove1);
spike.addChild(spikebelow1);
spike.addChild(spikeabove2);
spike.addChild(spikebelow2);
spike.addChild(spikeabove3);
spike.addChild(spikebelow3);

function Update()
{   
   if(IsPlay)
   {
    spikeOn1.posx-=3;
    spikeUnder1.posx-=3;

    spikeabove1.position.x = spikeOn1.posx;
    spikebelow1.position.x =spikeUnder1.posx;


    spikeOn2.posx-=3;
    spikeUnder2.posx-=3;

    spikeabove2.position.x = spikeOn2.posx;
    spikebelow2.position.x =spikeUnder2.posx;

    spikeOn3.posx-=3;
    spikeUnder3.posx-=3;

    spikeabove3.position.x = spikeOn3.posx;
    spikebelow3.position.x =spikeUnder3.posx;


// spikebelow1.position.y=spikeOn1.posy+450;
// spikebelow2.position.y=spikeOn2.posy+450;
// spikebelow3.position.y=spikeOn3.posy+450;

    //let random = Math.floor(Math.random() * (100 - 30)) + 30;
    
    if(spikeOn1.posx+36<0)
    {
        spikeOn1.posx = spikeOn3.posx+150;
        spikeUnder1.posx = spikeOn1.posx ;

        spikeOn1.posy = 50;
        spikeUnder1.posy = spikeOn1.posy+450 ;

    }
    else if(spikeOn2.posx+36<0)
    {
        spikeOn2.posx = spikeOn1.posx+150;
        spikeUnder2.posx = spikeOn2.posx;

        spikeOn2.posy = 90;
        spikeUnder2.posy = spikeOn2.posy+450 ;

    }
    else if(spikeOn3.posx+36<0)
    {
       
        spikeOn3.posx = spikeOn2.posx+150;
        spikeUnder3.posx = spikeOn3.posx;

        spikeOn3.posy = 40;
        spikeUnder3.posy = spikeOn3.posy+450 ;



    
    }
   }

}
