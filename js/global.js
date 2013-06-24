
$(document).ready(function() {
	var menu;
	if ($(window).width() < 560) {

		$("header").css({height : 68});
		menu = 0;
	}
	$(window).resize(function() {
		if ($(window).width() < 560) {
			$("header").css({height : 68});
			menu = 0;
		}
	});
	$('#dropdown').click(function(){
	if(menu == 0){
		$('header').stop().animate({height: 316});
		menu = 1;
		}else{
		$('header').stop().animate({height: 68});
		menu = 0;
		}
});

	$(function(){
		  $("#slides").slidesjs({
			width: 1280,
			height: 420
		  });
		});
});

