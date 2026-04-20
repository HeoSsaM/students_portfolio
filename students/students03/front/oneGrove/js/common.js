//한영토글
$('.lang').on('click', function () {
    $('.sub-lang').slideToggle();  /* 토글: 한가지버튼이 두가지 일 수행 */
})

//위로가기 버튼
const btnTop = document.querySelector('.btn-top');

btnTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//모바일 메뉴
$(function () {
    function isMobile() {
        return document.documentElement.clientWidth <= 768;
    }
    //1.모바일 메뉴 열기
    $('.menuOpen').on('click', function () {
        if (!isMobile()) return;
        $('.gnb').stop().fadeIn(200)
        $('.menuOpen').hide()
        $('.menuClose').show()
        $('.gnb-area .items').addClass('on')
    })

    //2. 모바일 메뉴 닫기
    $('.menuClose').on('click', function () {
        if (!isMobile()) return;

        $('.gnb').stop().fadeOut(400)
        $('.menuOpen').show()
        $('.menuClose').hide()
        $('.gnb-area .items').removeClass('on')
    })

    //3.서브메뉴 열기.닫기
    $('.accordion').on('click', function (e) {
        if (!isMobile()) return;

        e.preventDefault();

        let panel = $(this).next('.sub-menu'); //클릭한 서브메뉴

        //현재 클릭되어있는 자기자신을 클릭했을 때 올리기 - 이미 클릭되어있는 건 이 로직내에서 예외상황으로 보기 때문에 if구문으로 먼저 처리한다.
        if (panel.is(':visible')) {  //클릭한 서브메뉴가 보이는 상태라면 
            panel.stop().slideUp();  //클릭한 서브메뉴는 올린다.
            $(this).removeClass('rotate'); //클릭한 아코디언 화살표는 rotate를 removeclass하여 다시 원래대로 돌려놓는다.
            return;
        }

        $('.sub-menu').stop().slideUp(); //클릭한거 말고 다른 서브메뉴들은 올린다.
        $('.accordion').removeClass('rotate'); // 클릭한거 말고 다른 아코디언 화살표의 rotate를 removeclass하여 다시 원래대로 돌려 놓는다. 

        panel.stop().slideDown(); //클릭한 서브메뉴를 내린다. 
        $(this).addClass('rotate'); //클릭한 아코디언 화살표에 addclass로 돌린다. 
    });
    // 내리는게 나중인 이유: 열었는데 다음으로 닫는 로직이 나오면 결론적으로 바로 닫혀버리 는 구조이기 때문에 결론적으로 열리는게 없음

    $(window).on('resize', function () {
        if (!isMobile()) {
            $('.gnb').removeAttr('style');
            $('.sub-menu').removeAttr('style');
            $('.menuOpen').show();
            $('.menuClose').hide();
            $('.menuOpen').removeAttr('style');
            $('.menuClose').removeAttr('style');
            $('.accordion').removeClass('rotate');
            $('.gnb-area .items').removeClass('on')
        }
    })
});

