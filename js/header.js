/* ヘッダー：途中から背景色を入れる */
$(window).scroll(function () {
  if (!$(".bl_toggleBtn").hasClass("is_close")) {
    if ($(window).height() < $(window).scrollTop()) {
      $(".ly_header").addClass("ly_header__bg");
    } else {
      $(".ly_header").removeClass("ly_header__bg");
    }
  }
});
