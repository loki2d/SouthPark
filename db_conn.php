<?php

class db {
    public $connect = "";
    public $query="";
    public $Data = array(); 
    function __constuct() {
     
    }
    
    function Connect(){
       $this->connect = mysql_connect("localhost", "sp", "")or die("Could not connect: " . mysql_error());
    }
    
    public function GetData(){
        
    }
    
//    function __destruct() {
//        mysql_close($this->connect); 
//    }
    
    
    public function GetPage($name){
        $this->connect = $this->Connect();
        //$this->query = "SELECT  `id`,  `name`,  `type`,  `background` FROM `sp`.`page` LIMIT 1000;";
        $this->query = "Select `id`,  `name`,  `type`,  `background` FROM `sp`.`page` WHERE `page`.`name` = '".$name."';";        
        $res = $this->Select($this->query, "array");
        $this->Data["page"] = $res; // полуили массив с данными о странице
        //mysql_close( $this->connect);
        return 1;
       }
       
       
       public function GetChars(){
           if (is_array($this->Data["page"])){
           $this->connect = $this->Connect();           
           $this->query = "Select `char`, `top`, `left`, `height`, `wight`, `name_char` FROM `sp`.`char_page` WHERE `page` = '".$this->Data["page"][0]['id']."';";  
           $res = $this->Select($this->query, "array");
           $this->Data["chars"] = $res;
           //mysql_close($this->connect);              
           }
           
       }

        public function Select($query, $resType){
            $res = mysql_query($query);
            if ($resType == "array" and $res){           
                $result = array();           
                while ($row = mysql_fetch_assoc($res)){
                    $result[] = $row;                    
                }            
                return  $result;
            }elseif($res){
                return mysql_fetch_object($res);
            }else{
                echo "res is empty";
            }
            
         }
}
    
?>

