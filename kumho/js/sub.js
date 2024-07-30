$(document).ready(function(){

    /*  .cts_history .tab_area .tab_btn ul li
        1. 클릭한 li에만 active 클래스 추가 
        2. 클릭한 li만 aria-selected="true", 나머지는 모두 aria-selected="false"
        
        .cts_history .tab_area .tab_cnt div[role="tabpanel"]
        3. 클릭한 li에서 aria-controls="panel_01" 값을 가져와서 같은 이름의 id를 가진 요소에만 active 클래스 추가
        
        find라는 명령으로 id가 aria-controls 값과 같은 요소를 찾아야 하는데 find는 하위 요소를 검색하는 기능이라서 
        선택자가 tabpanel을 직접 선택하는게 아니라 부모 요소를 선택해서 하위요소를 검색하도록 함 
    */ 

    let tab_btn = $('.cts_history .tab_area .tab_btn ul li')
    let tab_name
    let tab_cnt = $('.cts_history .tab_area .tab_cnt div[role="tabpanel"]')
    let tab_cnt_parent = $('.cts_history .tab_area .tab_cnt')
    
    tab_btn.on('click', function(){
        tab_btn.removeClass('active')
        $(this).addClass('active')
        tab_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')
        tab_name = $(this).attr('aria-controls')
        tab_name = '#' +tab_name //id를 선택자를 추가로 삽입
        console.log(tab_name)
        tab_cnt.removeClass('active')
        tab_cnt_parent.find(tab_name).addClass('active')
    
    })
})