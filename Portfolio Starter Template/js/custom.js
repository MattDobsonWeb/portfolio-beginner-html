$(document).ready(function () {
  // add header scroll target
  $(document).on("scroll", function () {
    var docHeight = $(window).height();

    if ($(document).scrollTop() >= docHeight) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });

  // mobile nav js
  $(".hamburger").on("click", function (e) {
    if (!$(".mobile-nav").hasClass("active")) {
      $(".mobile-nav").addClass("active");
      $(".mobile-nav-links").slideDown();
    } else {
      $(".mobile-nav-links").slideUp();
      $(".mobile-nav").removeClass("active");
    }
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).is(".fa-bars") &&
      !$(e.target).is(".hamburger") &&
      $(".mobile-nav").hasClass("active")
    ) {
      $(".mobile-nav-links").slideUp();
      $(".mobile-nav").removeClass("active");
    }
  });

  // show the portfolio modal on portfolio item click
  $(".portfolio-item").on("click", function () {
    var image = $(this).find("img");

    // remove all elements from portfolio modal
    $(".portfolio-modal .image-wrapper").empty();
    // add relevant image
    $(".portfolio-modal .image-wrapper").append(
      `<img src="${image.attr("src")}"/>`
    );
    // show the modal
    $(".portfolio-modal").fadeIn(300);
    $("body").addClass("no-scroll");
  });

  // close modal on click anywhere but the image
  $(".portfolio-modal").on("click", function (e) {
    if (!$(e.target).is("img")) {
      $(".portfolio-modal").fadeOut(300);
      $("body").removeClass("no-scroll");
    }
  });

  // close modal on esc click
  $(document).on("keydown", function (event) {
    if (event.key == "Escape") {
      $(".portfolio-modal").fadeOut(300);
      $("body").removeClass("no-scroll");
    }
  });

  // add active class during scroll to nav-links
  $(window)
    .scroll(function () {
      var windscroll = $(window).scrollTop();
      if (windscroll >= $(window).height()) {
        $(".nav-section").each(function (i) {
          if ($(this).position().top - 1 <= windscroll) {
            $(".nav-link a.active").removeClass("active");
            $(".nav-link a").eq(i).addClass("active");
          }
        });
      } else {
        $(".nav-link a.active").removeClass("active");
        $("nav a:first").addClass("active");
      }

      if ($(".mobile-nav").hasClass("active")) {
        $(".mobile-nav-links").slideUp();
        $(".mobile-nav").removeClass("active");
      }
    })
    .scroll();
});
