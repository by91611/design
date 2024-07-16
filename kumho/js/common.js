/* header와 footer 공통요소에 들어가는 jquery */ 

$(document).ready(function(){
    /* header에 마우스를 올리거나, 브라우저가 스크롤 되면 - header에 fixed 클래스 추가
       -> pc/mobile 상관없이 구현 */ 
    /* 메뉴에 마우스을 오버하면 header .gnb .gnb_wrap ul.depth1 > li
       1. header에 menu_over 클래스 추가
       2. 마우스을 오버한 li에 on 클래스 추가 
       -> pc에서만 구현 */ 
    
    let win_w 
    let pc_mobile
    let scrolling

    function resize_chk(){
        win_w = $(window).width()
        if(win_w > 1024){
            pc_mobile = 'pc'
        }else{
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    } 

    resize_chk() // 브라우저가 로딩됐을 때 한번 실행
    $(window).resize(function(){ // 브라우저가 리사이즈 될 때마다 실행 
        resize_chk()
    }) 

    $('header').on('mouseenter', function(){
        $(this).addClass('fixed')
    })
    $('header').on('mouseleave', function(){ 
        // 마우스를 아웃했을 때 fixed 클래스를 삭제하는건 맨 상단에 있을 때만 가능
        if(scrolling <= 0 ){ 
            $(this).removeClass('fixed')
        }
    })

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ //스크롤이 조금이라도 되었다면 
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
        console.log(scrolling)
    }
    
    scroll_chk() // 브라우저가 로딩됐을 때 한번 실행
    $(window).scroll(function(){ // 스크롤 할때마다 실행
        scroll_chk()
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
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

    /* 모바일 메뉴를 클릭하면 
    1. a링크 값 삭제 (이동 못하도록) 
    2. li에 open 클래스 추가 
       open 없으면 추가, 있으면 삭제-> 한번 클릭하면 열리고, 두번 클릭하면 닫힘 */ 

    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(pc_mobile == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('open')
        }
	});

    /* header .gnb .gnb_close
       메뉴열기를 클릭하면 header에 menu_open 클래스 추가
       메뉴닫기를 클릭하면 header에 menu_open 클래스 삭제 
       header .gnb .gnb_open */
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
       
}) // $(document)