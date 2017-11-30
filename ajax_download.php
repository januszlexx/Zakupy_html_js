<?php
require_once('connect.php');

$sql = "SELECT product FROM shops WHERE delete_btn = 'existing'";

$myArray = array();

if($result = mysqli_query($db, $sql)){
    
    while($row = mysqli_fetch_row($result)){
       $myArray[] = $row;
        
    }
}
echo json_encode($myArray);


