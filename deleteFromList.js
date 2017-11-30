function deleteFromList(text){
 
      var produkt = text;
    
      var form = $("form input");

    console.log(text);
    
    
    $.ajax(
        {
            type: "POST",
            url: "removeFromList.php",
             dataType: 'json',
            data: {
                product: produkt
                
            },
            cache: false,
            success: function(message){
                $("#return").empty().append(message);
               
            }
        });
}
