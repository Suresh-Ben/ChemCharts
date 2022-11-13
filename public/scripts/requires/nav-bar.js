$(".sidebar-toggler").click(function(){
  const sidebar = $(".sidebar-menu");
  if(sidebar)
    sidebar.toggleClass("my-sidebar-open");
});

$(".nav-bar-img").click(function(){
  $(this).toggleClass("nav-bar-img-margin");
  $(".nav-bar").toggleClass("nav-bar-height");
  $(".nav-side-link").toggleClass("nav-side-link-display");
});
