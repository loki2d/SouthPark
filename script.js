var $Date =  '{'+
        '"client":{'+
            '"widthOld":"'+$(window).width()+'",'+
            '"heightOld":"'+$(window).height()+'",'+
            '"widthNew":"'+$(window).width()+'",'+
            '"heightNew":"'+$(window).height()+'",'+
            '"widthK":"1",'+
            '"heightK":"1"'+
        '},'+	
	'"elements":{'+
               '"cartman":{'+
                     '"name":"cartman",'+
                     '"pageName":"home",'+
                     '"className":"cartman",'+
                     '"width_":"180",'+
                     '"height_":"164",'+
                     '"fix":"1",'+
                     '"style":"bottom: 15%; left: 23%; z-index: 170;  position: absolute; background: url(./img/cartman.png) no-repeat; background-size: contain; "'+
		'},'+
		'"kail": {'+
                    '"name":"kail",'+
                    '"pageName":"home",'+
                    '"className":"kail",'+
                    '"width_":"147",'+
                    '"height_":"180",'+
                    '"fix":"1",'+
                    '"style":"bottom: 15%; left: 43%; z-index: 100;  position: absolute; background: url(./img/kail.png) no-repeat; background-size: contain; "'+
			
		'},'+
		'"stan": {'+
                    '"name":"stan",'+
                    '"pageName":"home",'+
                    '"className":"stan",'+
                    '"width_":"130",'+
                    '"height_":"190",'+
                    '"fix":"1",'+
                    '"style":"bottom: 15%; left: 60%; z-index: 180;  position: absolute; background: url(./img/Stan.png) no-repeat; background-size: contain ; "'+
			
		'},'+
		'"kenny": {'+
                      '"name":"kenny",'+
                      '"pageName":"home",'+
                      '"className":"kenny",'+
                      '"width_":"140",'+
		      '"height_":"186",'+
                      '"fix":"1",'+
                      '"style":"bottom: 15%; left: 75%; z-index: 100;  position: absolute; background: url(./img/kenny.png) no-repeat; background-size: contain; "'+
		'},'+
                '"cartmanChat":{'+
                     '"name":"Cartamn",'+
                     '"pageName":"chatCartman",'+ 
                     '"className":"homeCartman",'+ // он же радитель для частички
                     '"fix":"1",'+
                     '"width_":"340",'+
                     '"height_":"343",'+
                     '"style":"bottom: -60px; left: 10%; position: absolute; background: url(./img/cartman.png) no-repeat; background-size: contain;"'+                     
		'},'+
                '"stanChat":{'+
                     '"name":"Stan",'+
                     '"pageName":"chatStan",'+ 
                     '"className":"chatStan",'+ // он же радитель для частички
                     '"fix":"1",'+
                     '"width_":"340",'+
                     '"height_":"343",'+
                     '"style":"bottom: -30px; left: 10%; position: absolute; background: url(./img/Stan.png) no-repeat; background-size: contain;"'+                     
		'},'+
                '"kailChat":{'+
                     '"name":"Kail",'+
                     '"pageName":"chatKail",'+ 
                     '"className":"chatKail",'+ // он же радитель для частички
                     '"fix":"1",'+
                     '"width_":"340",'+
                     '"height_":"343",'+
                     '"style":"bottom: -40px; left: 10%; position: absolute; background: url(./img/kail.png) no-repeat; background-size: contain;"'+                     
		'},'+
                '"kennyChat":{'+
                     '"name":"Kenny",'+
                     '"pageName":"chatKenny",'+ 
                     '"className":"chatKenny",'+ // он же радитель для частички
                     '"fix":"1",'+
                     '"width_":"340",'+
                     '"height_":"343",'+
                     '"style":"bottom: -30px; left: 10%; position: absolute; background: url(./img/kenny.png) no-repeat; background-size: contain;"'+                     
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
                            '"parent":"homeCartman",'+                            
                            '"css":"height: 40px; width: 50px; top: 47%; left: 50%; margin-left: -6%; position: absolute;",'+
                            '"className":"cartmanMount",'+
                            '"tagName":"canvas",'+
                            '"function":"CartmanSpeak",'+
                            '"sprite":"./img/wtf2.png",'+
                            '"pictDefault":"./img/cartman-rot.png"'+
            '},'+
            '"CartmanRotHome":{'+        
                            '"name":"mount",'+
                            '"parent":"cartman",'+                            
                            '"css":"height: 18%; width: 18%; top: 50%; left: 46%; margin-left: -6%; position: absolute;",'+
                            '"className":"CartmanRotHome",'+
                            '"tagName":"canvas",'+
                            '"function":"CartmanSpeak",'+
                            '"sprite":"./img/wtf2.png",'+
                            '"pictDefault":"./img/cartman-rot.png"'+
            '},'+
            '"StanRotHome":{'+        
                            '"name":"mount",'+
                            '"parent":"stan",'+                            
                            '"css":"height: 17%; width: 20%; top: 57%; left: 48%; margin-left: -6%; position: absolute;",'+
                            '"className":"SanRotHome",'+
                            '"tagName":"canvas",'+
                            '"function":"StanSpeak",'+
                            '"sprite":"./img/wtf2.png",'+
                            '"pictDefault":"./img/stan-rot.png"'+
            '},'+
            '"KailRotHome":{'+        
                            '"name":"mount",'+
                            '"parent":"kail",'+                            
                            '"css":"height: 18%; width: 20%; top: 51%; left: 46%; margin-left: -6%; position: absolute;",'+
                            '"className":"KailRotHome",'+
                            '"tagName":"canvas",'+
                            '"function":"CartmanSpeak",'+
                            '"sprite":"./img/wtf2.png",'+
                            '"pictDefault":"./img/kail-rot.png"'+
            '},'+ 
            '"KannyHeadHome":{'+        
                            '"name":"KannyHead",'+
                            '"parent":"kenny",'+                            
                            '"css":"height: 70px; width: 53px; top: 35px; left: 42px; margin-left: 0; position: absolute;",'+ //морда кени
                            '"className":"KannyHead",'+
                            '"tagName":"canvas",'+
                            '"function":"KanyMad",'+
                            '"sprite":"./img/kenny-head.png",'+
                            '"pictDefault":"./img/kany-head-d.png",'+
                            '"volume": "0"'+                            
            '},'+
            '"StanChatRotAnimation":{'+        
                            '"name":"StanChatAnimationRot",'+
                            '"parent":"chatStan",'+                            
                            '"css":"height: 30px; width: 40px; top: 60%; left: 30%; margin-left: 0; position: absolute;",'+
                            '"className":"StanRot",'+
                            '"tagName":"canvas",'+
                            '"function":"StanChatAnimationRot",'+
                            '"sprite":"./img/wtf2.png",'+
                            '"pictDefault":"./img/stan-rot.png",'+
                            '"volume": "0"'+                            
            '},'+
            '"KailChatRotAnimation":{'+        
                            '"name":"KailChatAnimationRot",'+
                            '"parent":"chatKail",'+                            
                            '"css":"height: 30px; width: 40px; top: 57%; left: 34%; margin-left: 0; position: absolute;",'+
                            '"className":"KailRot",'+
                            '"tagName":"canvas",'+
                            '"function":"KailChatAnimationRot",'+
                            '"sprite":"./img/wtf2.png",'+
                            '"pictDefault":"./img/kail-rot.png",'+
                            '"volume": "0"'+                            
            '}'+
            
        '}'+
'}';


var Dialog = "";

var dialog = '{"cartman": {'+
                    '"hi" : {'+
                        '"name" : "hi",'+
                        '"pattern" : "hi",'+
                        '"answer" : "Hello!",'+
                        '"audio" : "cartman-no",'+
                        '"url":"../audio/no.mp3",'+
                        '"time" : "3",'+
                        '"animationParts": {'+
                            '"0" : "CartmanMount"'+
                        '}'+
                     '},'+
                    '"default" : {'+
                        '"name":"what",'+
                        '"pattern": "default",'+
                        '"answer": "What?",'+
                        '"audio": "cartman-what",'+
                        '"url":"../audio/carman-what.ogg",'+
                        '"time":"110",'+
                         '"animationParts": {'+
                            '"0" : "CartmanMount"'+
                        '}'+

                      '},'+
                    '"bitch" : {'+
                        '"name":"whie",'+
                        '"pattern": "bitch",'+
                        '"answer": "Bitch! Don\'t coll me bitch, bitch!",'+
                        '"audio": "cartman-what",'+
                        '"url":"../audio/carman-bitch.ogg",'+
                        '"time":"10",'+
                         '"animationParts": {'+
                              '"0" : "CartmanMount"'+
                          '}'+
                     '},'+
                      '"homeDefault" : {'+
                        '"name":"main",'+
                        '"pattern": "no",'+
                        '"answer": "no",'+
                        '"audio": {'+
                           '"0":{'+
                               '"id":"main-cartman_1",'+
                               '"url":"./audio/cartman/main1.mp3",'+
                               '"time":"50"'+
                               '},'+
                            '"1":{'+
                               '"id":"main-cartman_2",'+
                               '"url":"./audio/cartman/main2.mp3",'+
                               '"time":"90"'+
                               '},'+
                            '"2":{'+
                               '"id":"main-cartman_3",'+
                               '"url":"./audio/cartman/main3.mp3",'+
                               '"time":"140"'+
                               '},'+
                            '"3":{'+
                               '"id":"main-cartman_4",'+
                               '"url":"./audio/cartman/main4.mp3",'+
                               '"time":"120"'+
                               '}'+                 
                          '}'+ 
                     '}'+
                     
             '},'+        
             '"stan": {'+
                   '"default": {'+
                        '"name" : "default",'+
                        '"pattern" : "default",'+
                        '"answer": "Ok, lets talk about something else!",'+
                        '"audio" : "cartman-no",'+
                        '"url" : "../audio/cartman-no.mp3",'+                     
                        '"time" : "10",'+
                        '"animationParts" : {'+
                                '"0":"StanChatRotAnimation"'+
                            '}'+
                     '},'+
                      '"homeDefault" : {'+
                        '"name":"main",'+
                        '"pattern": "no",'+
                        '"answer": "no",'+
                        '"audio": {'+
                           '"0":{'+
                               '"id":"main-stan_1",'+
                               '"url":"./audio/stan/main1.mp3",'+
                               '"time":"50"'+
                               '},'+
                            '"1":{'+
                               '"id":"main-stan_2",'+
                               '"url":"./audio/stan/main2.mp3",'+
                               '"time":"70"'+
                               '}'+                             
                          '},'+ 
                         '"animationParts": {'+
                              '"0" : "StanRotHome"'+
                          '}'+
                     '}'+
            '},'+
             '"kail": {'+
                   '"default": {'+
                        '"name" : "default",'+
                        '"pattern" : "default",'+
                        '"answer": "Ok, lets talk about something else!",'+
                        '"audio" : "cartman-no",'+
                        '"url" : "../audio/cartman-no.mp3",'+                     
                        '"time" : "10",'+
                        '"animationParts" : {'+
                                '"0":"KailChatRotAnimation"'+
                            '}'+
                     '},'+
                     '"homeDefault" : {'+
                        '"name":"main",'+
                        '"pattern": "no",'+
                        '"answer": "no",'+
                        '"audio": {'+
                           '"0":{'+
                               '"id":"main-kail_1",'+
                               '"url":"./audio/kail/main1.mp3",'+
                               '"time":"15"'+
                               '},'+
                            '"1":{'+
                               '"id":"main-kail_2",'+
                               '"url":"./audio/kail/main2.mp3",'+
                               '"time":"10"'+
                               '}'+                             
                          '},'+ 
                         '"animationParts": {'+
                              '"0" : "kailRotHome"'+
                          '}'+
                     '}'+
            '}'+
'}';


$(function(){
    
 $(".page").css({"width" : $(window).width()+"px", "height" : $(window).height()+"px"});
  //document.write(dialog)
 var Dialog = $.parseJSON(dialog);

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
 
 
 
    
    $(".b_menu li").click(function(){ 
        var $link = $(this);
        var linkName = $(this).attr("goto");
        var $menu = $(".b_menu");
            $menu.removeClass("home cartman kenny stan kail");
            $menu.addClass(linkName);           

        var page = $("#"+linkName);

            var positionEl = page.offset();           
            if( positionEl.left != 0)
            {
                var margin = $(".i_wBlock").css("margin-left");
                var slide = ( -((margin.substring(0, (margin.length)-2))*1) + positionEl.left);        
                $(".i_wBlock").animate({"margin-left": "-"+slide +"px"}, 1000);
            }


            $link.addClass("e_menu-active");

    });
 
    $(".say").click(function(){     

      var input = $(this).parent("div").children(".chat-input");       
      var name = input.attr("name");
      var page = input.parent("div").parent("div").parent("div");
      var value = input.val();

      var res = chat(name, value, Dialog);

          res = Dialog[name][res];
      var time = res["time"];
      console.log(myDate["parts"][res.animationParts[0]]);
      var animationPart = myDate["parts"][res.animationParts[0]];
      $("."+name+"_chat-bable").html(res["answer"]);  
      console.log(res["audio"]);
      var snd = document.getElementById(res["audio"]);       
           snd.play();
      animation(time, animationPart);
   });

$(".chat-input").keypress(function(event){
    var text = $(this).val(); 
    var charName = $(this).attr("name");
    helpSay(charName, text, Dialog);
 });

//Анимация на галвной странице

$(".cartman, .kail, .stan").click(function(){
        var target = this.className;
        var animationObj;        
        var dialogObj = Dialog[target].homeDefault; 
        $.each(myDate.parts, function(index){
              
           if (this.parent === target ){            
               animationObj = this;
           }       
        });//endeach
       var play = Math.round((Math.random() * (Object.size(dialogObj.audio)-1))); 
       console.log(play);
       console.log(dialogObj.audio[play].id);
       var sound = document.getElementById(dialogObj.audio[play].id);
           sound.play();  
       console.log(dialogObj["audio"]);
       animation(dialogObj.audio[play].time, animationObj);
       
    });   

// Кенни на главной

$(".kenny").click(function(){
     var target = this.className;
      var sound = document.getElementById('main-kenny_1');
          sound.play();  
     var head = $('.KannyHead')[0].getContext('2d');
      var img = new Image();
          img.src = "img/kenny-2.png";     
      function screem(i){
          if (i === 0){
               head.clearRect(0, 0, 500, 500); 
               head.drawImage(img, 0, 0, 300, 150); 
               i++;
                setTimeout(
                    function(){                    
                        screem(i);
                    }, 1000
                );
          }else{
              head.clearRect(0, 0, 500, 500);
          } 
      }
      screem(0);
});


}); // document load 



//-----------------------===================-----------------------------
// ======================================================================
// ----------------------------------------------------------------------

// LIBRARY


//анимация разговора;
 var animation = function(time, animationPartObj){     
      var className = animationPartObj.className;
      var i = 0;
      var b = time;
      var img = new Image();
          img.src = animationPartObj.sprite;
      var imgDef = new Image();
          imgDef.src = animationPartObj.pictDefault;
      var mount = $("."+className)[0].getContext('2d');     
      var coords = new Array( -1, -270, -570, -850);
                                 
 function speak(i, mount){
          mount.clearRect(0, 0, 500, 300);           
          mount.drawImage(img, coords[Math.round(Math.random() * coords.length)], 0, 1150, 100); 
         
          if(i<b){             
                i=i+1;
          setTimeout(
                function(){                    
                    speak(i, mount);
                }, 100
            );           
           }else{  
               mount.clearRect(0, 0, 500, 500); 
               mount.drawImage(imgDef, 0, 0, 340, 105);                     
           }           
        } //  function speak
        speak(0, mount);
  
}; //animation


// проприсовка статических объектов на сранице и добавление некоторых стилей

 var compile = function (myDate){
   $.each(myDate.elements, function(i, val){
       $("#"+this.pageName).append("<div class='"+this.className+"' style='width:"+this.width_+"px; height: "+this.height_+"px; "+this.style+"'></div>");
       
    });   
 };

// прорисовка активных элементов персонажей
var parts = function(data){

$.each(data.parts, function(){
       $("."+this.parent).append("<"+this.tagName+" class="+this.className+" style='"+this.css+"'></"+this.tagName+">");
       if (this.tagName == "canvas"){          
           var img = new Image(); 
           var mount;               
            img.src = this.pictDefault;            
            mount = $("."+this.className)[0].getContext('2d');
            mount.clearRect(0, 0, 500, 500); 
            mount.drawImage(img, 0, 0, 340, 105)
               
          
       }
   });
}; // прорисовка элементов

// преобразование размеров.
var sizeUpdate = function(firstTime, date, wK, hK){     
    if (firstTime){
       $.each(date.elements, function(index, el){
           if (this.fix != 1){
                if ( this.width_ != 0 && this.height_ != 0){
                    this.q =  this.height_ / this.width_ ;   // получаем коэфициент 
                    this.width_ = (this.width_ * date.client.widthOld)/100; // переводим в пиксили
                    this.height_ = (this.height_ * date.client.heightOld)/100; // переводим в пиксили
                    this.q =  this.height_ / this.width_ ;   // получаем коэфициент 
                 }else {
                     this.q = this.height_ / this.width_;
                 }                               
           }
        });

}else {
	$.each(date.elements, function(index, el){ 
		
            if  ( wK != 1 && hK != 1 ){                             
                    this.width_ = this.width_  *  wK; // домножаем на изменение сторон
                    this.height_ = this.width_ * this.q; // ресайзим блок
           }
           else if(wK != 1){
                    this.width_ = this.width_  *  wK; // домножаем на изменение сторон
                    this.height_ = this.width_ * this.q; // ресайзим блок
           }
           else if(hK  != 1){
                    this.height_ = this.height_ *  hK; // домножаем на изменение сторон
                    this.width_ = this.height_  / this.q; // ресайзим блок
           } 
       $("."+this.name).css({"width": this.width_, "height": this.height_});

        });
    }  
};


 // функция реагирующая на изменения экрана.
 
 function Resize(myDate){ 
    var OldW = myDate.client.widthOld;
    var OldH = myDate.client.heightOld;
    
    var width = $(window).width(); // получаем размер окошка 
    var height =  $(window).height(); // получаем размер окошка 
    var widthK =  width / OldW;
    var heightK = height / OldH;    
        myDate.client.widthK = widthK;
        myDate.client.heightK = heightK;
        myDate.client.widthOld = $(window).width();
        myDate.client.heightOld = $(window).height();
   sizeUpdate(0, myDate, widthK, heightK);      
   
}

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

            "background-size": width+"px "+height+"px"

       });
   });   
}



var carman_sperk = function(){         
      var snd = document.getElementsByTagName("audio")[0];       
      snd.play();   
       
};
//------------------------------
//----------------------CHAT----
//------------------------------

    var chat = function(who, text, dialogs){       
        var re="default";       
        $.each(dialogs[who], function(key, value){              
            if (!(text.search(this.pattern))){             
              re = this["name"];                
            }
        });
         console.log(re);
        return re; 
        
    };
// --- работа с подсказками     
var helpSay = function(obj, text, dialogs){
    var q = new  RegExp("(^whie)*(how)* ", "gi");
    var variants = new Array();
        if(!(text.search(q)) && text){
            
            $.each(dialogs[obj], function(kay, value){               
             var p = this.pattern;
             var input = new RegExp("("+text+"){1}", "gi");
             console.log(input);
                if (p.search(input) > 0){ 
                    variants.push(this);  
                }
            });
            
         }
     // добавляем элементы подсказок.
    if (variants.length){
            $(".help").append("<ul class=\"variantList\"></ul>");
            $.each(variants, function(){
                $(".help ul").append("<li>"+this.pattern+"</li>");
            }); 
     }
          
};

Object.size = function(obj){
    var size = 0, key;
    for (key in obj){
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


// коец скрипта. 
