var currDevice = document.querySelector('.right .selected');
var address = document.querySelector('.address');
var iframe = document.getElementById('iframe');
var dropdown = document.querySelector('.dropdown');
var selectedProj = dropdown.querySelector('.selected');
var currentDesc = document.querySelector('.descriptions .' + selectedProj.dataset.project);

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

window.onresize = function(e) {
  console.log(e.target.outerWidth);
  var width = e.target.outerWidth;

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
};

document.querySelector('.address').addEventListener('focus', function(e) {
  console.log(e);
});
