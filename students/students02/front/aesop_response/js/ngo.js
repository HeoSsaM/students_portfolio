$(document).ready(function() {
    $('.btn-mobile').on('click', function() {
        $('.gnb').slideDown()
    })
    $('.btn-close').on('click', function() {
        $('.gnb').slideUp()
    })
})