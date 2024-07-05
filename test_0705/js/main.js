$(document).ready(function(){
    /* header .gnb .gnb_wrap ul.depth1 > li 에 마우스를 오버하면 하위 메뉴가 나타남 
        1. header에 .menu_over 클래스 추가
        2. 오버한 메뉴의 li에 on 클래스 추가
        
        오버는 디테일하게, 아웃은 넓게 header */
    
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        $('header').addClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
    })
    /* 1차 메뉴 마지막 li의 2차 메뉴의 마지막 li */
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child ul.depth2 > li:last-child').on('mouseleave focusout', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
    })
    
})