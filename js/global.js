

$(document).ready(function() {
    var menu = 0;
	$('#dropdown').click(function(){
	if(menu == 0){
		$('header').css({"height":"auto"});
		menu = 1;
		}else{
		$('header').css({"height":"68"});
		menu = 0;
		}
});
});

