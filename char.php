<?php
include ("db_conn.php");
include ("lib.php");
$data = $_POST[];

if ($data["page"]=="kanny"){    
   $page =  GetPage("kany");    
}

echo '$page';
exit();
?>
