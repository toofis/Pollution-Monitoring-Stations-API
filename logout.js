var apikey = sessionStorage.getItem('myapikey');

$("#logout").click(function(e){
            $.ajax({
               url: "logout.php",
               type: "post",
               data: "apikey=" + apikey,
               success: function(){
                  window.location.replace("http://localhost/intromenu.html");
               },
            });
sessionStorage.setItem('myapikey','');

});
