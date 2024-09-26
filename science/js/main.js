$(document).ready(function(){

	const program_swiper = new Swiper('.program .swiper', { 
		slidesPerView: 1, 
		spaceBetween: 16,
		breakpoints: {
			600: {   
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
		scrollbar: {
			el: ".program .swiper-scrollbar",
			hide: false,
			draggable: true,
		},
	});

    const notice_swiper = new Swiper('.notice_right .swiper', { 

        autoplay: { 
            delay: 25000,
            disableOnInteraction: true,
        },

        loop: true, 

        pagination: {  
            el: '.notice_right .paging', 
            clickable: true,  
        },
    });

	const youtube_swiper = new Swiper('.youtube .swiper', { 
		slidesPerView: 1, 
		spaceBetween: 16,
		breakpoints: {
			495: {   
				slidesPerView: 2,
				spaceBetween: 16,
			},
			768: {   
				slidesPerView: 3,
				spaceBetween: 16,
			},
			1024: {   
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1300: { 
				slidesPerView: 4,
				spaceBetween: 24,
			},
		},
		scrollbar: {
			el: ".youtube .swiper-scrollbar",
			hide: false,
			draggable: true,
		},
	});

})