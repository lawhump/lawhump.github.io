function changeButton() {
	var cta		= document.querySelector('.cta');
	cta.className += ' flat';
	cta.innerHTML = 'Hit Me Up'
	cta.setAttribute('href', 'mailto:lawrenceh1993@gmail.com');
}

function ctaHandler () {
	var me 		= document.querySelector('.me img');
	var blurb = document.querySelector('.blurb');

	me.className += 'shrink';
	$('.blurb').fadeIn({
			'duration': 200,
			'complete': changeButton
	});
	$('.blurb').removeClass('hidden');
}

function showInterest () {
	var interests = ["data visualizations", "rock climbing", "ideating",
	"triangles", "eclectic music", "geometric design", "Radiolab",
	"Ruby", "adventuring", "dancing", "driving at night", "coffee", "meeting new people",
	"India Pale Ales", "Java", "being barefoot", "minimalism", "working with talented people",
	"Orbit Wintermint gum", "taking public transportation", "playing with dogs",
	"board games", "a tasteful romcom"];

	var len = interests.length;
	var index = Math.floor(Math.random() * (len));
	var interest = interests[index];

	var interestSpan = document.querySelector('.interest');
	interestSpan.innerHTML = interest;
}

function fadeMeIn() {
	document.querySelector('.me').style.opacity = 1;
}

(function() {
	document.querySelector('.cta').onclick = ctaHandler;
	document.querySelector('.interest').onclick = showInterest;

	fadeMeIn();
	showInterest();
})();

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
