  $("#bullet2_form").submit(function(e){
    e.preventDefault();
    $.ajax({
        url: "bullet2.php",
        type: "get",
        data: $("#bullet2_form").serialize() + "&apikey=" + apikey,
        dataType: "json",
        success: function(arr){
           $("#bullet2_form").hide();
           $("#bullet2_res").show(200);
           $("#bullet2_res").empty();
           
           if(arr[0]["message"] == "ok"){
              if (arr[0].timh != null){
                if($("#onoma2").val() == "all"){
                   var out = "<table><tr><td>Σταθμός</td><td>Τιμή</td><td>Γεωγραφικό Μήκος</td><td>Γεωγραφικό Πλάτος</td><td>";
                   for(var i = 0; i < arr.length; i++) {
                     out += "<tr><td>" +
                     arr[i].onoma +
                     "</td><td>" +
                     arr[i].timh +
                     "</td><td>" +
                     arr[i].geog_m +
                     "</td><td>" +
                     arr[i].geog_p +
                     "</td></tr>";
                   }
                 }
                 else if (arr[0].timh != null){
                    var out = "<h4>Η βάση δεν περιέχει τις ζητούμενες μετρήσεις</h4>"
                 }
                 else{
                   var out = "<table><tr><td>Τιμή</td><td>Γεωγραφικό Μήκος</td><td>Γεωγραφικό Πλάτος</td><td>";
                   for(var i = 0; i < arr.length; i++) {
                     out += "<tr><td>" +
                     arr[i].timh +
                     "</td><td>" +
                     arr[i].geog_m +
                     "</td><td>" +
                     arr[i].geog_p +
                     "</td></tr>";
                   }
                }
                out += "</table>";
               $(out).appendTo('#bullet2_res');
            }
            else{
                  var out = "<h4>Η βάση δεν περιέχει τις ζητούμενες μετρήσεις</h4>";
                  $(out).appendTo('#bullet2_res');
            }
          }
          else{ 
               $("<h4>" + arr[0]["message"] + "</h4>").appendTo("#bullet2_res");
          }
        },
    });        

  });
