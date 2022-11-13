//Side - bar
$(".sidebar-toggler").click(function(){
  const sidebar = $(".sidebar-menu");
  if(sidebar)
    sidebar.toggleClass("my-sidebar-open");
});

//nav - bar
var isNavOpen = false;
function DisplayLinks(){
  isNavOpen = !isNavOpen;
  $(".nav-bar-img").toggleClass("nav-bar-img-margin");
  $(".nav-bar").toggleClass("nav-bar-height");
  $(".nav-side-link").toggleClass("nav-side-link-display");
}

$(".nav-manager").click(function(){
  DisplayLinks();
});

$(".nav-side-link").click(()=>{
  if(isNavOpen)
    DisplayLinks();
});
