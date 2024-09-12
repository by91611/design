$(document).ready(function(){

	let program_active;
	let program_list = $('.program .tab ul li')
	let program_detail = '.program .tab_detail .detail_list .list'

	program_list.on('click', function(){
		program_list.attr('aria-selected', 'false')
		$(this).attr('aria-selected', 'true')
		program_active = $(this).attr('id')
		
		$(program_detail).removeClass('on')
		$(program_detail + '[aria-labelledby="'+ program_active +'"]').addClass('on')
		//.program .tab_detail .detail_list .list[aria-labelledby="tab_01"]
    })

	const notice_swiper = new Swiper('.notice .swiper', {
		slidesPerView: "auto", 
		spaceBetween: 16, 
		breakpoints: {
			1024: { 
				slidesPerView: "auto",
				spaceBetween: 24, 
			},
		},
		loop: true,
		navigation: { 
		nextEl: '.notice .btn_next',  
		prevEl: '.notice .btn_prev',  
	},
	}); 
})