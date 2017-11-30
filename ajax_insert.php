<?php
require_once('connect.php');

$title = $_POST['keyProduct'];

$query = "INSERT INTO shops (product) VALUES ('$title')";

if($title){
    
    if(mysqli_query($db, $query)){
        echo "Successfully";
    }else{
        echo "Not successfully";
        exit;
    }
}

//$conn = mysqli_connect("localhost", "root", "", "zakupy");
//
//if(isset($_POST["title"])){
//    $title = mysqli_real_escape_string($conn, $_POST["title"]);
//    $query = "INSERT INTO produkty(towar) VALUES('".$title."')";
//    
//    if(mysqli_query($conn, $query)){
//        echo 'Data Inserted successfully';
//    }
//}