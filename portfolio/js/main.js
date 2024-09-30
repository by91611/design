$(document).ready(function(){
	const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */
  
  
  
		  // lockAnchors: true,
		  anchors: ['home', 'about', 'hlsi', 'seaworld', 'healing', 'contact'],
  
		  autoScrolling:true, /* 한페이지씩 스크롤 */
		  scrollHorizontally: true,
  
		  verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
		  
		  scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */
  
		  afterLoad: function(origin, destination, direction, trigger){
			if((destination.index == 0 )){ 
				$('header').addClass('white')
			}else{
				$('header').removeClass('white')
			}
			if((destination.index == 1)){ 
				$('header').addClass('black')
			}else{
				$('header').removeClass('black')
			}
			if((destination.index == 2)){ 
			$('header').addClass('green')
			}else{
				$('header').removeClass('green')
			}
			if((destination.index == 3)){ 
				$('header').addClass('blue')
			}else{
				$('header').removeClass('blue')
			}
			if((destination.index == 4)){ 
				$('header').addClass('orange')
			}else{
				$('header').removeClass('orange')
			}
			if((destination.index == 5)){ 
				$('header').addClass('white2')
			}else{
				$('header').removeClass('white2')
			}
		  },
  
		  //responsiveWidth: 1025 /* fullpage를 적용시키지 않을 모바일 사이즈 */
	  });
  
	  gsap.from(".type", {duration: 2, text: ""})
  })