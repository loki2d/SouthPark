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


function Download_block(pageName){ 
     var page =  $(".b_"+pageName);
     var positionEl = page.offset();
     $(".i_wBlock").animate({"margin-left": "-"+positionEl.left+"px"}, 1000, function(){
       
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
 
