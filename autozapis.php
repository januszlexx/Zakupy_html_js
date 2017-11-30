<?php
// Pobieranie zawartości 
$produkt = $_POST['keyProduct'];



$kod = $produkt; 
$kod2 = ",\n'".$produkt."'"; 
$date = date("Y-m-d H:i");
$result = array('towar' => $produkt, 'data' => $date);

  

print_r(json_encode($result));
$result = json_encode($result);

if($kod){   
    //if(file_put_contents('tasks1.json', $result, FILE_APPEND)) {
    if(file_put_contents('tasks1.json', $result, FILE_APPEND)) {
    echo 'Ostatni zapis: ', date("H:i");
    }else{
    echo"Niestety nie mogłem wykonać autozapisu!";
    }
}

/*
$produkt = $_POST['Produkt'];
$data = $_POST['time'];
echo $produkt;
$result = array();
 $result['someResultVar1'] = 'Po obróbce ' + $a + $a; //przykładowe działanie na zmiennej
    $result['someResultVar2'] = 'Po obróbce ' + $b + $b;

    if(file_put_contents('tasks1.json', trim($result)."\n", FILE_APPEND)) // zapis kodu do pliku 
{
echo 'Ostatni zapis: ', date("H:i");
}else
{
echo"Niestety nie mogłem wykonać autozapisu!";
}*/
?>