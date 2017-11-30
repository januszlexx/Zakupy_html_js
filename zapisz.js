function autozapis()
{   
    $("#input").focusin();
            // Pobieranie zawartości z elementów o danym id
        var produkt = $("#input").val();
        var check = $("#toggle").val();
       
     var form = $("form input");
      $.ajax( // wywołanie ajaxa
      { 
         type: "POST", // Oczywiście można zmienić na GET, ale długość wiadomości będzie ograniczona
//         url: "autozapis.php",
         url: "ajax_insert.php",
//         dataType: 'json',
         data: { 
             keyProduct: produkt
//            form.serialize()
         }, 
          cache: false,
         success: function(response, message){   
             console.log(response);
            $("#return").empty().append(message); // Wyświetlanie kiedy został wykonany ostatni zapis
         }       
      });
     // setTimeout("autozapis()", 60000);    // Odpowiada za zapis co 60 sek    
}
$(document).ready(function() {      // Funkcja wykona się dopiero gdy strona zostanie załadowana
autozapis(); // Wywołanie funkcji
});