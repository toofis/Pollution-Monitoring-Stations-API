$("button").click(function() {

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
});

