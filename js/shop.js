

$(document).ready(function() {

	if ($(window).width() > 1000) {
		$(".itemInfo").css({"display": "none"});
	}

    $(".item").hover(function(){
		if ($(window).width() > 1000) {
			$(this).children(".itemInfo").stop().fadeIn('fast');
		}
	},function(){
		if ($(window).width() >1000) {
			$(this).children(".itemInfo").stop().fadeOut('fast');
		}
	});
	$(window).resize(function() {
		if ($(window).width() < 1000) {
			$(".itemInfo").css({"display": "block"});
		}else{
			$(".itemInfo").css({"display": "none"});
		}
	});

});
