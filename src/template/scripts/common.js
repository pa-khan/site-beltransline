$(document).ready(function($) {

	$('.input_tel input').mask('+375 (99) 999-99-99');
	
	$('.search__btn-show').click(function(event) {
		$('.search__wrap').addClass('search__wrap_toggle');
		$(this).hide();
	});

	$('.clients__list').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1210,
			settings: {
				slidesToShow: 3
			}}, {
			breakpoint: 787,
			settings: {
				slidesToShow: 1
			}
		}]
	})


	var portfolioImg = $('.portfolio__img'),
			portfolioImgs = $('.portfolio__imgs');

	portfolioImg.slick({
		asNavFor: portfolioImgs
	});

	portfolioImgs.slick({
		asNavFor: portfolioImg,
		slidesToShow: 7,
		arrows: false,
		responsive: [{
			breakpoint: 1022,
			settings: {
				slidesToShow: 4
			}
		}]
	});


	$('.team__list').slick({
		slidesToShow: 2,
		responsive: [{
			breakpoint: 1210,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	$(".nano").nanoScroller();


	var mobileBtn = $('.mobile-btn'),
			mobileNav = $('.mobile-nav');

	mobileBtn.click(function(event) {
		$(this).toggleClass('mobile-btn_toggle');
		mobileNav.toggleClass('mobile-nav_toggle');
	});

	$('#review-write-file').change(function() {
		var value = $(this).val();

		$('.review-write__file p').html(value);
	});
});
