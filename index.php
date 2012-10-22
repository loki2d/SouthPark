<?php
//    include 'db_conn.php';
//    include 'lib.php';
//        $page = new db();
//        $page->GetPage("home");
//        $page->GetChars();
//        
//        $jsonData = json_encode($page->Data["chars"]);
//        
    ?>
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content=charset=UTF-8" /> 
        <link rel="stylesheet" media="screen" type="text/css" href="style.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js" type="text/javascript"></script>
        <script src="script.js" type="text/javascript"></script>
        <script type="text/javascript">
//            
//        function getData(){
//            var data = '<?=$jsonData?>';
//            var objCar = $.parseJSON(data);  
//            $.each(objCar, function(a, b){     
//                 $(".b_wArea").append("<div class='b_char-"+b.name_char+"' style='top: "+b.top+"%; left: "+b.left+"%; height: "+b.height+"%; width: "+b.wight+"%;'>"+b.name_char+"</div>")  
//            });                  
//        }
//        $(function(){
//            getData();
//        });
        </script>
    </head>
    <body>
       <div class="i_menu">
          <ul class="b_menu home">
              <li class="e_menu e_menu-home e_menu-active" goto="home"></li>
              <li class="e_menu e_menu-cartman"  goto="Cartman"></li>
              <li class="e_menu e_menu-stan" goto="Stan"></li>
              <li class="e_menu e_menu-kail"  goto="Kail"></li>
              <li class="e_menu e_menu-kenny" goto="Kenny"></li>             
          </ul>
       </div>
       <div class="i_wropper">
           <div class="i_wBlock" >
               <div class="b_wArea b_home" name="home"> 
                   <div class="b_char-Cartman">                       
                       
                       <canvas id="Cartman-mount">                           
                       </canvas> 
                       
                       <audio class="Cartman_hi">
                           <source id="Cartman_hi" src="audio/test.ogg"  type="audio/ogg">                 
                           </source>
                           Браузер гавно
                       </audio>
                       <div class="b_speak-bable-cartman">
                           hi, guys! This is the song, i just write! <br>
                           Is cole "i hate you, guy." !
                           
                          
                           </div>
                   </div>
                   <div class="b_char-Stan"></div>
                   <div class="b_char-Kail"></div>
                   <div class="b_char-Kenny"></div>
                  
                   
               </div> 
               <div class="b_wArea b_Cartman" > 
                    <div class="e_Cartman"></div>
                    <div class="e_cartman-speakBable">
                                 hi, man!
                    </div>
                   
                    <div class="b_chat" >
                        <div class="b_chat-Cartman">                             
                        </div>                        
                        <div class="e_chat-Cartman">
                            <div class="e_cient-say"></div>
                            <div>
                                <input tyle="text" class="e_cliet-text" name="say" value="" palceholder="что скажешь?"/>
                            </div>
                        </div>
                    </div>
               </div>
              
                <div class="b_wArea b_Stan" > 
                    <div class="e_stan"></div>
                    <div class="e_stan-speak">
                        Stan!                       
                    </div>
                    <div class="b_chat e_chat-Stan" >
                        <div class="e_chat-Stan">
                            <div class="e_cient-say"></div>
                            <div>
                                <input tyle="text" class="e_cliet-text" name="say" value="" palceholder="что скажешь?"/>
                                
                            </div>
                        </div>
                    </div>
               </div> 
               <div class="b_wArea b_Kail" > 
                    <div class="e_Kail"></div>
                    <div class="e_Kail-speak">
                        Kail!                       
                    </div>
                    <div class="b_chat e_chat-Kail" >
                        <div class="e_chat-Kail">
                            <div class="e_cient-say"></div>
                            <div>
                                <input tyle="text" class="e_cliet-text" name="say" value="" palceholder="что скажешь?"/>
                                
                            </div>
                        </div>
                    </div>
               </div>
                <div class="b_wArea b_Kenny"> 
                    <div class="e_kenny"></div>
                    <div class="e_kenny-speak">
                        Kenny!                       
                    </div>
                    <div class="b_chat e_chat-Kanny" >
                        <div class="e_chat-Kanny">
                            <div class="e_cient-say"></div>
                            <div>
                                <input tyle="text" class="e_cliet-text" name="say" value="" palceholder="что скажешь?"/>
                                
                            </div>
                        </div>
                    </div>
               </div>
              
           </div>
       </div>
    </body>
</html>
