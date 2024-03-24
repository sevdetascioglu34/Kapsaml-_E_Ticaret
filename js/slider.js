//!slider start
let slideIndex=1;
showSlides();

setInterval( function(){
    showSlides((slideIndex+=1))
},4000);
function plusSlide(n){
    showSlides((slideIndex+=n));
}
function currentSlide(n){
    showSlides((slideIndex+=1));
}
function showSlides(n){
const slides=document.querySelectorAll(".slider-item");
const dots=document.querySelectorAll(".slider-dot");
    for(let i=0;i<slides.length;i++){
    slides[i].style.display="none";
    }
    for(let i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace(" active","");
    }
    if(n<1){          
        slideIndex=slides.length;
    }
    if(n>slides.length){
        slideIndex=1;
    }

    slides[slideIndex-1].style.display="flex";
    dots[slideIndex-1].className+=" active";
} 
//!slider end