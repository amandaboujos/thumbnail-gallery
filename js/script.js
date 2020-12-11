$(".imgs img").click(function(){  

    $(".main").attr("src",$(this).attr("src").replace(".jpg"));
   
   });