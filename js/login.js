$(function(){
	$('.account-lg').click(function(){
		$('.account-lg').css('color','#f56600');
		$('.inputs').css('display','block');
		$('.scan-lg').css('color','#666');
		$('.scan-interface').css('display','none');
	})
	$('.scan-lg').click(function(){
		$('.account-lg').css('color','#666');
		$('.inputs').css('display','none');
		$('.scan-lg').css('color','#f56600');
		$('.scan-interface').css('display','block');
	})
	$('button').click(function(){
		console.log($('.account').val());
		console.log($('.password').val());
	})
	
})