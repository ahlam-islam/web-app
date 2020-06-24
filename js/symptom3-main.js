$(".close-meun").click(function () {
  $(".menu-layout").fadeOut(500);
});

$(".open-layout").click(function () {
    $(".menu-layout").css("display", "flex");
   $(".menu-layout").fadeIn(500);
})

//load

$(document).ready(function () {
 
  $(".intro h4").fadeIn(1000, function () {
    $(".quetion .lefy-cornaer").slideDown(1000, function () {
      $(".content").slideDown(2000)
    })
  });
})