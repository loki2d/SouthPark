$(function(){
var width = $(window).width();          // записываем данные об окне пользоателя
var height =  $(window).height();       // 

Resize();                               // ресайзим див в котором двигаются картинки.

    $(".i_menu li").click(function(){
        var linkName = $(this).attr("goto");
        $(".i_wBlock").animate({"margin-left": "-"+width+"px"}, 1000, function(){             
            Download_block(linkName);
        }); 
        
    });
    
    $(window).resize(function(){
        Resize();
    });
    $(".b_char-Cartman").click(function(e){
        speak( $(this) );
    })
});

function Resize(){
   var width = $(window).width();
   var height =  $(window).height();
   $(".b_wArea").each( function(kay){
       $(this).css({
            "width": width,
            "height": height,
            "background-size": "auto "+(height + 300)+"px"
       })
   });
   $(".b_uploadScreen").css({
       "width": width,
        "height": height,
        "background-size": "auto "+(height + 300)+"px"
   });
}


function Download_block(pageName){ // делаем запрос на данные к базе с помощю файла .php
     var page =  $(".b_"+pageName);
     var positionEl = page.offset();
     $(".i_wBlock").animate({"margin-left": "-"+(positionEl.left + $(window).width())+"px"}, 1000, function(){
        
     });
     
        
     
//     $.ajax({
//        type: "POST",
//        url: "ajax.php",
//        data: "page=keny",
//        success: function(json){
//            constrictorPage($.parseJSON(json)); 
//        }
//      });    
  }
  
  function speak(speaker){
      $(".e_Cartman-mount").css({"display": "block"});
        var snd = $(".Cartman_hi")[0];
        snd.play();
      $(".e_Cartman-mount").animate({
          "background-position": "-680px" 
      }, 4500, "linear", function(){
         $(".e_Cartman-mount").css({"display": "none", "background-position": "0px 0px" });  
      });
  }
 