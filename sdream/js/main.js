/* top버튼을 클릭하면 상단으로 스크롤
footer .top button --- top 버튼 선택자 */ 

$(document).ready(function(){
    $('footer .top button').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })
})