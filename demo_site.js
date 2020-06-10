$(document).ready(function() {

      $.getScript( "load_stathmous.js" );
      
      $("#bullet2_form").hide();
      $("#bullet3_form").hide();
      $("input:radio").attr("checked", false);

      
      $('input[type=radio][name=formep]').change(function() {
        if (this.value == 'bul1') {
            $("#bullet2_form").show(600);
            $("#bullet3_form").hide();
        }
        else if (this.value == 'bul2') {
            $("#bullet3_form").show(600);
            $("#bullet2_form").hide();
        }
    });

      


	    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      maxZoom:14,
      center: new google.maps.LatLng(37.986300, 23.727780),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
     
    var apikey= '10a22c9925ccaed0fd0687b4e2b0839caf7bb306099102c2f98d2bab6e9c116f' ; 
    var infowindow = new google.maps.InfoWindow();
	  var marker = [];
    var i;
    var heatmap;
    var stoixeia;
    var infowindow = [];
    
     heatmap = new google.maps.visualization.HeatmapLayer({
        map:map,
        radius:4.26
    });
     7;

   
   google.maps.event.addListener(map,'zoom_changed', function() {
    var p=Math.pow(2,map.getZoom())/15;
      heatmap.set('radius', p);
  });

  

    function katharismos (){
    return $.ajax({
        url: "bullet1.php",
        type: "get",
         //data: "apikey=" + apikey,
        dataType: "json",

        success: function(arr){ 
          for (i = 0; i < arr.length; i++){
          
              infowindow[arr[i].id].setContent("<b>" + arr[i].onoma + "</b> <br>");
            }

   },
    });   

}   


	  $.ajax({
	      url: "bullet1.php",
	      type: "get",
	      dataType: "json",
        //data: "apikey=" + apikey,
	      asynq: "false",
	      success: function(arr){ 
	      	
    
    

    

    for (i = 0; i < arr.length; i++) {  
      marker [arr[i].id] = new google.maps.Marker({
        position: new google.maps.LatLng(arr[i].geog_m,arr[i].geog_p),
        map: map
      });
      infowindow[arr[i].id] = new google.maps.InfoWindow({
        content: "<b>" + arr[i].onoma + "</b> <br>",
      });

      google.maps.event.addListener(marker[arr[i].id], 'click', (function(marker, i) {
        return function() {
          infowindow[arr[i].id].open(map, marker[arr[i].id]);
        }
      })(marker, i));
    }
   
    

    
	      },
	  }); 	


$("#bullet2_form").submit(function(e){
    e.preventDefault();
    $.when(katharismos()).done(function(b){
    $.ajax({
        url: "bullet2.php",
        type: "get",
        data: $("#bullet2_form").serialize()+ "&apikey=" + apikey,
        dataType: "json",
        success: function(arr){       
          var vData = [];
          heatmap.setData(vData);
          if (arr[0].timh!=null){
           for (i = 0; i < arr.length; i++){
          
          vData.push({ location  : new google.maps.LatLng(arr[i].geog_m,arr[i].geog_p), weight : arr[i].timh});
          
          infowindow[arr[i].id].setContent("<b>" + arr[i].onoma + "</b> <br>Tιμή ρύπου : "+ arr[i].timh + "<br>");
        }
      }
          heatmap.setData(vData);

          
        },
      }); 
    });       

  });

$("#bullet3_form").submit(function(e){

    e.preventDefault();
    $.when(katharismos()).done(function(b){
    $.ajax({
        url: "bullet3.php",
        type: "get",
        data: $("#bullet3_form").serialize()+ "&apikey=" + apikey,
        dataType: "json",
        success: function(arr){
          var vData = [];
          heatmap.setData(vData);
          if (arr[0].mean!=null){
           for (i = 0; i < arr.length; i++){
            infowindow[arr[i].id].setContent("<b>" + arr[i].onoma + "</b> <br>Μέση Τιμή : "+ arr[i].mean + "<br>Τυπ.Απόκλιση : " +arr[i].sd +"<br>");
          vData.push({ location  : new google.maps.LatLng(arr[i].geog_m,arr[i].geog_p), weight : arr[i].mean});
        }
      }
          heatmap.setData(vData);
        },
    });        
  });
});

  

});

