$(document).ready(function() {
	$(window).on("scroll", function() {
		$scrollD = $(window).scrollTop();

		if($scrollD > 100) {
			var nav = $(".navtyle");
			nav.addClass("scrolledNav");
		}else {
			var nav = $(".navtyle");
			nav.removeClass("scrolledNav");	
		}
	});
});