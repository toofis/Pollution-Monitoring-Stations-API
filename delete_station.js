
  $("#del_st_form").submit(function(e){

    e.preventDefault();

    $.ajax({
        url: "delete_station.php",
        type: "get",
        data: $("#del_st_form").serialize()+ "&apikey=" + apikey,
        success: function(message){
           alert(message);
        },
    });        
  $("#del_st_form").hide();
  $("#return_delst").hide();
  $(".menu").show(1000);   
  });
