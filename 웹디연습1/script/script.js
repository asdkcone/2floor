


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

$(".open").click(
    function(){
        $("#pop").show();
    }
);
$(".close").click(
    function(){
        $("#pop").hide();
    }
);

var tabll = document.querySelectorAll(".tab a");
var tabli = document.querySelectorAll(".tab li");
var notice = document.querySelector(".notice");
var gallery = document.querySelector(".gallery");

window.addEventListener('click',coffee);

function coffee(e){
    
    switch(e.target){
        case tabll[0] :
            tabli[0].classList.remove("on");
            tabli[1].classList.remove("on");
            tabli[0].classList.add("on");
            
            notice.classList.remove("now");
            gallery.classList.remove("now");
            notice.classList.add("now");
        break;
            
        case tabll[1] :
            tabli[0].classList.remove("on");
            tabli[1].classList.remove("on");
            tabli[1].classList.add("on");
            
            notice.classList.remove("now");
            gallery.classList.remove("now");
            gallery.classList.add("now");
        break;
    }
}












