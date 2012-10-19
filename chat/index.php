<html>
    <head>
        <title></title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js" type="text/javascript"></script>
         <link rel="stylesheet" media="screen" type="text/css" href="style.css" />
        <script type="text/javascript">
           
            $(function(){
                $(".send").click(function(){                 
                   var $text =  $(this).prev('textarea');
                   var $answer = $(this).parent("div.ask").prev("div.answer").children(".e_speacBable-chat");    
                   
                   $.getJSON('answ.php',"ask="+$text.val(), function(data){ 
                           var dateTime =  new Date();                           
                        if (data){                        
                            
                            var $Content =  dateTime.getHours() +":"+dateTime.getMinutes()+" />" + data.answer +"<br />";
                            $answer.prepend( $Content );  
                            $text.val("");
                            
                          }else {
                              
                            var $Content =  dateTime.getHours() +":"+dateTime.getMinutes()+" /> GO AWEY!<br />";
                             $answer.prepend( $Content );  
                             $text.val("");
                              
                          }
                       
                            
                   });
                });
            });            
        </script>
    </head>
    <body>
        <div class="conteiner">
            <div class="answer">
                <div>
                       Картман
                 </div>
                <div class="e_speacBable-chat" target="cartman">
                   
                </div>
            </div>
            <div class="ask">
                <textarea name="cartman" class="cartman_chat">
                        
               </textarea>
                <span class="send">Send</span>
            </div>
        </div>        
    </body>
    <style>
        
    </style>
</html>
