$(document).ready(function(){
    $('.slider').slick({
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="button-prev"></button>',
        nextArrow: '<button type="button" class="button-next"></button>',
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});