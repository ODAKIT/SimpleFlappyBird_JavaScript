
const frames = []

let mybird = {
    posx:50,
    posy:250,
    vx:0,
    vy:0,
};

let IsPass = false;

for(let i = 1 ;i<=2 ; i++)
{
    const texutre = new PIXI.Texture.from('chim'+i+'.png');
    frames.push(texutre);

}


function Physic()
{
    mybird.posy+=mybird.vy;

    curanim.position.set(mybird.posx,mybird.posy);

    //console.log(Math.floor(mybird.posy),spikeOn.posy+165,"||",mybird.posx,spikeOn.posx-26)
    //(Math.floor(mybird.posy)==spikeOn.posy+165 && (mybird.posx>spikeOn.posx-26 || mybird.posx>spikeOn.posx+26  )
    if(IsPlay)
    {
        if(mybird.posy>=480 
            || (((mybird.posx > spikeOn1.posx-36 && mybird.posx<spikeOn1.posx+36)  && mybird.posy<spikeOn1.posy+170) ||((mybird.posx > spikeOn1.posx-36 && mybird.posx<spikeOn1.posx+36)  && mybird.posy>spikeOn1.posy+160+120))
            
            || (((mybird.posx > spikeOn2.posx-36 && mybird.posx<spikeOn2.posx+36)  && mybird.posy<spikeOn2.posy+170) ||((mybird.posx > spikeOn2.posx-36 && mybird.posx<spikeOn2.posx+36)  && mybird.posy>spikeOn2.posy+160+120))
    
            || (((mybird.posx > spikeOn3.posx-36 && mybird.posx<spikeOn3.posx+36)  && mybird.posy<spikeOn3.posy+170) ||((mybird.posx > spikeOn3.posx-36 && mybird.posx<spikeOn3.posx+36)  && mybird.posy>spikeOn3.posy+160+120))
            )
    
        {
            audiodie.play();
            audiodie2.play();
            mybird.vy=10;
            curanim.rotation = 1.2;
            IsPlay=false;
            IsDeath=true;
            //app.ticker.stop();
            btRestart.visible = true;
            
        }
        else
        {
            if(((mybird.posx > spikeOn1.posx-36 && mybird.posx<spikeOn1.posx+36) ||(mybird.posx > spikeOn2.posx-36 && mybird.posx<spikeOn2.posx+36) || (mybird.posx > spikeOn3.posx-36 && mybird.posx<spikeOn3.posx+36)) &&IsPass==false )
                {
                    IsPass=true;
                    gamePoint++;
                }
            else if((mybird.posx>spikeOn1.posx+36 && mybird.posx<spikeOn2.posx-36 ) || (mybird.posx>spikeOn2.posx+36 && mybird.posx<spikeOn3.posx-36 ) || (mybird.posx>spikeOn3.posx+36 && mybird.posx<spikeOn1.posx-36 ) )
            IsPass=false;
            mybird.vy+=0.2;
        }
    
        if( curanim.rotation<1.2)
        {
            curanim.rotation+=0.05
        }
    }

}
var audio = new Audio('resources/wing.wav');

var audiodie = new Audio('resources/hit.wav');

var audiodie2 = new Audio('resources/die.wav');


function Click()
{
   if(IsPlay)
   {
    audio.pause();

    audio.play();

    curanim.rotation=-0.8;

    mybird.vy=-4;
   }
}






