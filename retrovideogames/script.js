$(document).ready(function() {
  
  $(".doom").mouseenter(function() {
    $(".doom").addClass("show doomg");
  });

  $(".doom").mouseleave(function() {
    $(".doom").removeClass("show doomg");
  });
   $(".conkersg").mouseenter(function() {
    $(".conkersg").addClass("show");
  });

  $(".conkers").mouseleave(function() {
    $(".conkers").removeClass("show conkersg");
});