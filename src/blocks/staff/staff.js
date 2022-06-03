$(document).ready(function () {
    $('.staff__area').slick({
        dots: true,
        prevArrow: '.staff__arrow--prev',
        nextArrow: '.staff__arrow--next',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1660,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});