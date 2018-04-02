$(function () {
	
	$('.zdo_drawer_button').click(function () {
		$(this).toggleClass('active');
		$('.zdo_drawer_bg').fadeToggle();
		$('nav').toggleClass('open');
	})
	$('.zdo_drawer_bg').click(function () {
		$(this).fadeOut();
		$('.zdo_drawer_button').removeClass('active');
		$('nav').removeClass('open');
	});
})