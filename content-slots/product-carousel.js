$(document).ready(function() {

  $(".productControl").click(function(event) {
    // event.preventDefault();

    let page = $(this).attr('data-scrollNum');

    if (page == 1) {
      $('.new-arrivals').children('.wrap').animate({left: "-0"}, 0.5);
    } else {

        if ($(window).width() < 850 && $(window).width() > 600) {
          $('.new-arrivals').children('.wrap').animate({left: "-33.33%"}, 0.5);
        } else {
          $('.new-arrivals').children('.wrap').animate({left: "-100%"}, 0.5);
        }
    }
  });

});
