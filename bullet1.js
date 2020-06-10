$("#bullet1").click(function(){	
 $("#user_stats").hide();

  $.ajax({
    url: "bullet1.php",
    type: "get",
    data: "apikey=" + apikey,
    dataType: "json",
    success: function(arr){
    	if(arr[0]["message"] == "ok"){
	        if(arr[0].id != null){
	        	var out = "<table class='results'><tr><th>ID</th><th>Όνομα</th><th>Γεωγραφικό Μήκος</th><th>Γεωγραφικό Πλάτος</th></tr>";
			    for(var i = 0; i < arr.length; i++) {
				out += "<tr><td>" +
				arr[i].id +
				"</td><td>" +
				arr[i].onoma +
				"</td><td>" +
				arr[i].geog_m +
				"</td><td>" +
				arr[i].geog_p +
				"</td></tr>";
			    }
	       	out += "</table>";
	       	}
	       	else{
	       		var out = "<h4  class='results'>Η βάση δεν περιέχει σταθμούς</h4>"
	       	}
	        $(".menu").hide(200);
       	    $(".stats").hide()
			$("#bullet1_res").empty();
	        $("#return_bullet1").show(200);
		    $("#bullet1_res").show(200);
            $(out).appendTo('#bullet1_res');

	    }
	    else{
            $("#bullet1_res").empty();
	    	$("<h4  class='results'>" + arr[0]["message"] + "</h4>").appendTo("#bullet1_res");
	    }
	},
  });
});

$("#bullet11").click(function(){
    $("#bullet1_res").empty();
    $("#bullet11").hide();
    $("#bullet1").show();
});
	