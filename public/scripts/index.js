$(".nav-bar-img").click(function(){
  console.log("Hello");
  $(this).toggleClass("nav-bar-img-margin");
  $(".nav-bar").toggleClass("nav-bar-height");
  $(".nav-side-link").toggleClass("nav-side-link-display");
});
