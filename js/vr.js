/**
 * Created by vincent on 6/9/18.
 */

$(function(){

    // init aos
    AOS.init();

    // init
    var scroll = new SmoothScroll('a[href*="#"]');

    // parallax
    $('.parallax').each(function(i, e){
        var instance = new Parallax(this, {
            relativeInput: true
        });

        $(this).data('parallax', instance);
    });


});