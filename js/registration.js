$(function() {
	var m = false;
	var n = false;
	$(window).click(function(e) {
		var e = e || window.event;
		if (e.target.className == 'show') {
			if (m == false) {
				$('.countries').css('display', 'block');
				m = true;
			} else if (m == true) {
				$('.countries').css('display', 'none');
				m = false;
			}

		} else {
			$('.countries').css('display', 'none');
			m = false;
		};

		if (e.target.className == 'shownum') {
			if (n == false) {
				$('.countries-N').css('display', 'block');
				n = true;
			} else if (n == true) {
				$('.countries-N').css('display', 'none');
				n = false;
			}
		} else {
			$('.countries-N').css('display', 'none');
			n = false;
		};
		

	})
	var oDiv = document.getElementById('numBox');
	var oIn = numBox.getElementsByTagName('input');
	var oText2 = document.getElementById('numBox-text2');
	var oInval = 0;
	
	oIn[0].onblur = function() {
		oInval = oIn[0].value;
		if (oInval.length != 11 || oInval[0] != 1) {
			oText2.style.display = 'block';
			oText2.style.color = '#fa0';
			oDiv.style.borderColor = '#fa0';
		} else {
			oText2.style.display = 'none';
			oDiv.style.borderColor = '#888';
		}
		
	}
	var oDshow = document.getElementsByClassName('show');
	var oDshow_N = document.getElementsByClassName('shownum');
	var str;
	$('.countries ul li').click(function(){
		oDshow[0].innerText = this.innerText;
	})
	$('.countries-N ul li').click(function(){
		console.log(this.innerText);
		str = this.innerText.slice(3,this.innerText.length)
		oDshow_N[0].innerText = str;
	})
	$('#but').click(function(){
		console.log(oDshow_N[0].innerText +oIn[0].value)
		
	})
	
})
