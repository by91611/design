$(document).ready(function(){
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
}) //document

