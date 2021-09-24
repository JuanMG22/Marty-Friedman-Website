$(document).ready(function () {

    /* Sticky Navigation */
    $(".js--noticias-section, .js--discografia-box, .js--gear-box").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass('sticky-nav');
        }
        else {
            $("nav").removeClass('sticky-nav');
        }
    });
});

