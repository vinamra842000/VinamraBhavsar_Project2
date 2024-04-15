$(document).ready(() =>
    $("#slider").bxSlider({
        auto: true,
        autoControls: true,
        captions: false,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 700,
        slideMargin: 10
    })
);

const comingSoon = document.querySelector('#comming_soon');

setInterval(function() {
    comingSoon.classList.toggle('color2');
  }, 300);