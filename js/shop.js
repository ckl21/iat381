

$(document).ready(function() {

	if ($(window).width() > 1000) {
		$(".itemInfo").css({"marginTop" : "0px"});
	}

    $(".item").hover(function(){
		if ($(window).width() > 1000) {
			$(this).children(".itemInfo").stop().animate({ marginTop: '-75px'}, 250);
		}
	},function(){
		if ($(window).width() >1000) {
			$(this).children(".itemInfo").stop().animate({ marginTop: '0px'}, 250);
		}
	});
	$(window).resize(function() {
		if ($(window).width() < 1000) {
			$(".itemInfo").css({"marginTop" : "-75px"});
		}else{
			$(".itemInfo").css({"marginTop" : "0px"});
		}
	});

});
