$(function(){
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
	
		$('.detailed>div').css('display', 'none');
		if (indexS == 0) {
			$('#id').css('display', 'block');
			$('.mainTop-navB-activity').css('color', '#ffaa00');
			$('.mainTop-nav-div').css('display', 'inline-block');
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
	
	$('.list-dd').click(function(){
		$('.pre').text('订单中心');
		$('.order').css('display','block');
		$('.private').css('display','none');
		$(this).css('color','#FE5038');
		$('.list-per').css('color','#757575');
		
	})
	$('.list-per').click(function(){
		$('.pre').text('个人中心');
		$('.order').css('display','none');
		$('.private').css('display','block');
		$(this).css('color','#FE5038');
		$('.list-dd').css('color','#757575');
	})
	$('.firstli').click(function(){
		$('.orderlist').css('display','none');
		$('.orderlist1').css('display','block');
		$(this).css('color','#FE5038');
		$('.li2').css('color','#757575');
		$('.li3').css('color','#757575');
		$('.li4').css('color','#757575');
		
	})
	$('.li2').click(function(){
		$('.orderlist').css('display','none');
		$('.orderlist2').css('display','block');
		
		$(this).css('color','#FE5038');
		$(this).css('color','#FE5038');
		$('.firstli').css('color','#757575');
		$('.li3').css('color','#757575');
		$('.li4').css('color','#757575');
		
	})
	$('.li3').click(function(){
		$('.orderlist').css('display','none');
		$('.orderlist3').css('display','block');
		$(this).css('color','#FE5038');
		$('.firstli').css('color','#757575');
		$('.li2').css('color','#757575');
		$('.li4').css('color','#757575');
		$(this).css('color','#FE5038');
		
	})
	$('.li4').click(function(){
		$('.orderlist').css('display','none');
		$('.orderlist4').css('display','block');
		$(this).siblings().css('color','#757575');
		$(this).css('color','#FE5038');
		$(this).css('color','#FE5038');
		$('firstli').css('color','#757575');
		$('.li3').css('color','#757575');
		$('.li2').css('color','#757575');
		
	})
	
	$('.unpaid1').click(function(){
		$('.order').css('display','block');
		$('.private').css('display','none');
		$('.orderlist').css('display','none');
		$('.orderlist1').css('display','block');
		$('.firstli').css('color','#FE5038');
		$('.li2').css('color','#757575');
		$('.li3').css('color','#757575');
		$('.li4').css('color','#757575');
		$('.pre').text('订单中心');
		
	})
	$('.unpaid2').click(function(){
		$('.order').css('display','block');
		$('.private').css('display','none');
		$('.orderlist').css('display','none');
		$('.orderlist2').css('display','block');
		$('.pre').text('订单中心');
		$('.li2').siblings().css('color','#757575');
		$('.li2').css('color','#FE5038');
		$('.firstli').css('color','#757575');
		$('.li3').css('color','#757575');
		$('.li4').css('color','#757575');
		
		
	})
	$('.unpaid3').click(function(){
		$('.order').css('display','block');
		$('.private').css('display','none');
		$('.orderlist').css('display','none');
		$('.orderlist3').css('display','block');
		$('.pre').text('订单中心');
		$('.li3').siblings().css('color','#757575');
		$('.li3').css('color','#FE5038');
		$('.firstli').css('color','#757575');
		$('.li2').css('color','#757575');
		$('.li4').css('color','#757575');
		
		
	})
	$('.unpaid4').click(function(){
		$('.order').css('display','block');
		$('.private').css('display','none');
		$('.orderlist').css('display','none');
		$('.orderlist4').css('display','block');
		$('.pre').text('订单中心');
		$('.li4').siblings().css('color','#757575');
		$('.li4').css('color','#FE5038');
		$('.firstli').css('color','#757575');
		$('.li3').css('color','#757575');
		$('.li2').css('color','#757575');
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
})