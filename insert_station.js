
  
  $("#in_st_form").submit(function(e){

     if(ValidateForm("in_st_form")){  
     
        e.preventDefault();
        
        $.ajax({
            url: "insert_station.php",
            type: "get",
            data: $("#in_st_form").serialize()+ "&apikey=" + apikey,
            success: function(message){
                alert(message);
            },
        });        
    }
 $("#in_st_form").hide();
 $("#return_inst").hide();
 $(".menu").show(1000);   
 });


function ValidateForm(form_id)
{
    var msg = "",
        fields = document.getElementById(form_id).getElementsByTagName("input");

    for (var i=0; i<fields.length-1; i++){
        if (fields[i].value == "") 
            msg += 'Συμπληρώστε το πεδίο: ' + fields[i].placeholder + '\n';
    }

    if(msg) {
        alert(msg);
        return false;
    }
    else
        return true;
}