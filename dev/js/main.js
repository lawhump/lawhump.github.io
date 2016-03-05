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
	"India Pale Ales", "Java", "being barefoot"];

	var len = interests.length;
	var index = Math.floor(Math.random() * (len + 1));
	var interest = interests[index];

	var interestSpan = document.querySelector('.interest');
	interestSpan.innerHTML = interest;
}

function fadeMeIn() {
	document.querySelector('.me').style.opacity = 1;
}

(function() {
	var learnMore = document.querySelector('.cta');
	learnMore.onclick = ctaHandler;

	fadeMeIn();
	showInterest();
})();
