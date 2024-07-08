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
})