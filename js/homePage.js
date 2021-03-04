$(function() {
	$('a').hover(function() {
		$(this).css('color', '');
	}, function() {
		$(this).css('color', '#000');
	})
	$('#navA li a span').hover(function() {
		$(this).css('color', '#fff');
		$('.symbol').css('color', '#424242');

	}, function() {
		$(this).css('color', '#B0B0B0');
		$('.QR').css('display', 'none');
	})

	$('#mainTop-navB-list-ul>li').hover(function() {
		$(this).css('color', '#ffaa00');
		$('#mainTop-navB-list-ul>li .name').css("color", "#000")

	}, function() {
		$(this).css('color', '#000000');

	})
	$('.mainTop-nav-div a').hover(function() {
		$(this).css('color', '#ffaa00');

	}, function() {
		$(this).css('color', '#000000');

	})

	$('.download').hover(function() {
		$('.sign').css('display', 'block');
		$('.QR').slideDown(function() {
			$('.QR').css('display', 'block');
		})
	}, function() {
		$('.sign').css('display', 'none');
	})

	$('.shopping-li').hover(function() {
		$('.shopping-li').css('color', '#FF6700');
		$('.shopping-li').css('background', '#fff');
		$('.shopping-box').css('display', 'block');
		$('.shoppingCart .img').html(
			'<img src="https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png" >');
	}, function() {
		$(this).css('color', '#B0B0B0');
		$('.shopping-li').css('background', '#424242');
		$('.shopping-box').css('display', 'none');
		$('.shoppingCart .img').html(
			'<img src="https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png" >')

	})

	$('.mainTop-navB-logo').hover(function() {
		$('.mainTop-navB-logo-span-logo').stop().animate({
			left: 55
		}, 200);
		$('.mainTop-navB-logo-span-sign').stop().animate({
			left: 0
		}, 200);
	}, function() {
		$('.mainTop-navB-logo-span-logo').stop().animate({
			left: 0
		}, 200);
		$('.mainTop-navB-logo-span-sign').stop().animate({
			left: -55
		}, 200);
	})
	$('#mainTop-navB-list-ul>li').stop().hover(function() {
		var indexS = $(this).index();
		console.log($(this))
		$('.detailed>div').css('display', 'none');
		if (indexS == 0) {
			$('#id').css('display', 'block');
			$('.mainTop-navB-activity').css('color', '#ffaa00');

		}



		if (indexS == 1) {
			$('#detailed-phone').css('display', 'block');
			$('#phoneLi .detailed').stop().slideDown(500, function() {

			})
		} else if (indexS == 2) {
			$('#detailed-redmi').css('display', 'block');
			$('#redmiLi .detailed').stop().slideDown(500, function() {

			})
		} else if (indexS == 3) {
			$('#detailed-TV').css('display', 'block');
			$('#TVLi .detailed').stop().slideDown(500, function() {

			})
		} else if (indexS == 4) {
			$('#detailed-notebook').css('display', 'block');
			$('#notebookLi .detailed').stop().slideDown(500, function() {

			})
		} else if (indexS == 5) {
			$('#detailed-homeAppliance').css('display', 'block');
			$('#homeApplianceLi .detailed').stop().slideDown(500, function() {

			})
		} else if (indexS == 6) {
			$('#detailed-router').css('display', 'block');
			$('#routerLi .detailed').stop().slideDown(500, function() {

			})
		} else if (indexS == 7) {
			$('#detailed-smartHardware').css('display', 'block');
			$('#smartHardwareLi .detailed').stop().slideDown(500, function() {

			})
		}
		console.log(indexS)
	}, function() {
		indexS = $(this).index();
		if (indexS == 0) {
			$('#id').css('display', 'block');
			$('.mainTop-navB-activity').css('color', '#000');

		}
		$('.detailed').stop().slideUp(500, function() {

		})

	})

	$('#phoneli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.phoneBox').css('display', 'block');

	}, function() {
		$(this).css('background', '');
		$('.phoneBox').css('display', 'none')
	})

	$('#TVli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.TVBox').css('display', 'block');

	}, function() {
		$(this).css('background', '');
		$('.TVBox').css('display', 'none')
	})

	$('#notebookli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.notebookBox').css('display', 'block');

	}, function() {
		$(this).css('background', '');
		$('.notebookBox').css('display', 'none')
	})

	$('#applianceli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.applianceBox').css('display', 'block');

	}, function() {
		$(this).css('background', '');
		$('.applianceBox').css('display', 'none')
	})

	$('#ravelli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.ravelBox').css('display', 'block');

	}, function() {
		$(this).css('background', '');
		$('.ravelBox').css('display', 'none')
	})

	$('#smartli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.smartBox').css('display', 'block');

	}, function() {
		$(this).css('background', '');
		$('.smartBox').css('display', 'none')
	})

	$('#powerSupplyli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.powerSupplyBox').css('display', 'block');

	}, function() {
		$(this).css('background', '');
		$('.powerSupplyBox').css('display', 'none')
	})

	$('#healthli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.healthBox').css('display', 'block');

	}, function() {
		$(this).css('background', '');
		$('.healthBox').css('display', 'none')
	})

	$('#headsetli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.headsetBox').css('display', 'block');

	}, function() {
		$(this).css('background', '');
		$('.headsetBox').css('display', 'none')
	})

	$('#lifeli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.lifeBox').css('display', 'block');

	}, function() {
		$(this).css('background', '');
		$('.lifeBox').css('display', 'none')
	})

	var timer = null;
	var imgShow = 0;
	var imgCount = $('#clickShow div').length;


	timer = setInterval(imgMove, 2000);

	function imgMove() {
		imgShow = imgShow < imgCount - 1 ? (imgShow + 1) : 0;
		changeImgShow();
	};
	$('#clickShow div').click(function(e) {
		clearInterval(timer);
		imgShow = $(this).index();
		changeImgShow();
	});


	$('.advertising')[0].onmouseover = function() {
		clearInterval(timer);
	};
	$('.advertising')[0].onmouseout = function() {
		timer = setInterval(imgMove, 2000);
	};

	$('#butsPre').click(function() {

		imgShow = imgShow > 0 ? (imgShow - 1) : (imgCount - 1);
		changeImgShow();
	});
	$('#butsNext').click(function() {
		return imgMove()
	});


	function changeImgShow() {

		$('#imgShow div').stop().animate({
			opacity: 0
		}, 1000);
		$('#imgShow div').eq(imgShow).stop().animate({
			opacity: 1
		}, 1000)
		$('#clickShow div').css({
			background: '#999'
		});
		$('#clickShow div').eq(imgShow).css({
			background: '#000'
		})
	}
	var timers = null;
	var imgShows = 0;
	var itemWidths = 249;
	var imgCounts = $('.show-div div').length;


	timers = setInterval(imgMoves, 2000);

	function imgMoves() {
		imgShows = imgShows < imgCounts - 4 ? (imgShows + 1) : 0;
		changeImgShows();
	};

	$('.shopping')[0].onmouseover = function() {
		clearInterval(timers);
	};
	$('.shopping')[0].onmouseout = function() {
		timers = setInterval(imgMoves, 2000);
	};
	$('.butOn')[0].onmouseover = function() {
		clearInterval(timers);
	};
	$('.butOn')[0].onmouseout = function() {
		timers = setInterval(imgMoves, 2000);
	};
	$('.butNext')[0].onmouseover = function() {
		clearInterval(timers);
	};
	$('.butNext')[0].onmouseout = function() {
		timers = setInterval(imgMoves, 2000);
	};

	$('.butOn').click(function() {
		if (imgShows > 0) {
			imgShows = imgShows - 1;
		}

		changeImgShows();
	});
	$('.butNext').click(function() {
		return imgMoves();
	});


	function changeImgShows() {
		var dist = -imgShows * itemWidths + "px";
		$(".show-div").stop().animate({
			left: dist
		}, 500);

	}

	// $('.recommended').hover(function(){
	// 	$('.recommended').css('color','#ffaa00');

	// },function(){
	// 	$('.recommended').css('color','#000');

	// })






	$('.product-tv .recommended').hover(function() {
		$('.product-tv .recommended').css('color', '#ffaa00');
		$('.product-tv .recommended').css('text-decoration', 'underline');
		$('.product-tv .product-content-second').css('display', 'block');
		$('.product-tv .product-content-first').css('display', 'none');
		$('.product-tv .hot').css('color', '#000');
		$('.product-tv .hot').css('text-decoration', 'none');

	}, function() {

	})
	$('.product-tv .hot').hover(function() {
		$('.product-tv .hot').css('color', '#ffaa00');
		$('.product-tv .hot').css('text-decoration', 'underline');
		$('.product-tv .product-content-first').css('display', 'block');
		$('.product-tv .product-content-second').css('display', 'none');
		$('.product-tv .recommended').css('color', '#000');
		$('.product-tv .recommended').css('text-decoration', 'none');
	}, function() {

	})




	$('.product-smart .recommended').hover(function() {
		$('.product-smart .recommended').css('color', '#ffaa00');
		$('.product-smart .recommended').css('text-decoration', 'underline');
		$('.product-smart .product-content-second').css('display', 'block');
		$('.product-smart .product-content-first').css('display', 'none');
		$('.product-smart .hot').css('color', '#000');
		$('.product-smart .hot').css('text-decoration', 'none');

	}, function() {})
	$('.product-smart .hot').hover(function() {
		$('.product-smart .hot').css('color', '#ffaa00');
		$('.product-smart .hot').css('text-decoration', 'underline');
		$('.product-smart .product-content-first').css('display', 'block');
		$('.product-smart .product-content-second').css('display', 'none');
		$('.product-smart .recommended').css('color', '#000');

	}, function() {})



	$('.product-collocation .recommended').hover(function() {
		$('.product-collocation .recommended').css('color', '#ffaa00');
		$('.product-collocation .recommended').css('text-decoration', 'underline');
		$('.product-collocation .product-content-second').css('display', 'block');
		$('.product-collocation .product-content-first').css('display', 'none');
		$('.product-collocation .hot').css('color', '#000');
		$('.product-collocation .hot').css('text-decoration', 'none');
	}, function() {})
	$('.product-collocation .hot').hover(function() {
		$('.product-collocation .hot').css('color', '#ffaa00');
		$('.product-collocation .hot').css('text-decoration', 'underline');
		$('.product-collocation .product-content-first').css('display', 'block');
		$('.product-collocation .product-content-second').css('display', 'none');
		$('.product-collocation .recommended').css('color', '#000');
	}, function() {


	})



	$('.product-accessories .recommended').hover(function() {
		$('.product-accessories .recommended').css('color', '#ffaa00');
		$('.product-accessories .recommended').css('text-decoration', 'underline');
		$('.product-accessories .product-content-second').css('display', 'block');
		$('.product-accessories .product-content-first').css('display', 'none');
		$('.product-accessories .hot').css('color', '#000');
		$('.product-accessories .hot').css('text-decoration', 'none');
	}, function() {

	})
	$('.product-accessories .hot').hover(function() {
		$('.product-accessories .hot').css('color', '#ffaa00');
		$('.product-accessories .hot').css('text-decoration', 'underline');
		$('.product-accessories .product-content-first').css('display', 'block');
		$('.product-accessories .product-content-second').css('display', 'none');
		$('.product-accessories .recommended').css('color', '#000');
	}, function() {

	})





	$('.product-surrounding .recommended').hover(function() {
		$('.product-surrounding .recommended').css('color', '#ffaa00');
		$('.product-surrounding .recommended').css('text-decoration', 'underline');
		$('.product-surrounding .product-content-second').css('display', 'block');
		$('.product-surrounding .product-content-first').css('display', 'none');
		$('.product-surrounding .hot').css('color', '#000');
		$('.product-surrounding .hot').css('text-decoration', 'none');
	}, function() {


	})
	$('.product-surrounding .hot').hover(function() {
		$('.product-surrounding .hot').css('color', '#ffaa00');
		$('.product-surrounding .hot').css('text-decoration', 'underline');
		$('.product-surrounding .product-content-first').css('display', 'block');
		$('.product-surrounding .product-content-second').css('display', 'none');
		$('.product-surrounding .recommended').css('color', '#000');

	}, function() {

	})
	var m = 60;
	var n = 0;
	setInterval(function(){
		n--
		if(n<=0){
			m--
			n = 59
		}
		$('.min').text(m);
		$('.sec').text(n);
		
	},1000)





















})
