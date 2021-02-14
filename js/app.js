document.addEventListener("DOMContentLoaded", function () {

	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();

	$('.header__menu-mobile').click(function (event) {
		$('.header__menu-mobile, .header__menu-list').toggleClass('active');
	});

	$('.clients__carousel').slick({
		speed: 500,
		fade: true,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 520,
				settings: {
					arrows: false
				}
			}
		]
	});


});
