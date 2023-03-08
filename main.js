$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
    });
  });


  Fancybox.bind("#gallery a", {
    groupAll : true,
  });

  $(".burger-btn").on("click", function(){
    $(".header__menu").toggleClass("header__menu-show");
  });
