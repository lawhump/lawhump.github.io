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
