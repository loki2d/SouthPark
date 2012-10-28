
<html>
    <head>
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js" type="text/javascript"></script>
         <script type="text/javascript">
             
$(function(){
         /*данные*/
       var $Date =  '{'+
        '"client":{'+
            '"widthOld":"'+$(window).width()+'",'+
            '"heightOld":"'+$(window).height()+'",'+
            '"widthNew":"'+$(window).width()+'",'+
            '"heightNew":"'+$(window).height()+'",'+
            '"widthK":"1",'+
            '"heightK":"1"'+
        '},'+
	'"page": {'+
		'"background":"/img/H1.JPG",'+
		'"name":"home",'+
		'"elements": {'+
			'"cartman":{"top":"60%","left":"15%", "z-index":"100", "background":"url(../img/cartman.png) no-repeat", "background-size":"contain"},'+
			'"kail":{"top":"60%","left":"35%", "z-index":"100", "background":"url(../img/stan.png) no-repeat", "background-size":"contain"},'+
			'"stan":{"top":"60%","left":"52%", "z-index":"100", "background":"url(../img/kail.png) no-repeat", "background-size":"contain"},'+
			'"kanny":{"top":"60%","left":"65%", "z-index":"100", "background":"url(../img/kenny.png) no-repeat", "background-size":"contain"}'+		
		'}'+
	'},'+
	'"elements":{'+
               '"cartman":{'+
                     '"name":"cartman",'+
                     '"pageName":"home",'+
                     '"className":"cartman",'+
                     '"width_":"10",'+
                     '"height_":"23"'+                    
			
		'},'+
		'"kail": {'+
			'"name":"kail",'+
                        '"pageName":"home",'+
			'"className":"kail",'+
                        '"width_":"8",'+
			'"height_":"27"'+
			
		'},'+
		'"stan": {'+
                      '"name":"stan",'+
                      '"pageName":"home",'+
                      '"className":"stan",'+
			'"width_":"8",'+
			'"height_":"27"'+
			
		'},'+
		'"kanny": {'+
                      '"name":"kanny",'+
                      '"pageName":"home",'+
                      '"className":"kanny",'+
		      '"width_":"8",'+
		      '"height_":"27"'+	
		'},'+
                '"cartmanChat":{'+
                     '"name":"cartmanChat",'+
                     '"pageName":"chat-Cartman",'+
                     '"className":"cartman",'+
                     '"width_":"40",'+
                     '"height_":"43",'+
                     '"style":"bottom: 0px; left: 20%; position: asolute; background: url(../img/cartman.png) no-repeat; background-size: contain;"'+			
		'}'+
	'},'+
        '"parts":{'+
            '"CartmanMount":{'+        
                            '"name":"mount",'+
                            '"parent":"cartman",'+                            
                            '"css":"height: 8%; width: 8%; border: 1px solid green; top: 44%; left: 50%; margin-left: -6%; position: absolute;",'+
                            '"tagName":"canvas",'+
                            '"function":"CartmanSpeak"'+            
            '}'+
        '}'+
'}';

 //document.write($Date);

//приобразуем в объект
var myDate  = $.parseJSON($Date); 

// получаем отношения, и размеры персонажей.    
sizeUpdate(1, myDate, 1, 1);     
	
// компелируем стили.    
   compile(myDate);    
    
    
// проприсовка активных элементов персонажей 
parts(myDate); 

// если ресайзится делаем ресайз )
$(window).resize(function(){  
    Resize(myDate);
    });
    
}); 

// библиотека функций.


// проприсовка активных элементов персонажей
var parts = function(data){
   $.each(data.parts, function(){
       $("."+this.parent).append("<"+this.tagName+" class="+this.name+" style='"+this.css+"'></"+this.tagName+">");
   });
}

// преобразование размеров.
var sizeUpdate = function(firstTime, date, wK, hK){     
    if (firstTime){
       $.each(date.elements, function(index, el){
            this.width_ = (this.width_ * date.client.widthOld)/100; // переводим в пиксили
            this.height_ = (this.height_ * date.client.heightOld)/100; // переводим в пиксили
            this.q =  this.height_ / this.width_ ;   // получаем коэфициент           
        });
    }else {
        
		$.each(date.elements, function(index, el){ 
		
			 if  ( wK != 1 && hK != 1 ){                             
				this.width_ = this.width_  *  wK; // домножаем на изменение сторон
				this.height_ = this.width_ * this.q; // ресайзим блок
			}
			else if(wK  != 1){
				this.width_ = this.width_  *  wK // домножаем на изменение сторон
				this.height_ = this.width_ * this.q // ресайзим блок
            }
			else if(hK  != 1){
				this.height_ = this.height_ *  hK // домножаем на изменение сторон
				this.width_ = this.height_  / this.q // ресайзим блок
			} 
            $("."+this.name).css({"width": this.width_, "height": this.height_});
        });
    }  
};

// проприсовка статических объектов на сранице и добавление некоторых стилей
 var compile = function (myDate){
   $.each(myDate.elements, function(i, val){
       console.log(this.name);
        $("#"+this.pageName).append("<div class='"+this.name+"' style='width:"+this.width_+"px; height: "+this.height_+"px;'>"+this.name+"</div>");          
    });
    
    var $style="";
    $.each(myDate.page.elements, function(i, val){       
        $style= $style+"."+i+"{position: absolute; ";
        $.each(myDate.page.elements[i], function(i, val){
            $style = $style + i+":"+val+"; "
        });
        $style = $style + "} \r\n ";
       });
    
     $('head').append("<style>"+ $style+"</style>");     
 }

// фунция для перересовки стилей и элементов на странице (Устарела)
 function ReStyle(myDate){
       
    var $style="";
    $.each(myDate.page.elements, function(i, val){       
        $style= $style+"."+i+"{position: absolute; ";
        $.each(myDate.page.elements[i], function(i, val){
            $style = $style + i+":"+val+"; "
        });
        $style = $style + "} \r\n ";
       });
   $('head style[name="dinamic"]').text($style);    
     
 }
 // функция реагирующая на изменения экрана.
 
 function Resize(myDate){ 
    var OldW = myDate.client.widthOld;
    var OldH = myDate.client.heightOld;
    
    var width = $(window).width(); // получаем размер окошка 
    var height =  $(window).height(); // получаем размер окошка 
    var widthK =  width / OldW ;
    var heightK = height / OldH;    
        myDate.client.widthK = widthK;
        myDate.client.heightK = heightK;
        myDate.client.widthOld = $(window).width();
        myDate.client.heightOld = $(window).height();
   sizeUpdate(0, myDate, widthK, heightK);      
   
}
// коец скрипта. 
 </script>
 <style>                   
     body{height: 100%;  overflow: hidden; background: url("../img/H1.JPG") center top no-repeat; background-size: cover;}
     html {height:100%}
     div#home {height: 100%;}
     div#chat-Cartman { height: 100%;}
     
    </style>
</head>
<body>        
    <div id="home">             
    </div>
    <div id="chat-Cartman">
    </div>
    <audio class="Cartman_hi" type="audio/ogg"  src="../audio/test.ogg">                          
          Браузер гавно
     </audio>
</body>
    
</html>
