$(function() {
	$(`<div class="b-advm"><img src="${arradv[0].img}" class="b-advm"></div>`).appendTo($('.b-adv'));
	$(`<div class="adlet img1"><div class="adlet-img "><img src="${arradv[1].img}" class="adlet-img"></div></div>`).insertBefore(
		$('.blank1'));
	$(`<div class="adlet img2"><div class="adlet-img "><img src="${arradv[2].img}" class="adlet-img"></div></div>`).insertBefore(
		$('.blank2'));
	$(`<div class="adlet img3"><div class="adlet-img "><img src="${arradv[3].img}" class="adlet-img"></div></div>`).insertBefore(
		$('.blank2'));
	for (i = 0; i < arrpro1.length; i++) {
		if (i < 4) {
			$(
				`<div class="pro-f1">
					<div class="pro-p1">
						<div class="pro-p1img"><img src="${arrpro1[i].img}" class="imgS"></div>
						<div class="item-cn">
							<h3 class="h3">${arrpro1[i].h}</h3>
							<p class="p1">${arrpro1[i].p1}</p>
							<p class="p2">
								<span class="numA1">
									<span class="sig">￥</span>
									<span class="numB">${arrpro1[i].nup1}</span>
									<span class="QI"></span>
								</span>
								${arrpro1[i].nup2}
							</p>
							<div class="bt">立即购买</div>
						</div>
					</div>
				</div>
				<div class="blank"></div>`
			).insertBefore($('.img2'));
		} else if (4 <= i && i < 6) {
			$(
				`<div class="pro-f1">
					<div class="pro-p1">
						<div class="pro-p1img"><img src="${arrpro1[i].img}" class="imgS"></div>
						<div class="item-cn">
							<h3 class="h3">${arrpro1[i].h}</h3>
							<p class="p1">${arrpro1[i].p1}</p>
							<p class="p2">
								<span class="numA1">
									<span class="sig">￥</span>
									<span class="numB">${arrpro1[i].nup1}</span>
									<span class="QI"></span>
								</span>
								${arrpro1[i].nup2}
							</p>
							<div class="bt">立即购买</div>
						</div>
					</div>
				</div>
				<div class="blank"></div>`
			).insertBefore($('.img3'));
		} else if (6 <= i && i < 8) {
			$(
				`<div class="pro-f1">
					<div class="pro-p1">
						<div class="pro-p1img"><img src="${arrpro1[i].img}" class="imgS"></div>
						<div class="item-cn">
							<h3 class="h3">${arrpro1[i].h}</h3>
							<p class="p1">${arrpro1[i].p1}</p>
							<p class="p2">
								<span class="numA1">
									<span class="sig">￥</span>
									<span class="numB">${arrpro1[i].nup1}</span>
									<span class="QI"></span>
								</span>
								${arrpro1[i].nup2}
							</p>
							<div class="bt">立即购买</div>
						</div>
					</div>
				</div>
				<div class="blank"></div>`
			).insertBefore($('.blank3'));
		} else if (8 <= i && i < 14) {
			$(
				`<div class="pro-f1 pro-f1s">
				<div class="pro-p1 pro-p1s">
					<div class="left-pro">
						<div class="pro-p1img p1imgs"><img src="${arrpro1[i].img}" class="imgS imgs"></div>
						<div class="item-cn cns">
						<div class="left-text">
							<h3 class="h3 h3s">${arrpro1[i].h}</h3>
							<p class="p1 p1s">${arrpro1[i].p1}</p>
							</div>
							<div class="right-show">
							<p class="p2 p2s">
								<span class="numA1 numA1s">
									<span class="sig sigs">￥</span>
									<span class="numB numBs">${arrpro1[i].nup1}</span>
									<span class="QI QIs"></span>
								</span>
								${arrpro1[i].nup2}
							</p>
							<div class="bt bts">立即购买</div>
							</div>
						</div>
					</div>
					<div class="right-pro">
						<div class="pro-p1img p1imgs"><img src="${arrpro1[i+1].img}" class="imgS imgs"></div>
						<div class="item-cn cns">
							<div class="left-text">
								<h3 class="h3 h3s">${arrpro1[i+1].h}</h3>
								<p class="p1 p1s">${arrpro1[i+1].p1}</p>
							</div>
							<div class="right-show">
								<p class="p2 p2s">
									<span class="numA1 numA1s">
										<span class="sig sigs">￥</span>
										<span class="numB numBs">${arrpro1[i+1].nup1}</span>
										<span class="QI QIs"></span>
									</span>
									${arrpro1[i+1].nup2}
								</p>
								<div class="bt bts">立即购买</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="blank"></div>`
			).insertBefore($('.blank3'));
			i++
		} else if (i == 14) {
			$(
				`<div class="pro-f1">
					<div class="pro-p1">
						<div class="pro-p1img"><img src="${arrpro1[i].img}" class="imgS"></div>
						<div class="item-cn">
							<h3 class="h3">${arrpro1[i].h}</h3>
							<p class="p1">${arrpro1[i].p1}</p>
							<p class="p2">
								<span class="numA1">
									<span class="sig">￥</span>
									<span class="numB">${arrpro1[i].nup1}</span>
									<span class="QI"></span>
								</span>
								${arrpro1[i].nup2}
							</p>
							<div class="bt">立即购买</div>
						</div>
					</div>
				</div>
				<div class="blank"></div>`
			).insertBefore($('.blank4'));
		}
	}
	window.onscroll = function() {
		if ($(window).scrollTop() > 930) {
			$('.back').css('display', 'block');


		} else {
			$('.back').css('display', 'none');

		}
	}
})
