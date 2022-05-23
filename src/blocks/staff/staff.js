$(document).ready(function () {
    $('.staff__area').slick({
        dots: true,
        prevArrow: '.staff__arrow--prev',
        nextArrow: '.staff__arrow--next',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
    });
});