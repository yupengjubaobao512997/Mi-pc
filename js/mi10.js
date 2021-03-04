$(function() {
	console.log(1111)
	$('a').hover(function() {
		$(this).css('color', '');
	}, function() {
		$(this).css('color', '#000');
	})
	$('.cara').hover(function() {
		$(this).css('color', '');
	}, function() {
		$(this).css('color', '#fff');
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

		$('.detailed>div').css('display', 'none');
		if (indexS == 0) {
			$('#id').css('display', 'block');
			$('.mainTop-navB-activity').css('color', '#ffaa00');
			$('.mainTop-nav-div').css('display', 'inline-block');
		}



		if (indexS == 1) {
			$('#detailed-phone').css('display', 'block');
			$('#phoneLi .detailed').stop().slideDown(500)
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
			$('.mainTop-nav-div').css('display', 'none');
			$('.mainTop-navB-activity').css('color', '#000');

		}
		$('.detailed').stop().slideUp(500, function() {

		})

	})
	$('.mainTop-nav-div').hover(function() {
		$('.mainTop-nav-div').css('display', 'inline-block');
	}, function() {
		$('.mainTop-nav-div').css('display', 'none');
	})
	$('#phoneli').hover(function() {
		$(this).css('background', '#FE5038')
		$(this).css('color', '#fff');
		$('.phoneBox').css('display', 'block');

	}, function() {
		$(this).css('background', '');
		$(this).css('color', '#000');
		$('.phoneBox').css('display', 'none')
	})

	$('#TVli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.TVBox').css('display', 'block');
		$(this).css('color', '#fff');

	}, function() {
		$(this).css('background', '');
		$(this).css('color', '#000');
		$('.TVBox').css('display', 'none')
	})

	$('#notebookli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.notebookBox').css('display', 'block');
		$(this).css('color', '#fff');

	}, function() {
		$(this).css('background', '');
		$(this).css('color', '#000');
		$('.notebookBox').css('display', 'none')
	})

	$('#applianceli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.applianceBox').css('display', 'block');
		$(this).css('color', '#fff');

	}, function() {
		$(this).css('background', '');
		$(this).css('color', '#000');
		$('.applianceBox').css('display', 'none')
	})

	$('#ravelli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.ravelBox').css('display', 'block');
		$(this).css('color', '#fff');

	}, function() {
		$(this).css('background', '');
		$(this).css('color', '#000');
		$('.ravelBox').css('display', 'none')
	})

	$('#smartli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.smartBox').css('display', 'block');
		$(this).css('color', '#fff');

	}, function() {
		$(this).css('background', '');
		$(this).css('color', '#000');
		$('.smartBox').css('display', 'none')
	})

	$('#powerSupplyli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.powerSupplyBox').css('display', 'block');
		$(this).css('color', '#fff');

	}, function() {
		$(this).css('background', '');
		$(this).css('color', '#000');
		$('.powerSupplyBox').css('display', 'none')
	})

	$('#healthli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.healthBox').css('display', 'block');
		$(this).css('color', '#fff');

	}, function() {
		$(this).css('background', '');
		$(this).css('color', '#000');
		$('.healthBox').css('display', 'none')
	})

	$('#headsetli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.headsetBox').css('display', 'block');
		$(this).css('color', '#fff');

	}, function() {
		$(this).css('background', '');
		$(this).css('color', '#000');
		$('.headsetBox').css('display', 'none')
	})

	$('#lifeli').hover(function() {
		$(this).css('background', '#FE5038')
		$('.lifeBox').css('display', 'block');
		$(this).css('color', '#fff');

	}, function() {
		$(this).css('background', '');
		$(this).css('color', '#000');
		$('.lifeBox').css('display', 'none')
	})


	window.onscroll = function() {
		if ($(window).scrollTop() > 200) {
			$('.show-nav').stop().slideDown(300, function() {
				$('.show-nav').css('position', 'fixed');
				$('.show-nav').css('top', '0');
			})
		} else {
			console.log(888888)
			$('.show-nav').stop().slideUp(300, function() {})
		}
	}
	var timer = null;
	var imgShow = 0;
	var imgCount = $('.clickShow div').length;
	timer = setInterval(imgMove, 2000);

	function imgMove() {
		imgShow = imgShow < imgCount - 1 ? (imgShow + 1) : 0;
		changeImgShow();
	};
	$('.clickShow div').click(function(e) {
		clearInterval(timer);
		imgShow = $(this).index();
		changeImgShow();
	});
	$('.carousel-img')[0].onmouseover = function() {
		clearInterval(timer);
	};
	$('.carousel-img')[1].onmouseover = function() {
		clearInterval(timer);
	};
	$('.carousel-img')[2].onmouseover = function() {
		clearInterval(timer);
	};
	$('.carousel-img')[0].onmouseout = function() {
		timer = setInterval(imgMove, 2000);
	};
	$('.carousel-img')[1].onmouseout = function() {
		timer = setInterval(imgMove, 2000);
	};
	$('.carousel-img')[2].onmouseout = function() {
		timer = setInterval(imgMove, 2000);
	};

	$('.aleft').click(function() {

		imgShow = imgShow > 0 ? (imgShow - 1) : (imgCount - 1);
		changeImgShow();

	});
	$('.dextrad').click(function() {
		return imgMove()
	});
	console.log($('.carousel-img-black div'))

	function changeImgShow() {
		$('.carousel-img-black div').stop().animate({
			opacity: 0
		}, 1000);
		$('.carousel-img-transparency div').stop().animate({
			opacity: 0
		}, 1000);
		$('.carousel-img-silver div').stop().animate({
			opacity: 0
		}, 1000);
		$('.carousel-img-black div').eq(imgShow).stop().animate({
			opacity: 1
		}, 1000)
		$('.carousel-img-transparency div').eq(imgShow).stop().animate({
			opacity: 1
		}, 1000)
		$('.carousel-img-silver div').eq(imgShow).stop().animate({
			opacity: 1
		}, 1000)
		$('.clickShow div').css({
			background: '#D6D6D6'
		});
		$('.clickShow div').eq(imgShow).css({
			background: '#999'
		})
	}






	var SUM = 0;
	var fnsum = function() {
		SUM = 0;
		for (i = 0; i < $('.afnump').length; i++) {
			// SUM = SUM + parseInt($($('.afnump')[i]).text());
			SUM = SUM + parseInt($($('.afnump')[i]).text());
			$('.sum-sp').text(SUM);
		}
	}
	console.log(fnsum);

	$('.text_P1Sp').stop().hover(function() {
		$('.introduce').css('display', 'block');
	}, function() {
		$('.introduce').css('display', 'none');

	})
	// $('.com div').hover(function fnH() {
	// 	$(this).css('border-color', '#ff4a00');
	// 	$(this).css("color", "#ff4a00");
	// }, function() {
	// 	$(this).css('border-color', '#E0E0E0');
	// 	$(this).css("color", "#757582");
	// })

	$('.black').click(function() {
		$('.Hback').css("border-color", "#E0E0E0");
		$('.Hback').css("color", "#757582");
		$(this).css("border-color", "#ff4a00");
		$(this).css("color", "#ff4a00");
		$('.gshow').css("border-color", "#E0E0E0");
		$('.gshow').css("color", "#757582");
		$('.g8-256').css("border-color", "#ff4a00");
		$('.g8-256').css("color", "#ff4a00");
		$('.carousel-img').css('display', 'none');
		$('.carousel-img-black').css('display', 'block');
		$('.gshow').css('display', 'block');
		$('.gshow').css('display', 'block');
		$('.color-sps').text('陶瓷黑');
		$('.num-p').text('5599元');
		$('.version-sps').text('8GB+256GB');
		$('.afnumps').text('5599元');
		fnsum();


	})
	$('.transparency').click(function() {
		$('.Hback').css("border-color", "#E0E0E0");
		$('.Hback').css("color", "#757582");
		$('.gshow').css("border-color", "#E0E0E0");
		$('.gshow').css("color", "#757582");
		$('.transparency').css("border-color", "#ff4a00");
		$('.transparency').css("color", "#ff4a00");
		$('.carousel-img').css('display', 'none');
		$('.g8-256').css("border-color", "#ff4a00");
		$('.g8-256').css("color", "#ff4a00");
		$('.carousel-img-transparency').css('display', 'block');
		$('.gshow').css('display', 'block');
		$('.g16-512').css('display', 'none');
		$('.color-sps').text('透明板');
		$('.num-p').text('5599元');
		$('.version-sps').text('8GB+256GB');
		$('.afnumps').text('5599元');
		fnsum();

	})
	$('.silver-lustre').click(function() {
		$('.Hback').css("border-color", "#E0E0E0");
		$('.Hback').css("color", "#757582");
		$('.silver-lustre').css("border-color", "#ff4a00");
		$('.silver-lustre').css("color", "#ff4a00");
		$('.carousel-img').css('display', 'none');
		$('.carousel-img-silver').css('display', 'block');
		$('.gshow').css('display', 'none');
		$('.g16-512').css('display', 'block');
		$('.g16-512').css("border-color", "#ff4a00");
		$('.g16-512').css("color", "#ff4a00");
		$('.color-sps').text('亮银版');
		$('.num-p').text('6999元');
		$('.version-sps').text('16GB+512GB');
		$('.afnumps').text('6999元');
		console.log($('.afnump'));
		fnsum();
	})
	$('.g8-256').click(function() {
		$('.num-p').text('5599元');
		$('.version-sps').text('8GB+256GB');
		$('.afnumps').text('5599元');
		$('.gshow').css("border-color", "#E0E0E0");
		$('.gshow').css("color", "#757582");
		$('.g8-256').css("border-color", "#ff4a00");
		$('.g8-256').css("color", "#ff4a00");

		fnsum();
	})
	$('.g8-128').click(function() {
		$('.num-p').text('5299元');
		$('.version-sps').text('8GB+128GB');
		$('.afnumps').text('5299元');
		$('.gshow').css("border-color", "#E0E0E0");
		$('.gshow').css("color", "#757582");
		$('.g8-128').css("border-color", "#ff4a00");
		$('.g8-128').css("color", "#ff4a00");
		fnsum();
	})
	$('.g12-256').click(function() {
		$('.num-p').text('5999元');
		$('.version-sps').text('12GB+256GB');
		$('.afnumps').text('5599元');
		$('.gshow').css("border-color", "#E0E0E0");
		$('.gshow').css("color", "#757582");
		$('.g12-256').css("border-color", "#ff4a00");
		$('.g12-256').css("color", "#ff4a00");
		fnsum();
	})
	$('.g16-512').click(function() {
		$('.num-p').text('6999元');
		$('.version-sps').text('16GB+512GB');
		$('.afnumps').text('6999元');
		$('.gshow').css("border-color", "#E0E0E0");
		$('.gshow').css("color", "#757582");
		$('.g16-512').css("border-color", "#ff4a00");
		$('.g16-512').css("color", "#ff4a00");
		$('.sum-sp').text();
		fnsum();
	})










	// $('.ulA li').css("border-color", "#E0E0E0");
	// $('.ulA li').css("z-index", "1");
	// $('.ulA li .agreement-box em').css({
	// 	background: "#fff"
	// }, {
	// 	color: "#fff"
	// });
	// $('.ulA li .icon-checkbox em').css({
	// 	background: "#fff"
	// }, {
	// 	color: "#ffff"
	// })




	// $('.ulB li').css("border-color", "#E0E0E0");
	// $('.ulB li').css("z-index", "1");
	// $('.ulB li .agreement-box em').css({
	// 	background: "#fff"
	// }, {
	// 	color: "#fff"
	// });
	// $('.ulB li .icon-checkbox em').css({
	// 	background: "#fff"
	// }, {
	// 	color: "#ffff"
	// });
	// $('.ulB li').css("border-color", "#E0E0E0");














	var M = false;
	var N = false;
	var Z = false;
	var ulA = $('.ulA li').click(function fn() {
		$('.ulB li').css("border-color", "#E0E0E0");
		$('.ulB li').css("z-index", "1");
		$('.ulB li .agreement-box em').css({
			background: "#fff",
			color: "#fff"
		});
		$('.ulB li .icon-checkbox em').css({
			background: "#fff"
		}, {
			color: "#ffff"
		});
		$('.ulA li').css("border-color", "#E0E0E0");
		$('.ulA li').css("z-index", "1");
		$('.ulA li .agreement-box em').css({
			background: "#fff"
		}, {
			color: "#fff"
		});
		$('.ulA li .icon-checkbox em').css({
			background: "#fff"
		}, {
			color: "#ffff"
		})
		if (M == false) {
			$(this).css("border-color", "#ff4a00");
			$('.ulA li .icon-checkbox em').css({
				background: "#ff4a00"
			}, {

			});
			$('.ulA li .agreement-box em').css({
				background: "#ff4a00"
			}, {

			});
			$('.ul2 li').remove();
			$(
				`
			<li class="list-T">
				<span class="color-sp">MiCare保障服务</span>
				<div class="nump afnump">899元</div>
			</li>
			`
			).appendTo($('.ul2'))
			M = true;
			N = false;
			Z = false;
			fnsum();
		} else if (M == true) {
			$(this).css("border-color", "#E0E0E0");
			$('.ulA li .agreement-box em').css({
				background: "#fff"
			}, {
				color: "#fff"
			});
			$('.ulA li .icon-checkbox em').css({
				background: "#fff"
			}, {
				color: "#ffff"
			});
			$('.ul2 li').remove();
			M = false;
			N = false;
			Z = false;
			fnsum();
		}
	})

	var ulB = $('.ulB li').click(function() {
		$('.ulB li').css("border-color", "#E0E0E0");
		$('.ulB li').css("z-index", "1");
		$('.ulB li .agreement-box em').css({
			background: "#fff"
		}, {
			color: "#fff"
		});
		$('.ulB li .icon-checkbox em').css({
			background: "#fff"
		}, {
			color: "#ffff"
		});
		$('.ulA li').css("border-color", "#E0E0E0");
		$('.ulA li').css("z-index", "1");
		$('.ulA li .agreement-box em').css({
			background: "#fff"
		}, {
			color: "#fff"
		});
		$('.ulA li .icon-checkbox em').css({
			background: "#fff"
		}, {
			color: "#ffff"
		})
		if ($(this).index() == 0) {
			if (N == false) {
				$('.ulB li').css("border-color", "#E0E0E0");
				$(this).css("border-color", "#ff4a00");
				$(this).css("z-index", "2");
				$($(this).find('.icon-checkbox em')[0]).css({

					background: "#ff4a00"
				}, {

				});
				$($(this).find('.agreement-box em')[0]).css({
					background: "#ff4a00"
				}, {

				});
				$('.ul2 li').remove();
				$(
					`
				<li class="list-T">
					<span class="color-sp">意外保障服务</span>
					<div class="nump afnump">349元</div>
				</li>
				`
				).appendTo($('.ul2'))
				N = true;
				M = false;
				Z = false;
				fnsum();
			} else if (N == true) {
				$(this).css("border-color", "#E0E0E0");
				$('.ulB li .agreement-box em').css({
					background: "#fff"
				}, {
					color: "#fff"
				});
				$('.ulB li .icon-checkbox em').css({
					background: "#fff"
				}, {
					color: "#ffff"
				});
				$('.ul2 li').remove();
				N = false;
				M = false;
				Z = false;
				fnsum();
			}
		} else if (Z == false) {
			$('.ulB li').css("border-color", "#E0E0E0");
			$(this).css("border-color", "#ff4a00");
			$(this).css("z-index", "2");
			$($(this).find('.icon-checkbox em')[0]).css({

				background: "#ff4a00"
			}, {

			});
			$($(this).find('.agreement-box em')[0]).css({
				background: "#ff4a00"
			}, {

			});
			$('.ul2 li').remove();
			$(
				`
			<li class="list-T">
				<span class="color-sp">碎屏保障服务</span>
				<div class="nump afnump">159元</div>
			</li>
			`
			).appendTo($('.ul2'))
			N = false;
			M = false;
			Z = true;
			fnsum();
		} else {
			if (Z == true) {
				$(this).css("border-color", "#E0E0E0");
				$('.ulB li .agreement-box em').css({
					background: "#fff"
				}, {
					color: "#fff"
				});
				$('.ulB li .icon-checkbox em').css({
					background: "#fff"
				}, {
					color: "#ffff"
				});
				$('.ul2 li').remove();
				N = false;
				M = false;
				Z = false;
				fnsum();
			}
		}

	})

	var Q = false;
	$('.ulC li').click(function fn() {
		if (Q == false) {
			$(this).css("border-color", "#ff4a00");
			$('.ulC li .icon-checkbox em').css({
				background: "#ff4a00"
			}, {

			});
			$('.ulC li .agreement-box em').css({
				background: "#ff4a00"
			}, {

			});
			$('.ul3 li').remove();
			$(
				`
			<li class="list-T">
				<span class="color-sp">延长保修服务</span>
				<div class="nump afnump">159元</div>
			</li>
			`
			).appendTo($('.ul3'))
			Q = true;
			fnsum();
		} else if (Q == true) {
			$(this).css("border-color", "#E0E0E0");
			$('.ulC li .agreement-box em').css({
				background: "#fff"
			}, {
				color: "#fff"
			});
			$('.ulC li .icon-checkbox em').css({
				background: "#fff"
			}, {
				color: "#ffff"
			});
			$('.ul3 li').remove();
			Q = false;
			fnsum();
		}
	})





	var W = false;
	var E = false;
	var R = false;
	var T = false;
	$('.ulD li').click(function() {
		$('.ulD li').css("border-color", "#E0E0E0");
		$('.ulD li').css("z-index", "1");
		$('.ulD li .agreement-box em').css({
			background: "#fff"
		}, {
			color: "#fff"
		});
		$('.ulD li .icon-checkbox em').css({
			background: "#fff"
		}, {
			color: "#ffff"
		});
		if ($(this).index() == 0) {
			if (W == false) {
				$('.ulB li').css("border-color", "#E0E0E0");
				$(this).css("border-color", "#ff4a00");
				$(this).css("z-index", "2");
				$($(this).find('.icon-checkbox em')[0]).css({

					background: "#ff4a00"
				}, {

				});
				$($(this).find('.agreement-box em')[0]).css({
					background: "#ff4a00"
				}, {

				});
				$('.ul4 li').remove();
				$(
					`
				<li class="list-T">
					<span class="color-sp">云空间年卡200G</span>
					<div class="nump afnump">159元</div>
				</li>
				`
				).appendTo($('.ul4'))
				W = true;
				E = false;
				R = false;
				T = false;
				fnsum();
			} else if (W == true) {
				$(this).css("border-color", "#E0E0E0");
				$('.ulD li .agreement-box em').css({
					background: "#fff"
				}, {
					color: "#fff"
				});
				$('.ulD li .icon-checkbox em').css({
					background: "#fff"
				}, {
					color: "#ffff"
				});
				$('.ul4 li').remove();
				W = false;
				E = false;
				R = false;
				T = false;
				fnsum();
			}
		} else if ($(this).index() == 1) {
			if (E == false) {
				$('.ulD li').css("border-color", "#E0E0E0");
				$(this).css("border-color", "#ff4a00");
				$(this).css("z-index", "2");
				$($(this).find('.icon-checkbox em')[0]).css({

					background: "#ff4a00"
				}, {

				});
				$($(this).find('.agreement-box em')[0]).css({
					background: "#ff4a00"
				}, {

				});
				$('.ul4 li').remove();
				$(
					`
				<li class="list-T">
					<span class="color-sp">云空间年卡 50G</span>
					<div class="nump afnump">49元</div>
				</li>
				`
				).appendTo($('.ul4'))
				W = false;
				E = true;
				R = false;
				T = false;
				fnsum();
			} else if (E == true) {
				$(this).css("border-color", "#E0E0E0");
				$('.ulD li .agreement-box em').css({
					background: "#fff"
				}, {
					color: "#fff"
				});
				$('.ulD li .icon-checkbox em').css({
					background: "#fff"
				}, {
					color: "#ffff"
				});
				$('.ul4 li').remove();
				W = false;
				E = false;
				R = false;
				T = false;
				fnsum();
			}
		} else if ($(this).index() == 2) {
			if (R == false) {
				$('.ulD li').css("border-color", "#E0E0E0");
				$(this).css("border-color", "#ff4a00");
				$(this).css("z-index", "2");
				$($(this).find('.icon-checkbox em')[0]).css({

					background: "#ff4a00"
				}, {

				});
				$($(this).find('.agreement-box em')[0]).css({
					background: "#ff4a00"
				}, {

				});
				$('.ul4 li').remove();
				$(
					`
				<li class="list-T">
					<span class="color-sp">云空间月卡200G</span>
					<div class="nump afnump">19元</div>
				</li>
				`
				).appendTo($('.ul4'))
				W = false;
				E = false;
				R = true;
				T = false;
				fnsum();
			} else if (R == true) {
				$(this).css("border-color", "#E0E0E0");
				$('.ulD li .agreement-box em').css({
					background: "#fff"
				}, {
					color: "#fff"
				});
				$('.ulD li .icon-checkbox em').css({
					background: "#fff"
				}, {
					color: "#ffff"
				});
				$('.ul4 li').remove();
				W = false;
				E = false;
				R = false;
				T = false;
				fnsum();
			}
		} else if ($(this).index() == 3) {
			if (T == false) {
				$('.ulD li').css("border-color", "#E0E0E0");
				$(this).css("border-color", "#ff4a00");
				$(this).css("z-index", "2");
				$($(this).find('.icon-checkbox em')[0]).css({

					background: "#ff4a00"
				}, {

				});
				$($(this).find('.agreement-box em')[0]).css({
					background: "#ff4a00"
				}, {

				});
				$('.ul4 li').remove();
				$(
					`
				<li class="list-T">
					<span class="color-sp">云空间月卡50G</span>
					<div class="nump afnump">6元</div>
				</li>
				`
				).appendTo($('.ul4'))
				W = false;
				E = false;
				R = false;
				T = true;
				fnsum();

			} else if (T == true) {
				$(this).css("border-color", "#E0E0E0");
				$('.ulD li .agreement-box em').css({
					background: "#fff"
				}, {
					color: "#fff"
				});
				$('.ulD li .icon-checkbox em').css({
					background: "#fff"
				}, {
					color: "#ffff"
				});
				$('.ul4 li').remove();
				W = false;
				E = false;
				R = false;
				T = false;
				fnsum();
			}
		}





	})














































	// window.onscroll = function() {
	// 	console.log(88888888)

	// }







	// window.onscroll = function() {
	// 	if ($(window).scrollTop() > 200) {
	// 		$('.show-nav').stop().slideDown(300, function() {
	// 			$('.show-nav').css('position', 'fixed');
	// 			$('.show-nav').css('top', '0');
	// 			// console.log(8888888888)
	// 		})
	// 	} else {
	// 		$('.show-nav').stop().slideUp(300, function() {})
	// 	}
	// 	if ($(window).scrollTop() > 930) {
	// 		$('.back').css('display', 'block');
	// 	} else {
	// 		$('.back').css('display', 'none');

	// 	}
	// }























})
