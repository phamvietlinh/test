// Dung de hover qua phan product thi se hien ra menu ben duoi
$(function(){
	$('ul.nav li.dropdown').hover(function(){
		$(this).addClass('open');
		$('.dropdown-menu', this).fadeIn();
	}, function(){
		$(this).removeClass('open');
		$('.dropdown-menu', this).fadeOut('fast');
	});
});