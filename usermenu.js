$(document).ready(function() {

var apikey = sessionStorage.getItem('myapikey');
var email  = sessionStorage.getItem('myemail');

    $("<h2>Καλως ήρθατε,   " + email + "</h2>").appendTo('#message');


if(apikey == null){
        $("form").hide();
        $("button").hide();
        $("div").hide();
        window.location.replace("http://localhost/intromenu.html");
}
else{
  $("form").hide();
  $(".return").hide();

  $.getScript( "load_stathmous.js" );
  $.getScript( "user_stats.js" );
  $.getScript( "bullet1.js" );
  $.getScript( "bullet2.js" );
  $.getScript( "bullet3.js" );
  $.getScript( "logout.js" );

	$("#bullet2").click(function(){
       $.getScript( "load_stathmous.js" );
	   $(".menu").hide(200);
   	   $("#user_stats").hide();
	   $("#return_bullet2").show();
	   $("#bullet2_form").show(600);
	});

	$("#bullet3").click(function(){
	   $(".menu").hide(200);
   	   $("#user_stats").hide();
       $("#return_bullet3").show();
	   $("#bullet3_form").show(600);
	});

   	$(".return").click(function(){
   	   $("form").hide(200);
   	   $(".return").hide();
   	   $("div").hide();
   	   $("#user_stats").show(200);
   	   $(".menu").show(200);
   	});

   	 $.ajax({
            url: "user_stats.php",
            type: "get",
            data: "apikey=" + apikey,
            dataType: "json",
            success: function(stats){
                 var out = "<table><tr><td>Είδος request</td><td>Πλήθος κλήσεων request</td>";
                 out += "<tr><td>Εμφάνιση σταθμών</td><td>" + stats.counter1 + "</td></tr>";
                 out += "<tr><td>Εμφάνιση τιμής ρύπου</td><td>" + stats.counter2 + "</td></tr>";
                 out += "<tr><td>Εμφάνιση μέσου όρου και τυπικής απόκλισης</td><td>" + stats.counter3 + "</td></tr>";
                 out += "</table>";
                 $("#user_stats").empty();
                 $(out).appendTo('#user_stats');
            },
    });

}

});