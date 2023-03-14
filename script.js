var slideIndex = 0;
var Slides = document.getElementsByClassName('slides');
var dots=document.getElementsByClassName('dot');
setInterval(() => displayplus(1), 5000);
function displayplus(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = Slides.length - 1;
    }
    else if (slideIndex >= Slides.length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
}

function showSlides(n) {

    for (var i = 0; i < Slides.length; i++) {
        Slides[i].classList.add('hide');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    Slides[n].classList.remove('hide');
    dots[n].classList.add('active');
    console.log(n);
}

