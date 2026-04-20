////스와이퍼////
var swiper = new Swiper(".inside", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//탭 메뉴 스와이퍼//
var swiper = new Swiper(".tab", {
  slidesPerView: "auto",
  spaceBetween: 14,
  centeredSlides: false,
  freeMode: true
});

//탭 메뉴//
/* $('.btn-area button').on('click', function () {
  let filter = $(this).data('filter');
  //console.log(filter)
  $('.btn-area button').removeClass('on');
  $(this).addClass('on')
  if (filter === 'all') {
    $('.cont').addClass('show')
  } else {
    $('.cont').removeClass('show')
    $('.' + filter).addClass('show')
    //'.'+filter -> 클래스 문자열을 만들어줌
  }
  if (filter === 'all' || filter === 'shop' || filter === 'eat') {
    $('.none').addClass('off');
  } else {
    $('.none').removeClass('off');
  }
})
 */
$('.tab .swiper-wrapper .swiper-slide a').on('click', function (e) {
  e.preventDefault();
  let filter = $(this).parent().data('filter');
  //console.log(filter)
  $('.tab .swiper-wrapper .swiper-slide a').removeClass('on');
  $(this).addClass('on')
  if (filter === 'all') {
    $('.cont').addClass('show')
  } else {
    $('.cont').removeClass('show')
    $('.' + filter).addClass('show')
    //'.'+filter -> 클래스 문자열을 만들어줌
  }
  if (filter === 'all' || filter === 'shop' || filter === 'eat') {
    $('.none').addClass('off');
  } else {
    $('.none').removeClass('off');
  }
})


$(function () {
  $('.period').each(function (index) {
    const text = $(this).text();
    const endText = text.split('~')[1];
    const endDate = endText.trim('');
    const parts = endDate.split('.');

    const year = parts[0]
    const month = parts[1]
    const date = parts[2]

    //이벤트 마지막 날 
    const target = new Date(year, month - 1, date)

    //현재일
    const now = new Date();

    //남은 시간
    const diffTime = target.getTime() - now.getTime();
    const leftDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

    //D-day 표기
    if (diffTime > 0) {
      $('.remainDate').eq(index).text(`D-${leftDays.toLocaleString()}`)
    } else if (diffTime === 0) {
      $('.remainDate').eq(index).text(`D-Day`)
    } else {
      /*  $('.remainDate').eq(index).text(`D+${Math.abs(leftDays).toLocaleString()}`) */
      $('.remainDate').eq(index).text('이벤트 기간 만료')
      $('.remainDate').eq(index).css('color', 'darkred')
      $('#event figure').eq(index).addClass('on')
    }
  });
})

