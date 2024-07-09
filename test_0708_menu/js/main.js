$(document).ready(function(){
    // 1025 이상: pc, 1024이하: mobile
    let pc_mobile // 현재 pc인지 mobile인지 저장하는 변수
    let window_w // 브라우저의 넓이

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1024){ // 1025 이상 - pc버전
            pc_mobile = 'pc'
        }else{
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    }

    resize_chk() //html이 로딩된 이후 단 한번 실행
    $(window).resize(function(){ //브라우저가 리사이즈될 때마다 실행
        resize_chk()
    })

    /* pc에서 메뉴에 마우스를 오버하면 header에 menu_over 클래스 추가 
       header .gnb .gnb_wrap ul.depth1 > li에 on 클래스 추가 */ 
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        // pc에서만, on이라는 명령은 이벤트핸들러로 pc에서만 작동되게는 못함 -> if문을 걸어서 pc일 때만 실행되도록 함
        if(pc_mobile == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child').on('focuscout', function(){
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }
    })

    /* 모바일에서 1차 메뉴를 클릭하면 
       1. 1차 메뉴에 걸려있는 링크가 작동되면 안됨
       2. 하위메뉴가 열려야 함(li에 open 클래스 추가) 
       3. 닫힌 1차 메뉴를 클릭하면 열리고, 열린 1차메뉴를 클릭하면 닫힘 
          (동시에 여러개의 1차 메뉴가 열릴 수 있음) */ 
    $("header .gnb .gnb_wrap ul.depth1 > li > a").on("click", function(e){
        if(pc_mobile == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('open')
        }
	});
    /* header .gnb button.gnb_open 
       header .gnb button.gnb_close */ 
    $('header .gnb button.gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .gnb button.gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
})