
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
			'"berg1":{"top":"0","left":"-10%", "z-index": "10",'+
                                '"background":"url(../img/berg.png) no-repeat", "background-size" : "contain"},'+
                        '"berg2":{"top":"0","left":"30%", "z-index": "10",'+
                                '"background":"url(../img/berg.png) no-repeat", "background-size" : "contain"},'+
                        '"cartman":{"top":"60%","left":"15%", "z-index":"100", "background":"url(../img/cartman.png) no-repeat", "background-size":"contain"},'+
			'"kail":{"top":"60%","left":"35%", "z-index":"100", "background":"url(../img/stan.png) no-repeat", "background-size":"contain"},'+
			'"stan":{"top":"60%","left":"52%", "z-index":"100", "background":"url(../img/kail.png) no-repeat", "background-size":"contain"},'+
			'"kanny":{"top":"60%","left":"65%", "z-index":"100", "background":"url(../img/kenny.png) no-repeat", "background-size":"contain"}'+		
		'}'+
	'},'+
	'"elements":{'+
                '"berg1":{'+
                     '"name":"berg1",'+
                     '"calssName":"berg1",'+
                     
			'"width_":"80",'+
			'"height_":"90"'+			
                '},'+
                '"berg2":{'+
                     '"name":"berg2",'+
                     '"className":"berg2",'+
			'"width_":"100",'+
			'"height_":"100"'+
			
                '},'+
		'"cartman":{'+
                     '"name":"cartman",'+
                     '"className":"cartman",'+
			'"width_":"10",'+
			'"height_":"23"'+
			
		'},'+
		'"kail": {'+
			'"name":"kail",'+
			'"className":"kail",'+
                        '"width_":"8",'+
			'"height_":"27"'+
			
		'},'+
		'"stan": {'+
                      '"name":"stan",'+
                      '"className":"stan",'+
			'"width_":"8",'+
			'"height_":"27"'+
			
		'},'+
		'"kanny": {'+
                      '"name":"kanny",'+
                      '"className":"kanny",'+
			'"width_":"8",'+
			'"height_":"27"'+
			
			
		'}'+
	'}'+	
'}';

    var myDate  = $.parseJSON($Date); //приобразуем в массив     
    sizeUpdate(1, myDate, 1, 1);
    //console.log(myDate);
    
    compile(myDate);   // компелируем стили. 
    
     $(window).resize(function(){ // если ресайзится делаем ресайз ) 
        Resize(myDate);
    });
    
 });
 

var sizeUpdate = function(firstTime, date, wK, hK){     
    if (firstTime){
       $.each(date.elements, function(index, el){
            this.width_ = (this.width_ * date.client.widthOld)/100; // переводим в пиксили
            this.height_ = (this.height_ * date.client.heightOld)/100; // переводим в пиксили
            this.q = this.height_ / this.width_ // получаем коэфициент
            console.log(this.height_ +"/"+ this.width_ +" "+ this.name);
            console.log(this.q);
        });
    }else {
         $.each(date.elements, function(index, el){
           console.log(this.width_+"*"+wK+"=" );
            this.width_ = this.width_  * wK // домножаем на отношение сторон
            this.height_ = this.width_ * this.q; // ресайзим блок
            console.log(this.width_);
            $("."+this.name).css({"width": this.width_, "height": this.height_});
        });
    }  
};

 
 var compile = function (myDate){
   $.each(myDate.elements, function(i, val){
       //console.log(this);
        $("#info").append("<div class='"+this.name+"' style='width:"+this.width_+"px; height: "+this.height_+"px; border: 1px solid green;'>"+this.name+"</div>");          
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
 
 function Resize(myDate){
 //console.log(myDate)
    var OldW = myDate.client.widthOld;
    var OldH = myDate.client.heightOld;
    
    var width = $(window).width(); // получаем размер окошка 
    var height =  $(window).height(); // получаем размер окошка 
    var widthK = OldW / width ;
    var heightK = OldH / height ;
    
        myDate.client.widthK = widthK;
        myDate.client.heightK = heightK;
        OldW = $(window).width();
        OldH = $(window).height();
   sizeUpdate(0, myDate, widthK, heightK);
    
    
    
   // $.each(myDate.elements, function(i, val){
    
       
        //$("#info").append("<div class='"+this.name+"' style='width:"+this.width_+"px; height: "+this.height_+"px;'>"+this.name+"</div>");          
    //});   
   
}
 
 </script>
 <style>                   
     body{height: 100%;  overflow: hidden; background: url("../img/H1.JPG") center top no-repeat; background-size: cover;}
     html {height:100%}
     div#info {height: 100%; overflow: hidden;}
    </style>
</head>

    <body>        
        <div id="info">             
        </div>
    </body>
</html>
