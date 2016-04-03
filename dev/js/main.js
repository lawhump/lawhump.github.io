function changeButton() {
	var cta		= document.querySelector('.cta');
	cta.className += ' flat';
	cta.innerHTML = 'Hit Me Up'
	cta.setAttribute('href', 'mailto:lawrenceh1993@gmail.com');
}

function ctaHandler () {
	var me 		= document.querySelector('.me img');
	var blurb = document.querySelector('.blurb');

	// TODO animate me first, setTimeout for the blurb

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
