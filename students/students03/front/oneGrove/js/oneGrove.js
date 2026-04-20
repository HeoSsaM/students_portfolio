//메인 스와이퍼
var swiper = new Swiper(".main", {
    spaceBetween: 0,
    centeredSlides: false,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    }
});

//worklife 스와이퍼
var swiper = new Swiper(".work-life", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 10
        },

        769: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});





