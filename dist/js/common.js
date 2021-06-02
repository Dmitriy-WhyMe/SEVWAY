(function ($) {
	$(document).ready(function () {
		$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav',
		  });
		  $('.slider-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			focusOnSelect: true
		  });
		  $('.slider-mob').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			prevArrow: $('.arrow_prev'),
			nextArrow: $('.arrow_next')
		  });
	});
})(jQuery);