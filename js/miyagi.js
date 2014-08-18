jQuery(document).ready(function ($) {

function addangels() {

    var newangel = '<div id="angle1" class="angel"></div>';
    $('body').append(newangel);

    $('#angle1').fadeIn();

    $('#angle1').css('left', Math.random() * screen.width);
    $('#angle1').css('top', Math.random() * screen.height);
var randomOption = {
    top: 50,
    left: 50,
    right: screen.width - 50,
    bottom: screen.height - 50,
    speed: 6000
};
    $('#angle1').sprite({
        fps: 12,
        no_of_frames: 2
    })
        .spRandom(randomOption)
        .active();

    $('#angle1').mouseover(function () {
        $(this).spStopRandom();
    });

    $('#angle1').mouseout(function () {
        $(this).spRandom(randomOption);
    });

}
    addangels();
});
