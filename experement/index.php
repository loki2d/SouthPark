
<html>
    <head>
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js" type="text/javascript"></script>
         <script type="text/javascript">
             
$(function(){
         /*данные*/
       var $Date =  '{'+
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
			'"width":"80",'+
			'"height":"90",'+
			'"color":"red"'+
                '},'+
                '"berg2":{'+
                     '"name":"berg2",'+
			'"width":"100",'+
			'"height":"100",'+
			'"color":"red"'+
                '},'+
		'"cartman":{'+
                     '"name":"cartman",'+
			'"width":"10",'+
			'"height":"23",'+
			'"color":"red"'+
		'},'+
		'"kail": {'+
			'"name":"kail",'+
                      '"width":"8",'+
			'"height":"27",'+
			'"color":"green"'+
		'},'+
		'"stan": {'+
                      '"name":"stan",'+
			'"width":"8",'+
			'"height":"27",'+
			'"color":"blue"'+	
		'},'+
		'"kanny": {'+
                      '"name":"kanny",'+
			'"width":"8",'+
			'"height":"27",'+
			'"color":"black"'+
		'}'+
	'}'+	
'}';

    var myDate  = $.parseJSON($Date); //приобразуем в массив 
    
    compile(myDate);   // компелируем стили.   
    
    //это все можно захреначить в персонажа а точнее в его объект.
    $(".cartman").live("click", function(){ // создаемс событие на клик по картмену
        animate(myDate);                    //запускаем функцию анимации
    });
    
    //Анимационная функция     
    function animate(myDate){
        var param = myDate.page.elements.cartman.top //деламе переменную для простого обращения к данным. как ссылка она сука не рабоатет 
                 var top  = param.substr(0, param.length - 1); //тут обрезаем %
         top = top*1;         // делаем число надо что-то сделать в классе чтоб этим не заниматься.
         top = top - 1;         // делаем шаг
         myDate.page.elements.cartman.top = top + "%";     // возвращаем число в обект.
        ReStyle(myDate); //обновляем стили на странице.
       // document.write(top+"\n\r");
        if (param.substr(0, param.length - 1) >= 0){ // проверям точку запуска. 
            setTimeout(function(){animate(myDate)}, 50); // задаем паузу 
        }
    }
            
 });
 
 var compile = function (myDate){
   $.each(myDate.elements, function(i, val){        
        $("#info").append("<div class='"+val.name+"' style='width:"+val.width+"%; height: "+val.height+"%;'>"+val.name+"</div>");          
    });
    
    var $style="";
    $.each(myDate.page.elements, function(i, val){       
        $style= $style+"."+i+"{position: absolute; ";
        $.each(myDate.page.elements[i], function(i, val){
            $style = $style + i+":"+val+"; "
        });
        $style = $style + "} \r\n ";
       });
    
     $('head').append("<style name='dinamic'>"+ $style+"</style>");     
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
 
 </script>
 <style>                   
     body{height: 100%; overflow: hidden;}
     html {height:100%}
     div#info {height: 100%; overflow: hidden;}
    </style>
</head>

    <body>        
        <div id="info">             
        </div>
    </body>
</html>
