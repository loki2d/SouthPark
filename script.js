$(function(){
var width = $(window).width();          // записываем данные об окне пользоателя
var height =  $(window).height();       // 

Resize();                               // ресайзим див в котором двигаются картинки.

    $(".i_menu li").click(function(){      
        var $link = $(this);
        var linkName = $(this).attr("goto");
        var $menu = $(".b_menu");
            $menu.removeClass("home Cartman Kenny Stan Kail");
            $menu.addClass(linkName);
        
        Download_block(linkName);
        
            //
            $link.addClass("e_menu-active");
        
    });
    
    $(window).resize(function(){
        Resize();
    });
    $(".b_char-Cartman").click(function(e){
        speaking( $(this) );
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
     var page = $(".b_"+pageName);
     var positionEl = page.offset();
    if( positionEl.left != 0){
        var margin = $(".i_wBlock").css("margin-left");
        var slide = ( -((margin.substring(0, (margin.length)-2))*1) + positionEl.left);        
        $(".i_wBlock").animate({"margin-left": "-"+slide +"px"}, 1000);
    }
    
        
     
//     $.ajax({
//        type: "POST",
//        url: "ajax.php",
//        data: "page=keny",
//        success: function(json){
//            constrictorPage($.parseJSON(json)); 
//        }
//      });    
  }
  
  function speaking(speaker){
      
      $(".b_speak-bable-cartman").css({"display": "block"});
        var snd = document.getElementsByTagName("audio")[0];        
        snd.play();
      
      song(); 
             
  }
  
  function song(){ // анимация песенки.
          $("#Cartman-mount").css({"display": "block"});
            var conv = document.getElementById("Cartman-mount");      
            var mount =  conv.getContext('2d');
            conv.height = 10;
            conv.width = 20;
            var pic = new Image();
            pic.src = "img/wtf2.png"; 
            
          speak( 110, mount, pic);
          
         
          
  }
  
  function speak(time, mount, pic) {
      var i=0;
      var b = time;
      var coords = new Array( -10, -35, -65, -92, -132, -153, -65, -10, -132, -10, -35, -153, -35, -65, -92, -132, -153, -65, -10, -132, -10, -35, -153, -35, -65, -92, -132, -153, -65, -10, -132, -10, -35, -153, 
                                -10, -35, -65, -92, -132, -153, -65, -10, -132, -10, -35, -153, -35, -65, -92, -132, -153, -65, -10, -132, -10, -35, -153, -35, -65, -92, -132, -153, -65, -10, -132, -10, -35, -153,
                                -10, -35, -65, -92, -132, -153, -65, -10, -132, -10, -35, -153, -35, -65, -92, -132, -153, -65, -10, -132, -10, -35, -153, -35, -65, -92, -132, -153, -65, -10, -132, -10, -35, -153,
                                -10, -35, -65, -92, -132, -153, -65, -10, -132, -10, -35, -153, -35, -65, -92, -132, -153, -65, -10, -132, -10, -35, -153, -35, -65, -92, -132, -153, -65, -10, -132, -10, -35, -153,
                                -10, -35, -65, -92, -132, -153, -65, -10, -132, -10, -35, -153, -35, -65, -92, -132, -153, -65, -10, -132, -10, -35, -153, -35, -65, -92, -132, -153, -65, -10, -132, -10, -35, -153
        );
      
      function animation(i, mount, pic){            
            
            mount.clearRect(0, 0, 20, 10); 
            mount.drawImage(pic, coords[i], 0, 680, 10);           
          
          if(i<b){                        
                i=i+1;                    
            setTimeout(
                function(){                    
                    animation(i, mount, pic)
                }, 100
            );
           }else{
              $("#Cartman-mount").css({"display": "none"});
              $(".b_speak-bable-cartman").css({"display": "none"});
              return true;          
           }
           
        }
        animation(0, mount, pic);
  }
 
