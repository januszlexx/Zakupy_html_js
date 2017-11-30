$(document).ready(function(){
    $("#button").click(function(){
        $.ajax({
            type: "GET",
            url: "ajax_download.php",
            contentType: "application/json; charset=utf-8",
            dataType: "json",

            success: function(json){
                for(var key in json){
                    var row = json[key];
                    var towar = row[0];

                    addNewTask(towar);
                    console.log(towar);
                }
            },

            error: function(jqXHR){
                console.log(jqXHR);
            }

        });
    });
    
    
});
