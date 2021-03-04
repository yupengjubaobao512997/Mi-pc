$(function() {
	$('.logos').hover(function() {
		$('.logo2').stop().animate({
			left: 55
		}, 200);
		$('.logo1').stop().animate({
			left: 0
		}, 200);
	}, function() {
		$('.logo2').stop().animate({
			left: 0
		}, 200);
		$('.logo1').stop().animate({
			left: -55
		}, 200);
	})




	var arrF = [{
			num: 0,
			img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/57433a4b991b2a2ddc889f2d8d434655.jpg',
			p1: '小米巨能写中性笔10支装',
			pice: '9.99元',
			topice: '9.99',
			p3: '112.7万人好评',
			count: 1
		},
		{
			num: 1,
			img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg',
			p1: '小米小爱触屏音箱',
			pice: '199元',
			topice: '199',
			p3: '27万人好评',
			count: 1
		},
		{
			num: 2,
			img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fc35cf0af915a9e60f5d4ea220521ab.jpg',
			p1: '小米耳机',
			pice: '29元',
			topice: '29',
			p3: '300万人好评',
			count: 1
		}
	]

	arrF.map(function(item) {

		$(
			`<div class="list_item">
							<div class="col col-check">
								<input type="checkbox" name="" id="" class="cartListCheck" value="" />
							</div>
							<div class="col col-img">
								<img src="${item.img}" alt="">
							</div>
							<div class="col col-name">
								<h3 class="col-nameh3">${item.p1}</h3>
							</div>
							<div class="col col-price">
								<div class="price-dan"><span>${item.pice}</span></div>
							</div>
							<div class="col col-num">
								<div class="framenum">
									<button type="button" class="subtract">-</button>
									<input type="text" name="" id="numint" class = "tonum" value="${item.count}" />
									<button type="button" class="add">+</button>
								</div>
							</div>
							<div class="col col-total"><span>${parseFloat(item.topice)}</span>元</div>
							<div class="col col-action">
								<div class="delete">
									删除
								</div>
							</div>
						</div>`
		).appendTo($('.con-box-body'));
	})
	var arrC = [];
	var count = 0;
	$('.cartListCheck').click(function() {
		var index = $('.cartListCheck').index(this)
		console.log(index)
		if (this.checked) {
			count++;
			arrC.push(arrF[index]);
		} else {
			count--;
			var i = arrC.indexOf(arrF[index]);
			arrC.splice(i, 1);
		}
		if (count == arrF.length) {
			$('#cartListAllSel')[0].checked = true;
		} else {
			$('#cartListAllSel')[0].checked = false;
		}
		changeTotalPrice();
	})
	$('#cartListAllSel').click(function() {
		if (this.checked) {
			$('.cartListCheck').prop('checked', true);
			arrC = arrF;
			console.log(arrC)
		} else {
			$('.cartListCheck').prop('checked', false);
			arrC = [];
		}
		changeTotalPrice();
	})
	$('.subtract').click(function() {
		var index = $('.subtract').index(this);
		arrF[index].count--;
		if (arrF[index].count <= 0) {
			arrF[index].count = 0;
		}
		$('.tonum').eq(index).val(arrF[index].count);
		same(index);
		changeTotalPrice();
	})
	$('.add').click(function() {
		var index = $('.add').index(this);
		arrF[index].count++;
		// if (arrF[index].count <= 0) {
		// 	arrF[index].count = 0;
		// }
		$('.tonum').eq(index).val(arrF[index].count);
		same(index);
		changeTotalPrice();
	})
	$('.delete').click(function() {
		var index = $('.delete').index(this);
		$('.list_item')[index].remove();
		var i = arrC.indexOf(arrF[index]);
		arrC.splice(i, 1);
		arrF.splice(index, 1);
		changeTotalPrice();
	})

	function same(index) {
		arrF[index].topice = arrF[index].count * parseFloat(arrF[index].pice);
		$('.col-total span').eq(index).html(arrF[index].topice);
	}

	function changeTotalPrice() {
		var total = 0;
		for (var i = 0; i < arrC.length; i++) {
			total += parseFloat(arrC[i].topice);
		}
		$('.total').html(total);
	}





































	arrF.map(function(item) {
		$(
			`<li class="list-pro">
							<div class="proimg liproimg"><img src="${item.img}" ></div>
							<p class="proname liproname">${item.p1}</p>
							<p class="proprice liproprice">${item.pice}</p>
							<p class="prohp lihp">${item.p3}</p>
							<div class="addcart liaddcart">加入购物车</div>
						</li>`
		).appendTo('.proul')
	})






































})
