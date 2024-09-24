$(document).ready(function(){

	const program_swiper = new Swiper('.program .swiper', { 
		slidesPerView: 1, 
		spaceBetween: 16,
		breakpoints: {
			768: {   
				slidesPerView: 2,
				spaceBetween: 16,
			},
			1024: {   
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1300: { 
				slidesPerView: 4,
				spaceBetween: 24,
			},
		},
		navigation: {
			nextEl: '.program .next',
			prevEl: '.program .prev',
		},
		scrollbar: {
			el: ".program .swiper-scrollbar",
			hide: false,
			draggable: true,
		},
	});

    const notice_swiper = new Swiper('.notice_right .swiper', { 

        autoplay: { 
            delay: 2500,
            disableOnInteraction: true,
        },

        loop: true, 

        pagination: {  
            el: '.notice_right .btn_wrap .paging', 
            clickable: true,  
        },
    });

	$('.notice_right .btn_wrap button.btn_stop').on('click', function(){
		notice_swiper.autoplay.stop(); 
		$(this).hide()
		$('.notice_right.btn_wrap button.btn_play').show()
	})
	$('.notice_right .btn_wrap button.btn_play').on('click', function(){
		notice_swiper.autoplay.start();  
		$(this).hide()
		$('.notice_right .btn_wrap button.btn_stop').show()
	})
})