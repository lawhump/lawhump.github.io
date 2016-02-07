function ctaHandler () {
	console.log('bitchin');
	var me 		= document.querySelector('.me img');
	var blurb = document.querySelector('.blurb');
	var cta		= document.querySelector('.cta');

	// me.className += 'shrink';
	blurb.className += ' show fadeIn';
	cta.className += ' flat';
}

function showInterest () {
	var interests = ["data visualizations", "rock climbing", "ideating",
	"triangles", "eclectic music", "geometric design", "Radiolab",
	"Ruby", "adventuring", "dancing", "driving at night", "coffee", "meeting new people",
	"India Pale Ales", "Java", "being barefoot"];

	console.log(interests);

	var len = interests.length;
	var index = Math.floor(Math.random() * (len + 1));
	var interest = interests[index];

	var interestSpan = document.querySelector('.interest');
	interestSpan.innerHTML = interest;
}

(function() {
	var learnMore = document.querySelector('.cta');
	// learnMore.onclick = ctaHandler;

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
