$(document).ready(function(){

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

    $('footer .family button.family_open').on('click', function(){
        $('footer .family').addClass('open')
        $('footer .family ul').slideDown()
    })
    $('footer .family button.family_colse').on('click', function(){
        $('footer .family').removeClass('open')
        $('footer .family ul').slideUp()
    })

    $('footer .top').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })

    $('.quick .top').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })
})