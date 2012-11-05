<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content=charset=UTF-8" /> 
        <link rel="stylesheet" media="screen" type="text/css" href="style.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js" type="text/javascript"></script>
        <script src="" type="text/javascript"></script>
        <script src="script.js" type="text/javascript"></script>
      </head>
    <body>
      <div class="i_wropper">
           <div class="i_wBlock" >
                <div id="home" class="page">
                    
                </div>
               <div id="chat-Cartman" class="page">
                   
               </div>
           </div>
       </div>
        
    </body>
         <script type="text/javascript">           
            $(function(){
                $(".send").click(function(){
                   var $text =  $(this).prev('input');
                   var $answer = $(this).parent("div.ask").prev("div.answer").children(".e_speacBable-chat");    

                   $.getJSON('answ.php',"ask="+$text.val(), function(data){ 
                           var dateTime =  new Date();                           
                        if (data){                        

                            var $Content =  dateTime.getHours() +":"+dateTime.getMinutes()+" />" + data.answer +"<br />";
                            $answer.prepend( $Content );  
                            $text.val("");

                            var $sound = document.getElementById("audio");                   
                            $sound.play();


                          }else {

                             var $Content =  dateTime.getHours() +":"+dateTime.getMinutes()+" /> GO AWEY!<br />";
                             $answer.prepend( $Content );  
                             $text.val("");
                          }
                      });
                      return false;
                });
            });
        </script>
</html>
