$(document).ready(function () {
    $('.menu__catalog').click(function () {
        $('.menu__general').toggleClass('menu__general--open')
    })
    $('.menu__title_close').click(function () {
        $('.menu__general').removeClass('menu__general--open')
    })
})