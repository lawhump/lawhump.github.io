$( document ).ready(function() {
	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
		$('.landing').css("background", "url(../img/path_iphone.jpeg) no-repeat center center fixed");
	}

	window.onload = function () {
		$( ".anchor i" ).addClass('animated fadeInDown').removeClass('invisible');
	};

   $(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
						  scrollTop: target.offset().top
						}, 1000);
					return false;
				}
			}
		});
	});
});

