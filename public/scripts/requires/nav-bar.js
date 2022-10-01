$(".sidebar-toggler").click(function(){
  const sidebar = $(".sidebar-menu");

  if(sidebar)
  {
    sidebar.toggleClass("my-sidebar-open");
  }
});
