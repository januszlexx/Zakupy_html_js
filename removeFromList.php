<?php
require_once('connect.php');
var_dump($_POST['keyProduct']);

$title = $_POST["product"];

$query = "UPDATE shops SET delete_btn = ('deleted') WHERE product = '$title'";
//$query = "UPDATE `shops` SET `product` = 'kiełbasa' WHERE `shops`.`delete_btn` = 'kie?basa'";
mysqli_query($db, $query);
//    
//if($title){
//    
//    if(mysqli_query($db, $query)){
//        echo "Successfully";
//    }else{
//        echo "Not successfully";
//        exit;
//    }
//}