$(document).ready(function(){
    /*
        1024이하는 mobile, 1025이상은 pc
        
        header .header_sub .gnb .gnb_wrap ul.depth1 > li
        pc모드일 때 마우스를 오버하면 
        1. header에 menu_over 클래스 추가
        2. l차 메뉴에 over 클래스 추가

        브라우저의 스크롤을 내리면 header에 fixed 클래스 추가
        다시 최상위로 올라가면 fixed 클래스 삭제
    */

    let scrolling
    let scroll_top //header를 고정을 시작할 높이값
    let window_w
    let mobile_size = 1024
    let pc_mobile

    function scroll_chk(){
        if(pc_mobile == 'pc'){
            scroll_top = 100
        }else{
            scroll_top = 0
        }
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > scroll_top){ //스크롤 했을 때
            $('header').addClass('fixed')
        }else{ //0이거나 0보다 작을 때
            $('header').removeClass('fixed')
        }
    }

    function resize_chk(){
        window_w = $(window).width()
        console.log(window_w)
        if(window_w > mobile_size){ //pc
            pc_mobile = 'pc'
        }else{ //mobile
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    }

    resize_chk() //로딩되었을 때 1번 실행
    $(window).resize(function(){
        resize_chk()
    })

    scroll_chk() //로딩되었을 때 1번 실행
    $(window).scroll(function(){ //스크롤 할 때마다 1번 실행
        scroll_chk()
    })

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(pc_mobile == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
    })
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child ul.depth2 > li:last-child').on('focuscout', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
    })

    /* 
        모바일 메뉴
        header .gnb .gnb_wrap ul.depth1 > li > a를 클릭했을 때
        1. 1차메뉴 a의 href값을 무력화하여 해당 페이지로 이동하지 않도록 
        2. li에 open 클래스 추가
        3. 열린 메뉴를 클릭하면 닫히고, 닫힌 메뉴를 클릭하면 열림 (동시에 여러개 메뉴 열림 가능)
    */ 

    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(pc_mobile == 'mobile'){ //모바일에서만
            e.preventDefault();
            $(this).parent().toggleClass('open')
        }
    })

    $('header .gnb button.gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        /* 하단 콘텐츠 스크롤 금지 */
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .gnb button.gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        /* 하단 콘텐츠 스크롤 금지 해제 */
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
})