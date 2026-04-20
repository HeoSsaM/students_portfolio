//탭 메뉴
$('.tab-area>li').on('click', function (e) {
  e.preventDefault()
  let filter = $(this).data('filter');
  //li강조 줄
  $('.tab-area>li').removeClass('on');
  $(this).addClass('on')
  //탭 선택
  $('.transport').removeClass('show')
  $('.' + filter).addClass('show')

})