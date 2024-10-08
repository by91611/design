$(document).ready(function(){
	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

		effect: "fade",
	
		autoplay: {  /* 팝업 자동 실행 */
			delay: 6000,
			disableOnInteraction: true,
		},

		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.visual .paging', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		},

	});

	const program_swiper = new Swiper('.program .swiper', { /* 팝업을 감싼는 요소의 class명 */

		slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		navigation: {  /* 이전, 다음 버튼 */
			nextEl: '.program .swiper-button-next',  /* 다음 버튼의 클래스명 */
			prevEl: '.program .swiper-button-prev',  
		},

	});

	const gallery_swiper_top = new Swiper('.gallery .swiper_top', { /* 팝업을 감싼는 요소의 class명 */

		slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
		spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
		breakpoints: {
			768: {  /* 640px 이상이 되면 적용 */
				spaceBetween: 16, 
			},
			1024: {  /* 1024px 이상이 되면 적용 */
				spaceBetween: 20,
			},
		},
		centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		autoplay: {  /* 팝업 자동 실행 */
			delay: 0,
			disableOnInteraction: false,
		},
		speed: 10000,
	});

	const gallery_swiper_bottom = new Swiper('.gallery .swiper_bottom', { /* 팝업을 감싼는 요소의 class명 */

		slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
		spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
		breakpoints: {
			768: {  /* 640px 이상이 되면 적용 */
				spaceBetween: 16, 
			},
			1024: {  /* 1024px 이상이 되면 적용 */
				spaceBetween: 20,
			},
		},
		centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		autoplay: {  /* 팝업 자동 실행 */
			delay: 0,
			disableOnInteraction: false,
		},
		speed: 10000,
	});
	
})