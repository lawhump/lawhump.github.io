var interests = ["data visualizations", "rock climbing", "ideating",
"triangles", "eclectic music", "geometric design", "Radiolab",
"Ruby", "adventuring", "dancing", "driving at night", "coffee", "meeting new people",
"India Pale Ales", "Java", "being barefoot", "minimalism", "working with talented people",
"Orbit Wintermint gum", "taking public transportation", "playing with dogs",
"board games", "a tasteful romcom", "browsing Dribbble", "ice skating",
"oatmeal for breakfast", "lending a helping hand"];

var len = interests.length;
var index = Math.floor(Math.random() * (len));

var currDevice = document.querySelector('.right .selected');
var address = document.querySelector('.address');
var iframe = document.getElementById('iframe');
var dropdown = document.querySelector('.dropdown');
var home = document.querySelector('.home');
var projectPage = document.querySelector('.project-page-wrapper');

var selectedProj;
// var selectedProj = dropdown.querySelector('.selected');
var currentDesc;
// var currentDesc = document.querySelector('.descriptions .' + selectedProj.dataset.project);

var tabletWidth = 0.8*1280 + 30;
var laptopWidth = 0.8*768 + 30;

function changeButton() {
	var cta		= document.querySelector('.cta');
	cta.classList.add('flat');
	cta.textContent = 'Hit Me Up'
	cta.setAttribute('href', 'mailto:lawrenceh1993@gmail.com');
}

function ctaHandler () {
	var me 		= document.querySelector('.me img');
	var blurb = document.querySelector('.blurb');

	// TODO animate me first, setTimeout for the blurb

	me.classList.add('shrink');
  // This can be done with CSS
	$('.blurb').fadeIn({
			'duration': 200,
			'complete': changeButton
	});
	$('.blurb').removeClass('hidden');
}

function showInterest () {
	var interest = interests[index];

	var interestSpan = document.querySelector('.interest');
	interestSpan.textContent = interest;
	index = (index+1)%len;
}

function fadeMeIn() {
	document.querySelector('.me').classList.add('fadeIn');
}

function resizeDevice(w) {
  var width = w;

  var phone = document.querySelector('.right .fa-mobile');
  var tablet = document.querySelector('.right .fa-tablet');
  var selected = document.querySelector('.right .selected');

  if(width < 1300) {
    if(width < 1030) {
      selected.classList.remove('selected');
      phone.classList.add('selected');

      var iframeContainer = document.querySelector('.iframe-container .container');
      iframeContainer.classList.remove('tablet');
      iframeContainer.classList.add('phone');

      currDevice = phone;
    }
    else {
      selected.classList.remove('selected');
      tablet.classList.add('selected');

      var iframeContainer = document.querySelector('.iframe-container .container');
      iframeContainer.classList.remove('laptop');
      iframeContainer.classList.add('tablet');

      currDevice = tablet;
    }
  }
}

(function() {
	fadeMeIn();
	showInterest();

	resizeDevice(window.outerWidth);

	// document.querySelector('.alert').classList.add('show');
})();

document.querySelector('.cta').onclick = ctaHandler;
document.querySelector('.interest').onclick = showInterest;

document.querySelector(".portfolio").addEventListener("click", function(e) {
	if(e.target && e.target.nodeName == "IMG") {
		var me = document.querySelector('.me');
		var portfolio = document.querySelector('.portfolio');

    window.scrollTo(0, 0);

		var visibleAddress = e.target.dataset.projectUrl.split('http://')[1];
    address.value = visibleAddress;

		selectedProj = dropdown.querySelector('[data-project="'+e.target.dataset.name+'"]');
		selectedProj.classList.add('selected');
		currentDesc = document.querySelector('.descriptions .' + e.target.dataset.name);
    currentDesc.classList.add('fadeIn');
		currentDesc.removeAttribute('hidden');

    projectPage.removeAttribute('hidden');
		projectPage.classList.add('show');
    // window.setTimeout("projectPage.classList.add('show');", 300);
    home.setAttribute('hidden', '');

    iframe.parentNode.classList.add('active');

    var loadSite = function () { iframe.src = e.target.dataset.projectUrl; };
    window.setTimeout(loadSite, 1250);
	}
});

document.querySelector(".top-bar .right").addEventListener("click", function(e) {
	if(e.target && e.target.nodeName == "I") {
    var iframeContainer = document.querySelector('.'+currDevice.dataset.device);
    currDevice.classList.remove('selected');
    e.target.classList.add('selected');
    iframeContainer.classList.remove(currDevice.dataset.device);
    iframeContainer.classList.add(e.target.dataset.device);
    currDevice = e.target;
	}
});

document.querySelector(".dropdown").addEventListener("click", function(e) {
	if(e.target && e.target.nodeName == "LI") {
    selectedProj.classList.remove('selected');
    e.target.classList.add('selected');
    selectedProj = e.target;
    var visibleAddress = e.target.dataset.url.split('http://')[1];
    address.value = visibleAddress;
    iframe.src = e.target.dataset.url;

    currentDesc.classList.add('fadeOut');
    currentDesc.setAttribute('hidden', '');

    currentDesc = document.querySelector('.descriptions .' + e.target.dataset.project);
    currentDesc.classList.add('fadeIn');
    currentDesc.removeAttribute('hidden');
	}
});

document.querySelector(".left button").addEventListener("click", function(e) {
  iframe.parentNode.classList.remove('active');
  currentDesc.classList.add('fadeOut');
  currentDesc.setAttribute('hidden', '');
	projectPage.classList.remove('show');
	projectPage.setAttribute('hidden', '');
  home.removeAttribute('hidden');
  iframe.src = "";
});

window.onresize = function(e) {
	resizeDevice(e.target.outerWidth);
};

$("input:text").focus(function() { $(this).select(); } );
document.querySelector('.address').addEventListener('focus', function(e) {
  console.log(e);
});
