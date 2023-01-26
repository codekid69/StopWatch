let seconds=00;
let ms=00;
let min=00;
let getSeconds=document.querySelector('.seconds');
let getMin=document.querySelector('.min');
let getMs=document.querySelector('.ms');

let start=document.querySelector('#start');
let stop=document.querySelector('#stop');
let reset=document.querySelector('#reset');

let Id;
start.addEventListener('click',()=>{
     Id=setInterval(startTimer,10);
})
stop.addEventListener('click',()=>{
    clearInterval(Id);
})

reset.addEventListener ('click',()=>{
    clearInterval(Id);
    getMin.innerHTML='0'+0;
    getSeconds.innerHTML='0'+0;
    getMs.innerHTML='0'+0;
})

function startTimer(){
    ms++;
    if(ms<10){
        getMs.innerHTML="0"+ms;
    }
    if(ms>9){
        getMs.innerHTML=ms;
    }
    if(ms>99){
        seconds++;
        getSeconds.innerHTML="0"+seconds;
        ms=0;
        getMs.innerHTML='0'+0;
    }
    if(seconds>9){
        getSeconds.innerHTML=seconds;
    }
    if(seconds>59){
        min++;
        getMin.innerHTML='0'+min;
        seconds=0;
        getSeconds.innerHTML="0"+seconds;
    }
    if(min>9){
        getMin.innerHTML=min;
    }
}