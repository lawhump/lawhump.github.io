
$(document).ready(function() {
    var interests = ["data visualization", "rock climbing", "the MEAN stack", "cooking", "cool css", "ecclectic music", "geometric design", "biking", "Python", "adventuring", "dancing", "driving at night", "coffee", "meeting new people", "India Pale Ales", "Java", "being barefoot"];
    var curr = 1;
    console.log(interests.length);

    $(".interest").html(interests[0] + ".")

    function cycle() {
        $(".interest").fadeTo(300, 0);
        setTimeout(function() {
            $(".interest").html(interests[curr] + ".");
            $(".interest").fadeTo(300, 1);

            curr = (curr+1)%interests.length;
            setTimeout(cycle, 2500);
        }, 800);
    }
    setTimeout(function() {
        $(".container").fadeTo(1500, 1);
        setTimeout(function() {
            $(".bio").fadeTo(2000, .8);
            setTimeout(cycle, 2800);
        }, 1200);
    }, 300);
});
