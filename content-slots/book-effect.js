$(document).ready(function() {
  $("#book-section").on('mousemove', function(e) {
    var mouseSide;

    if ($(window).width() > 850) {
      if ((e.pageX - this.offsetLeft) < ($(this).width() / 2) + 50) {
        mouseSide = 'L';
        $(".left-info").removeClass('hidden');
        $("#book-section").css("background-image", 'url(http://via.placeholder.com/350x150)');
        $(".right-info").addClass('hidden');
      } else {
        mouseSide = 'R';
        $(".right-info").removeClass('hidden');
        $("#book-section").css("background-image", 'url(https://www.queenstown.com/images/sobipro/blog/3852/img_a-winter-wonderland-landscape-photographers-queenstown-tour-1.jpg)');
        $(".left-info").addClass('hidden');

      }
      console.log(mouseSide);
    }

  });

  $(".leftSide").click(function(e) {
    e.preventDefault();
    $(".left-info").removeClass('hidden');
    $("#book-section").css("background-image", 'url(http://via.placeholder.com/350x150)');
    $(".right-info").addClass('hidden');
  });

  $(".rightSide").click(function(e) {
    e.preventDefault();
    $(".right-info").removeClass('hidden');
    $("#book-section").css("background-image", 'url(https://www.queenstown.com/images/sobipro/blog/3852/img_a-winter-wonderland-landscape-photographers-queenstown-tour-1.jpg)');
    $(".left-info").addClass('hidden');
  })
});
