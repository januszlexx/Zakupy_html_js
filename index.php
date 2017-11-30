<!DOCTYPE html>
<html lang="en">
<?php
require_once('connect.php');
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Document</title>
    <!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">-->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
     <script src="http://code.jquery.com/jquery-1.8.0.min.js" type="text/javascript"></script>
      <script src="zapisz.js" type="text/javascript"></script>
     
</head>

<body>
      <input type="button" value="Pobierz tekst z pliku" id="button">
   <div id="result">Result ...</div>
    <div class="container">
         
        <main class="app-container">
            <h3 class="text-center">Lista zakupów</h3>
            <section class="new-task-container">
               
                <form id="insert-data" method="post" action="#">
                    <div class="input-group">
                        <input type="text" class="form-control" name="input" id="input" placeholder="Nazwa produktu ...">
                        <span class="input-group-btn">
                       <button id="submit" class="btn btn-primary" type="submit" onclick="autozapis();">Dodaj produkt</button>
                   </span>
                    </div>
                </form>
            </section>
            <section class="tasks-container">
                <ul>
                </ul>
            </section>
   <div id="return"></div>
       
       
        </main>
    
      
    </div>
   
    <script type="text/javascript" src="ajax_download.js"></script>
    <script type="text/javascript" src="deleteFromList.js"></script>
<!--    <script type="text/javascript" src="pobierz.js"></script>-->

    <script src="js/app.js"></script>
    <script src="js/modules/tasks.js"></script>
    <script src="js/modules/new-task.js"></script>
    <script src="js/modules/tasks-list.js"></script>
  

</body>

</html>
