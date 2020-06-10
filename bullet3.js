  $("#bullet3_form").submit(function(e){
    e.preventDefault();
    $.ajax({
        url: "bullet3.php",
        type: "get",
        data: $("#bullet3_form").serialize()+"&apikey=" + apikey,
        dataType: "json",
        success: function(arr){
           $("#bullet3_form").hide();
           $("#bullet3_res").show(200);
           $("#bullet3_res").empty();
           if(arr[0]["message"] == "ok"){
              if (arr[0].timh != null){
                 if($("#onoma3").val() == "all"){
                     var out = "<table><tr><td>Σταθμός</td><td>Mέσος όρος</td><td>Τυπική απόκλιση</td><td>Γεωγραφικό Μήκος</td><td>Γεωγραφικό Πλάτος</td><td>";
                     for(var i = 0; i < arr.length; i++) {
                       out += "<tr><td>" +
                       arr[i].onoma +
                       "</td><td>" +
                       arr[i].mean +
                       "</td><td>" +
                       arr[i].sd +
                       "</td><td>" +
                       arr[i].geog_m +
                       "</td><td>" +
                       arr[i].geog_p +
                       "</td></tr>";
                     }
               }
               else{
                   var out = "<table><tr><td>Mέσος όρος</td><td>Τυπική απόκλιση</td><td>Γεωγραφικό Μήκος</td><td>Γεωγραφικό Πλάτος</td><td>";
                   for(var i = 0; i < arr.length; i++) {
                     out += "<tr><td>" +
                     arr[i].mean +
                     "</td><td>" +
                     arr[i].sd +
                     "</td><td>" +
                     arr[i].geog_m +
                     "</td><td>" +
                     arr[i].geog_p +
                     "</td></tr>";
                   }
               }
               out += "</table>";
               $(out).appendTo('#bullet3_res');
            }
            else{
                  var out = "<h4>Η βάση δεν περιέχει τις ζητούμενες μετρήσεις</h4>";
                  $(out).appendTo('#bullet3_res');
            }
         }
         else{
               $("<h4>" + arr[0]["message"] + "</h4>").appendTo("#bullet3_res");
         }
        },
    });        
  });