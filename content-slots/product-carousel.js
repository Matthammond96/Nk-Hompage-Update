$(document).ready(function() {

  $(".productControl").click(function(event) {
    // event.preventDefault();

    $(".productControl").removeClass('active');
    $(this).addClass('active');

    let page = $(this).attr('data-scrollNum');

    if (page == 1) {
      $('.new-arrivals').children('.wrap').css("left", "-0");
    } else {
        if ($(window).width() < 850 && $(window).width() > 600) {
          $('.new-arrivals').children('.wrap').css("left", "-33.33%");
        } else {
          $('.new-arrivals').children('.wrap').css("left", "-100%");
        }
    }
  });

});
