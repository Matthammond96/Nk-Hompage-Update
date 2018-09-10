  jQuery(document).ready(function() {


    let up = 91;
    var count = 1;

    var firstLaunch = true;

    var stage1 = 0;
    var stage2 = 91;
    var stage3 = 182;

    function textAnimation() {
      // $(".info-slide-1").removeClass('active');
      //
      //

      //
      // setTimeout(function(){
      //     $(".info-slide-2").addClass('active');
      //   // $(".info-positioning.active").css('opacity', 0);
      //   // $(".info-positioning.active").removeClass('active');
      //   // setTimeout(function(){
      //   //   $(".info-slide-2").addClass('active');
      //   //   $(".info-positioning.active").fadeTo( 500, 1);
      //   // }, 500);
      // }, 2000);
    }
    textAnimation();

    $(".sliderControl").click(function(event) {

      $(".sliderControl").removeClass('active');
      $(this).addClass('active');

      let windowWidth = $(window).width();

      let clickNumber = jQuery(this).attr("data-scrollNum");
      count = clickNumber;

      console.log(clickNumber);

      switch (clickNumber) {
        case "1":

          stage1 = 0 + "%";
          $(".carousel-item-1").css("left", stage1);
          $(".info-slide-1").css("left", "5%");
          if (windowWidth < 850) {
            stage2 = 100 + "%";
          } else {
            stage2 = 91 + "%";
          }

          $(".carousel-item-2").css("left", stage2);
          $(".info-slide-2").css("left", "105%");
          if (windowWidth < 850) {
            stage3 = 200 + "%";
          } else {
            stage3 = 182 + "%";
          }
          $(".carousel-item-3").css("left", stage3);
          $(".info-slide-3").css("left", "205%");
          return;
        case "2":
          if (windowWidth < 850) {
            stage1 = -100 + "%";
          } else {
            stage1 = -91 + "%";
          }
          $(".carousel-item-1").css("left", stage1);
          // $(".info-slide-1").css("left", "-105%");
          stage2 = 0 + "%";
          $(".carousel-item-2").css("left", stage2);
          // $(".info-slide-2").css("left", "5%");
          if (windowWidth < 850) {
            stage3 = 100 + "%";
          } else {
            stage3 = 91 + "%";
          }
          $(".carousel-item-3").css("left", stage3);
          // $(".info-slide-3").css("left", "105%");
          return;
        case "3":
          if (windowWidth < 850) {
            stage1 = -200 + "%";
          } else {
            stage1 = -182 + "%";
          }
          $(".carousel-item-1").css("left", stage1);
          // $(".info-slide-1").css("left", "-205%");
          if (windowWidth < 850) {
            stage2 = -100 + "%";
          } else {
            stage2 = -91 + "%";
          }
          $(".carousel-item-2").css("left", stage2);
          // $(".info-slide-2").css("left", "-105%");
          stage3 = 0 + "%";
          $(".carousel-item-3").css("left", stage3);
          // $(".info-slide-3").css("left", "5%");
          return;
        default:
          return;
      }
      stage1 = 0;
      stage2 = 91;
      stage3 = 182;
    });

    function heroTimer() {

      if (firstLaunch != true) {
        count ++;

        $(".sliderControl:nth-child(" + count + ")").trigger('click');
        console.log(count);
      }

      firstLaunch = false;

      timer = setTimeout(heroTimer, 5000);
    }
    heroTimer();
  });

  $(window).scroll(function(event) {
    var windowTop = $(window).scrollTop();
    var title = $(".main-hero").offset().top;
    var wrapBot = $(".main-hero").offset().top + $(".main-hero").height();
    var titleHeight = $(".main-hero .wrap").height();

    console.log("windowTop: " + windowTop);
    console.log("title: " + title);

    if ( title - 50 < windowTop && (wrapBot - titleHeight) - 120 > windowTop) {
      $(".main-hero .wrap").css("top", windowTop);
    }


    var revealPos = $('.stories').offset().top;
    var revealPos2 = $('.story-block-wide').offset().top;

    if ( revealPos - 300 < windowTop ) {
      $('.story-block-tall').fadeTo('500', 1, function() {
        $('.story-block-short').fadeTo('500', 1);
      });
    }

    if (revealPos2 - 300 < windowTop) {
      $('.story-block-wide').fadeTo('500', 1);
    }

  });
