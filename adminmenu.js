$(document).ready(function() {

	var apikey = sessionStorage.getItem('myapikey');
	var email  = sessionStorage.getItem('myemail');
    
    $("<h2>Καλως ήρθατε,   " + email + "</h2>").appendTo('#message');


        
	$.getScript( "load_stathmous.js" );
    $.getScript( "insert_station.js" );
    $.getScript( "delete_station.js" );
	$.getScript( "bullet1.js" );
	$.getScript( "bullet2.js" );
	$.getScript( "bullet3.js" );
	$.getScript( "logout.js" );

	
    
    $("form").hide();
    $(".return").hide(200);
    $(".results").hide;
    

    $("#in_st_button").click(function(){
	   $(".menu").hide(200);
	   $(".stats").hide()
   	   $("#return_inst").show();
	   $("#in_st_form").show(600);
	});

	
	$("#in_csv_button").click(function(){
       $.getScript( "load_stathmous.js" );
	   $(".menu").hide(200);
   	   $(".stats").hide()
   	   $("#return_incsv").show();
	   $("#in_csv_form").show(600);
	});

	
	$("#del_st_button").click(function(){
       $.getScript( "load_stathmous.js" );
	   $(".menu").hide(200);
   	   $(".stats").hide()
	   $("#return_delst").show();
	   $("#del_st_form").show(600);
	});

	$("#bullet2").click(function(){
	   $(".menu").hide(200);
   	   $(".stats").hide()
	   $("#return_bullet2").show();
	   $("#bullet2_form").show(600);
	});

	$("#bullet3").click(function(){
	   $(".menu").hide(200);
   	   $(".stats").hide()
       $("#return_bullet3").show();
	   $("#bullet3_form").show(600);
	});


   	$(".return").click(function(){
   	   $("form").hide();
   	   $(".return").hide()
   	   $(".results").hide()
	   $("#message").show(200);
   	   $(".stats").show(200)
   	   $(".menu").show(200)
   	});


$.ajax({
		            url: "admin_stats.php",
		            type: "get",
		            data: "apikey=" + apikey,
		            dataType: "json",
		            success: function(stats){
		                 var first = "<table><tr><td>Είδος request</td><td>Συνολικό πλήθος κλήσεων</td>";
		                 first += "<tr><td>Εμφάνιση σταθμών</td><td>" + stats[0].sum1 + "</td></tr>";
		                 first += "<tr><td>Εμφάνιση τιμής ρύπου</td><td>" + stats[0].sum2 + "</td></tr>";
		                 first += "<tr><td>Εμφάνιση μέσου όρου και τυπικής απόκλισης</td><td>" + stats[0].sum3 + "</td></tr>";
		                 first += "</table><br>";

		                 var second = "<table><tr><td>Top 10 api keys</td><td>Συνολικό πλήθος κλήσεων</td>";
		                 for(var i=0; i<stats[0].count; i++){
		                 	second += "<tr><td>" + stats[i].onoma + "</td><td>" + stats[i].sum + "</td></tr>";
		                 }
		                 second += "</table><br>";

		                 var third = "<table><tr><td>Συνολικός αριθμός api keys</td><td>" + stats[0].count + "</td></tr></table><br>";

		                 var out = first + third + second;
		                 $(".stats").empty();
		                 $(first).appendTo('#stats1');
		                 $(second).appendTo('#stats2');
		                 $(third).appendTo('#stats3');

		            },
		});

$("button").click(function(){

		$.ajax({
		            url: "admin_stats.php",
		            type: "get",
		            data: "apikey=" + apikey,
		            dataType: "json",
		            success: function(stats){
		                 var first = "<table><tr><td>Είδος request</td><td>Συνολικό πλήθος κλήσεων</td>";
		                 first += "<tr><td>Εμφάνιση σταθμών</td><td>" + stats[0].sum1 + "</td></tr>";
		                 first += "<tr><td>Εμφάνιση τιμής ρύπου</td><td>" + stats[0].sum2 + "</td></tr>";
		                 first += "<tr><td>Εμφάνιση μέσου όρου και τυπικής απόκλισης</td><td>" + stats[0].sum3 + "</td></tr>";
		                 first += "</table><br>";

		                 var second = "<table><tr><td>Top 10 api keys</td><td>Συνολικό πλήθος κλήσεων</td>";
		                 for(var i=0; i<stats[0].count; i++){
		                 	second += "<tr><td>" + stats[i].onoma + "</td><td>" + stats[i].sum + "</td></tr>";
		                 }
		                 second += "</table><br>";

		                 var third = "<table><tr><td>Συνολικός αριθμός api keys</td><td>" + stats[0].count + "</td></tr></table><br>";

		                 var out = first + third + second;
		                 $(".stats").empty();
						 $(first).appendTo('#stats1');
		                 $(second).appendTo('#stats2');
		                 $(third).appendTo('#stats3');		            
		             },
		});
	});

});
