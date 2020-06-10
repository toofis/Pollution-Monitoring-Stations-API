$.ajax({
		            url: "admin_stats.php",
		            type: "get",
		            data: "apikey=" + apikey,
		            dataType: "json",
		            success: function(stats){
		                 var first = "<table><tr><td>Είδος request</td><td>Συνολικό πλήθος κλήσεων</td>";
		                 first += "<tr><td>Εμφάνιση σταθμών</td><td >" + stats[0].sum1 + "</td></tr>";
		                 first += "<tr><td>Εμφάνιση τιμής ρύπου</td><td>" + stats[0].sum2 + "</td></tr>";
		                 first += "<tr><td>Εμφάνιση μέσου όρου και τυπικής απόκλισης</td><td>" + stats[0].sum3 + "</td></tr>";
		                 first += "</table><br>";

		                 var second = "<table><tr><td align="center">Top 10 api keys</td><td align="center">Συνολικό πλήθος κλήσεων</td>";
		                 for(var i=0; i<stats[0].count; i++){
		                 	second += "<tr><td align="center">" + stats[i].onoma + "</td><td align="center">" + stats[i].sum + "</td></tr>";
		                 }
		                 second += "</table>";

		                 var third = "<table><tr><td align="center">Συνολικός αριθμός api keys</td><td align="center">" + stats[0].count + "</td></tr></table>";

		                 var out = first + third + second;
		                 $("#admin_stats").empty();
		                 $(first).appendTo('#stats1');
		            },
		});