


$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown(350);
        $(".wing").stop().slideDown(350);
    },
    function(){
        $(".sub").stop().slideUp(350);
        $(".wing").stop().slideUp(350);
    }
);

var tabli = document.querySelectorAll(".tab a");
var notice = document.querySelector(".notice");
var gallery = document.querySelector(".gallery");

window.addEventListener('click',coffee);

function coffee(e){
    
    switch(e.target){
        case tabli[0] :
            tabli[0].classList.remove("on");
            tabli[1].classList.remove("on");
            tabli[0].classList.add("on");
            
            notice.classList.remove("now");
            gallery.classList.remove("now");
            notice.classList.add("now");
        break;
            
        case tabli[1] :
            tabli[0].classList.remove("on");
            tabli[1].classList.remove("on");
            tabli[1].classList.add("on");
            
            notice.classList.remove("now");
            gallery.classList.remove("now");
            gallery.classList.add("now");
        break;
    }
}










