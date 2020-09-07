

var left = document.querySelector(".left");
var right = document.querySelector(".right");
var slideUl = document.querySelector(".slide");
var BslideUl = document.querySelector(".bslide");
var Bslide = document.querySelectorAll(".bslide li");
var button = document.querySelector(".button");

var goSlide;
var count=0;
var startpoint,endpoint;
var i;
var BslideX=0;

window.addEventListener('load',pageOn);
button.addEventListener('click',moveNow);

function pageOn(){

    goSlide=setInterval(go,2000);
}

function go(){
    if(count==8)count=0;
    startpoint=1000*count;
    count++;
    endpoint=1000*count;
    console.log(count);

    goAni();
}

function goAni(){
    var ani=slideUl.animate([
        {transform:"translateX("+-startpoint+"px)"},
        {transform:"translateX("+-endpoint+"px)"}
    ],300);
    ani.addEventListener('finish',function(){
        slideUl.style.transform="translateX("+-endpoint+"px)";
    })
    for(i=0;i<8;i++){
        Bslide[i].classList.remove("on");
    }
    Bslide[count].classList.add("on");
    if(count==4){
        // BslideUl.style.transform="translateX("+BslideX+"px)";
        BslideUl.animate([
            {transform:"translateX(0px)"},
            {transform:"translateX(-1000px)"}
        ],300);
        BslideUl.style.transform="translateX(-1000px)";
    }
    // if(count==0){
    //     BslideUl.animate([
    //         {transform:"translateX(-1000px)"},
    //         {transform:"translateX(0px)"}
    //     ],300);
    //     BslideUl.style.transform="translateX(0px)";
    // }
}

function moveNow(e){
    clearInterval(goSlide);

    switch(e.target){
        case left :
            if(count==0)count=8;
            startpoint=1000*count;
            count--;
            endpoint=1000*count;
            goAni();
            console.log(count);
        break;

        case right :
            go();
        break;
    }

    goSlide=setInterval(go,2000);
}