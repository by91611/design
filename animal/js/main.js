$(document).ready(function(){

    /* 브라우저 넓이가  1024px 이하-mobile, 1024px 이상-pc*/ 
    let pc_mobile // 현재 상태가 pc인지 mobile인지를 저장
    let window_w // 브라우저 넓이 저장

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1024){ //1024보다 크면 - pc
            pc_mobile = 'pc'
        }else{ // mobile
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    }
    // 처음에 로딩됐을 때 실행
    resize_chk()
    // 브라우저가 리사이즈 될 때마다 실행
    $(window).resize(function(){
        resize_chk()
    })


    const visual_swiper = new Swiper('.visual .swiper', { 
        autoplay: {  
            delay: 2500,
            disableOnInteraction: true,
        },
        loop: true,  
        effect: "fade",
        navigation: {  
            nextEl: '.visual .btn_next',  
            prevEl: '.visual .btn_prev',  
        },
    });


    /* 일시정지 버튼을 클릭하면 - 팝업 일시정지 / 일시정지 버튼 사라짐 / 다시재생 버튼 나타남
       다시재생 버튼을 클릭하면 - 팝업 재생 / 다시재생 버튼 사라짐 / 일시정지 버튼 나타남 */ 
    $('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop(); 
        $(this).hide()
        $('.visual .btn_wrap button.btn_play').show()
    })
    $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start();  
        $(this).hide()
        $('.visual .btn_wrap button.btn_stop').show()
    })

    /* 페이지가 스크롤되면 - header에 fixed 클래스 추가
       다시 맨 위로 올라가면 - header에 fixed 클래스 삭제 */
    let scrolling

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    } //function

    // 문서가 처음 로딩되었을 때 1번 실행
    scroll_chk()

    $(window).scroll(function(){
        /* 브라우저를 스크롤할 때마다 실행 */
        scroll_chk()
    }) //window.scroll

    /* 메뉴에 마우스를 올리면 
       header에 menu_over클래스 추가
       마우스를 오버한 li에만 on이라는 클래스 추가 
       메뉴: header .gnb .gnb_wrap ul.depth1 > li 
       
       -> 다른 li에 마우스를 오버하면 이전에 오버했던 li의 on클래스 삭제
          (이전에 오버했던 메뉴를 알기 어려워서 모든 메뉴의 on클래스 삭제)
       -> header에서 마우스를 아웃하면 menu_over클래스 삭제, 모든 메뉴에서 on 클래서 삭제 */ 

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(pc_mobile == 'pc'){ //pc일 경우에만 실행
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on') //mouse를 오버한 li만
        }//if        
    })//on
    $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){ //pc일 경우에만 실행
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }//if
    })//on

    $('header .gnb .gnb_open').on('click', function(){
        if(pc_mobile == 'mobile'){ //모바일일 경우에만 실행
            $('header').addClass('mobile_open')
        }//if
    })
    $('header .gnb .gnb_close').on('click', function(){
        if(pc_mobile == 'mobile'){ //모바일일 경우에만 실행
            $('header').removeClass('mobile_open')
        }//if
    })




}) //document

