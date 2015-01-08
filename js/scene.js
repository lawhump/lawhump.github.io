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
    var cw = $('#me').width();
    $('#me').css({'height':cw+'px'});
}

$(window).resize(resizescene).ready(resizescene);
$(window).load(function(){
    var cw = $('#me').width();
    $('#me').css({'height':cw+'px'});
});

$("#linkedin").click(function() {
    window.location.href = 'http://www.linkedin.com/in/lawrencehumphrey';
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