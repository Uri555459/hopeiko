$(document).ready(function () {
	// !=========== Slider
	$('.header-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000
	});
	// !================ Loader
	if ('.slick-initialized') {
		$('.header-slider').css('display', 'block');
	}

	// !============= Mask input phone

	$(".feedback__form-mask").mask("+7 (999) 999-99-99");

	// !============= Modal
	const $modal = $('.modal-overlay');
	const $body = $('body');
	$('.modal-btn').on('click', function (e) {
		e.preventDefault();
		$modal.addClass('active');
		$body.css('overflow', 'hidden')
	});

	$('.modal-close').on('click', function (e) {
		$modal.removeClass('active');
		$body.css('overflow', 'scroll')
	});

	// !=================== Smooth scrolling
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({ scrollTop: bl_top }, 700);
		return false;
	});

	// !============ Mobile menu
	$('.mobile-btn').on('click', function () {
		$('.header__nav').toggleClass('active');
		if ($('.header__nav').hasClass('active')) {
			$('.header__nav').slideDown();
		}
		else {
			$('.header__nav').slideUp();
		}
	});
	// !============ Mobile menu auto close
	$('.header__nav a').on('click', function (e) {
		if ($('.header__nav a').attr('data-target') === 'anchor') {
			$('.header__nav').removeClass('active');
			$('.header__nav').slideUp();
		}
	});
	

});



