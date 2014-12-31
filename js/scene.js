var resizescene = function() {
    // Get aspect ratio of window
    var aspectRatio = $(this).height() / $(this).width();
    if (aspectRatio > 1.0) {
        // Page is horizontal
        $("#scene").css({
            width: aspectRatio*140 + 40 + "%",
            height: "auto"
            });
        } else {
            $("#scene").css({
                width: "140%",
                height: "auto"
            });
        }
}

$(window).resize(resizescene).ready(resizescene);

$("#linkedin").click(function() {
    window.location.href = 'http://zylch.co/lhumphr2';
});

$("#github").click(function() {
    window.location.href = 'https://github.com/lawhump';
});

$("#resume").click(function() {
    alert( "Handler for .click() called." );
});

$("#spotify").click(function() {
    window.location.href = 'http://open.spotify.com/user/lawrencehumphrey';
});

$(document).ready(function() {
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
    
    $(".title").fadeIn(2000);
    $(".description").fadeIn(2000);
    $(".overlay").fadeIn(3000);
    $(".links-container").fadeIn(5000);
});