$(function(){
	window.onscroll = function() {
		if ($(window).scrollTop() > 200) {
			$('.show-nav').stop().slideDown(300, function() {
				$('.show-nav').css('position', 'fixed');
				$('.show-nav').css('top', '0');
				console.log(8888888888)
			})
		} else {
			$('.show-nav').stop().slideUp(300, function() {})
		}
		if ($(window).scrollTop() > 930) {
			$('.back').css('display', 'block');
		} else {
			$('.back').css('display', 'none');
			
		}
	}
	
})