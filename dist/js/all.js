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
var selectedProj;
// var selectedProj = dropdown.querySelector('.selected');
var currentDesc;
// var currentDesc = document.querySelector('.descriptions .' + selectedProj.dataset.project);

var tabletWidth = 0.8*1280 + 30;
var laptopWidth = 0.8*768 + 30;

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
	var interest = interests[index];

	var interestSpan = document.querySelector('.interest');
	interestSpan.innerHTML = interest;
	index = (index+1)%len;
}

function fadeMeIn() {
	document.querySelector('.me').classList.add('fadeIn');
}

function showMarkup(data) {
	document.querySelector('body').innerHTML += data;
	console.log(data);
}

function getMarkup(url, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      callback(xmlHttp.responseText);
    }
  }
  xmlHttp.open('GET', url, true); // true for asynchronous
  xmlHttp.send(null);
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
	document.querySelector('.cta').onclick = ctaHandler;
	document.querySelector('.interest').onclick = showInterest;

	fadeMeIn();
	showInterest();

	resizeDevice(window.outerWidth);

	document.querySelector('.alert').classList.add('show');
})();


document.querySelector(".portfolio").addEventListener("click", function(e) {
	if(e.target && e.target.nodeName == "IMG") {
		var me = document.querySelector('.me');
		var portfolio = document.querySelector('.portfolio');

		// change iframe src
		iframe.src = e.target.dataset.projectUrl;

    document.querySelector('.overlay').classList.add('active');

		// add value to input
		var visibleAddress = e.target.dataset.projectUrl.split('http://')[1];
    address.value = visibleAddress;
		// show right description
		selectedProj = dropdown.querySelector('[data-project="'+e.target.dataset.name+'"]');
		selectedProj.classList.add('selected');
		currentDesc = document.querySelector('.descriptions .' + e.target.dataset.name);
    currentDesc.classList.add('fadeIn');
		currentDesc.removeAttribute('hidden');

		document.querySelector('.project-page-wrapper').classList.add('show');
		document.querySelector('body').classList.add('noscroll');

    iframe.parentNode.classList.add('active');
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
	document.querySelector('.project-page-wrapper').classList.remove('show');
	document.querySelector('body').classList.remove('noscroll');

  document.querySelector('.overlay').classList.remove('active');
});

document.querySelector(".alert .dismiss").addEventListener("click", function(e) {
	// console.log(this);
	this.parentNode.classList.remove("show");
});

window.onresize = function(e) {
	resizeDevice(e.target.outerWidth);
};

// $("input:text").focus(function() { $(this).select(); } );
document.querySelector('.address').addEventListener('focus', function(e) {
  console.log(e);
});

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
