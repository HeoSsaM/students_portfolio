//탭 메뉴
$('.tab-area>li').on('click', function (e) {
  e.preventDefault()
  let filter = $(this).data('filter');
  //li강조 줄
  $('.tab-area>li').removeClass('on');
  $(this).addClass('on')
  //탭 선택
  $('.pre-cont').removeClass('show')
  $('.' + filter).addClass('show')

})


//그루브라운지 스와이퍼
var swiper = new Swiper(".grovelounge", {
  spaceBetween: 30,
  centeredSlides: true,
  Infinity: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

//릴렉스룸 스와이퍼
var swiper = new Swiper(".relaxRoom", {
  spaceBetween: 30,
  centeredSlides: true,
  Infinity: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

//모달창
$('.modal-open').on('click', function () {
  $('.dim').stop().fadeIn(300)
})

$('.modal-close').on('click', function () {
  $('.dim').stop().fadeOut(80)
})

$('#dim').on('click', function () {
  $(this).fadeOut(80)
})

$('.login-modal').on('click', function (e) {
  e.stopPropagation(); 
})

//모달창 비밀번호 
$('.ri-eye-off-line').on('click', function (e) {
  e.preventDefault();
  const $pw = $('#pwField');
  if ($pw.attr('type') === 'password') {
    $pw.attr('type', 'text');
    $(this).hide();
    $('.ri-eye-line').show();
  }
});

$('.ri-eye-line').on('click', function (e) {
  e.preventDefault();
  const $pw = $('#pwField');
  if ($pw.attr('type') === 'text') {
    $pw.attr('type', 'password');
    $('.ri-eye-line').hide();
    $('.ri-eye-off-line').show();
  }
})


