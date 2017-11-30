<?php
$server = 'localhost';
$user = 'root';
$password = '';
$db_name = 'zakupy';

$db = mysqli_connect($server, $user, $password, $db_name);

if(mysqli_connect_errno()){
    echo 'Błąd połączenia';
    exit;
}else{
    
}
?>