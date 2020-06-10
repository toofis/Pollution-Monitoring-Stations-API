  $.ajax({
        url: "load_stathmous.php",
        dataType: "json",
        success: function(arr){
           var idb = "<option value='all'>Όλοι οι σταθμοί</option>";
           var ida = "<option value='all'>Σταθμός</option>";
           var ids ="";
           for(var i = 0; i < arr.length; i++) {
             ids += "<option value=" +
             arr[i].id +
             ">" +
             arr[i].onoma +
             "</option>";
           }
           $("#onomad").empty();
           $("#onoma").empty();
           $("#onoma2").empty();
           $("#onoma3").empty();

           $(ida+ids).appendTo('#onomad');
           $(ida+ids).appendTo('#onoma');
           $(idb+ids).appendTo('#onoma2');
           $(idb+ids).appendTo('#onoma3');
       },
  });
  
    $("#etos").empty();
    year = "<option>Έτος Αναφοράς</option>";
  for(var y = 1984; y < 2015; y++) {
     year += "<option value=" +
     y+
     ">" +
     y +
     "</option>";
  }
  $(year).appendTo('#etos');
