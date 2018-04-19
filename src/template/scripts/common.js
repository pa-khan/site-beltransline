$(document).ready(function($) {

	$('.input_tel input').mask('+7 (999) 999-99-99');
	
	$('.search__btn-show').click(function(event) {
		$('.search__wrap').addClass('search__wrap_toggle');
		$(this).hide();
	});

	$('.clients__list').slick({
		slidesToShow: 5,
		slidesToScroll: 1
	})


	var portfolioImg = $('.portfolio__img'),
			portfolioImgs = $('.portfolio__imgs');

	portfolioImg.slick({
		asNavFor: portfolioImgs
	});

	portfolioImgs.slick({
		asNavFor: portfolioImg,
		slidesToShow: 7,
		arrows: false
	});


	$('.team__list').slick({
		slidesToShow: 2
	})

	$(".nano").nanoScroller();
});
