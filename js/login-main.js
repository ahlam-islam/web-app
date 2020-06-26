$(".close-meun").click(function () {
    $(".menu-layout").fadeOut(500);
  });
  
  $(".open-layout").click(function () {
      $(".menu-layout").css("display", "flex");
     $(".menu-layout").fadeIn(500);
  })

  
$(document).ready(function () {
    $(".cover .content h4").fadeIn(1000, function () {
        $(".cover .content h5").slideDown(1000, function () {
            $(".cover .content input").slideDown(1000, function () {
                $(".cover .content .inter").animate( {"opacity" : "1"}, 1000, function () {
                    $(".cover .content p").slideDown(1000)
                })
            })
        })
    })
})