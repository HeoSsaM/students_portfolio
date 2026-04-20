$(document).ready(function() {
    $('.btn-mobile').on('click', function() {
        $('.gnb-area').slideDown()
    })

    $('.btn-close').on('click', function() {
        $('.gnb-area').slideUp()
    })
})