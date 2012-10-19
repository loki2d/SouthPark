<?php
$answers = array ("hi", "fuck you", "he kill kanny");



function Cb() {
    
        $askPattern = array(
        "hi!"=> array( "pattern" => "/[Hh][Ii]/", sond => "../audion/file.goo"),
        "fuck you!" => array( "pattern" => "/[Aa][Ss][Ss]\s?[Hh][Oo][Ll]{2}/", sond => "../audion/file.goo"),
        "Whona play?" => array("pattern" => "/Cartman*/", 'sound' => "../audion/file.goo")    
        ) ;
        
    foreach($askPattern as $answord=>$item){
            
        if(preg_match($item["pattern"], $_GET["ask"])) {
            echo '{"answer": "'.$answord.'" , "sound": "'.$item["sound"].'" }'; 
            exit();
        }
    }    
    return falsh;
}

if ($_GET["ask"] != ""){    
    if(!Cb()){
        echo '{"answer":"What?"}';
    } 
}else{
    echo "{\"answer\":\"empty\"}";    
}

?>
