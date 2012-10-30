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
		'"background":"../img/H1.JPG",'+
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
                     '"height_":"23",'+
                     '"style":"top: 70%; left: 35%; z-index: 100;  position: absolute; background: url(../img/cartman.png) no-repeat; background-size: contain;"'+
		'},'+
		'"kail": {'+
                    '"name":"kail",'+
                    '"pageName":"home",'+
                    '"className":"kail",'+
                    '"width_":"8",'+
                    '"height_":"27",'+
                    '"style":"top: 68%; left: 48%; z-index: 100;  position: absolute; background: url(../img/kail.png) no-repeat; background-size: contain;"'+
			
		'},'+
		'"stan": {'+
                    '"name":"stan",'+
                    '"pageName":"home",'+
                    '"className":"stan",'+
                    '"width_":"7",'+
                    '"height_":"24",'+
                    '"style":"top: 68%; left: 57%; z-index: 100;  position: absolute; background: url(../img/stan.png) no-repeat; background-size: contain;"'+
			
		'},'+
		'"kanny": {'+
                      '"name":"kanny",'+
                      '"pageName":"home",'+
                      '"className":"kanny",'+
                      '"width_":"8",'+
		        '"height_":"27",'+	
                      '"style":"top: 67%; left: 67%; z-index: 100;  position: absolute; background: url(../img/kenny.png) no-repeat; background-size: contain;"'+
		'},'+
                '"cartmanChat":{'+
                     '"name":"Cartamn",'+
                     '"pageName":"chatCartman",'+
                     '"className":"homeCartman",'+
                     '"width_":"40",'+
                     '"height_":"43",'+
                     '"style":"bottom: -30px; left: 10%; position: absolute; background: url(../img/cartman.png) no-repeat; background-size: contain;"'+                     
		'},'+
                '"bable":{'+
                     '"name":"carmanBable",'+
                     '"pageName":"carmanBable",'+
                     '"className":"bable",'+
                     '"width_":"0",'+
                     '"height_":"0",'+
                     '"style":""'+                     
		'}'+

	'},'+
        '"parts":{'+
            '"CartmanMount":{'+        
                            '"name":"mount",'+
                            '"parent":"cartman",'+                            
                            '"css":"height: 7%; width: 7%; border: 1px solid green; top: 38%; left: 52%; margin-left: -6%; position: absolute;",'+
                            '"className":"cartmanMount",'+
                            '"tagName":"canvas",'+
                            '"function":"CartmanSpeak"'+            
            '}'+
        '}'+
'}';

var Dialog = "";

$(function(){         
       $(".page").css({"width" : $(window).width()+"px", "height" : $(window).height()+"px"});
       console.log($(window).width());
       

 //document.write($Date);

//приобразуем в объект
var myDate  = $.parseJSON($Date); 

// получаем отношения, и размеры персонажей.    
sizeUpdate(1, myDate, 1, 1);     
	
// компелируем стили.    
   compile(myDate);    
    
    
// проприсовка активных элементов персонажей 
parts(myDate); 
 ResizePage();
// если ресайзится делаем ресайз )
$(window).resize(function(){  
    Resize(myDate);
    ResizePage();
 });
 
 $(".cartman").click(function(){
     carman_sperk();
 });
    
$(".b_menu li").click(function(){ 
   
        var $link = $(this);
        var linkName = $(this).attr("goto");
        var $menu = $(".b_menu");
            $menu.removeClass("home cartman kenny stan kail");
            $menu.addClass(linkName);
            //console.log(linkName);
        
        var page = $("#"+linkName);
            
            var positionEl = page.offset();
            //console.log(positionEl);
            if( positionEl.left != 0)
            {
                var margin = $(".i_wBlock").css("margin-left");
                var slide = ( -((margin.substring(0, (margin.length)-2))*1) + positionEl.left);        
                $(".i_wBlock").animate({"margin-left": "-"+slide +"px"}, 1000);
            }
        
           
            $link.addClass("e_menu-active");
        
    });


}); 

// библиотека функций.


// прорисовка активных элементов персонажей
var parts = function(data){
   $.each(data.parts, function(){
       $("."+this.parent).append("<"+this.tagName+" class="+this.name+" style='"+this.css+"'></"+this.tagName+">");
   });
}

// преобразование размеров.
var sizeUpdate = function(firstTime, date, wK, hK){     
    if (firstTime){
       $.each(date.elements, function(index, el){
           if ( this.width_ != 0 && this.height_ != 0){
               this.q =  this.height_ / this.width_ ;   // получаем коэфициент 
            this.width_ = (this.width_ * date.client.widthOld)/100; // переводим в пиксили
            this.height_ = (this.height_ * date.client.heightOld)/100; // переводим в пиксили
                      
           }
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
       console.log(this.pageName);
       $("#"+this.pageName).append("<div class='"+this.name+" "+this.className+"' style='width:"+this.width_+"px; height: "+this.height_+"px; "+this.style+"'>"+this.name+"</div>");          
    });   
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




function ResizePage(){ 
   var width = $(window).width();
   var height =  $(window).height();
   $(".i_wropper").css({
       "width": width,
       "height": height
    });
   $(".page").each( function(kay){
       $(this).css({
            "width": width,
            "height": height,
            "background-size": "auto "+(height + 200)+"px"
       });
   });   
}



var carman_sperk = function(){
         
      //$(".b_speak-bable-cartman").css({"display": "block"});
      var snd = document.getElementsByTagName("audio")[0];       
      snd.play();   
       // song();  
}

//чат 
    var chat = function( who, text){
        
    } 

// коец скрипта. 
