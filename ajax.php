<?php
    include 'db_conn.php';
    include 'lib.php';
    
    $arParams = array( page => $_GET["pageName"]); //получаем параметы страницы     
    
     $page = new db();
     $page->GetPage("home");
     $page->GetChars();
        
     $jsonData = json_encode($page->Data["chars"]);
?>