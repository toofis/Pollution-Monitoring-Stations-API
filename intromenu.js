$(document).ready(function() {
      
      var speed = 600;

      $("#signup_form").hide();
      $(".return").hide();

        $("#account").click(function(){
          $("#login_form").hide(speed);
          $("#signup_form").show(speed);
          $(".return").show(speed);
          $("#account").hide(speed);
        });

      
    $(".return").click(function(){
       $("form").hide();
       $(".return").hide();
       $("#login_form").show(speed);
       $("#account").show(speed);
    });
 

      $("#login_form").submit(function(e){
        e.preventDefault();
        if(ValidateForm("login_form")){  
              $.ajax({
                  url: "login.php",
                  type: "post",
                  data: $("#login_form").serialize(),
                  dataType: "json",
                  success: function(message){
                     if(message.login == 1 && message.admin == 1){  
                          sessionStorage.setItem('myapikey', message.apikey);
                          sessionStorage.setItem('myemail', message.email);
                          window.location.replace("http://localhost/adminmenu.html");
                     }
                     else if (message.login == 1){
                          sessionStorage.setItem('myapikey', message.apikey);
                          sessionStorage.setItem('myemail', message.email);
                          window.location.replace("http://localhost/usermenu.html");
                     }
                     else if (message.login == 0){
                         $("#login_err").empty();
                         $("<b>Λάθος email ή κωδικός!</b>").appendTo("#login_err");
                     } 
                  },
              });
          }        
      });
    


      $("#signup_form").submit(function(e){
          e.preventDefault();
          if (!isEmail("#email")){
              $("#signup_err").empty();
              $("<b>To email δεν είναι έγκυρο</b>").appendTo("#signup_err");
          }
          else if(!conf_pass("#signup_form")){
              $("#signup_err").empty();
              $("<b>Πληκτρολογίστε τον ίδιο κωδικό</b>").appendTo("#signup_err");
          }
          else{
              $.ajax({
                  url: "sign_up.php",
                  type: "post",
                  data: $("#signup_form").serialize(),
                  dataType: "json",
                  success: function(message){
                     if(message.login == 1){
                         sessionStorage.setItem('myapikey', message.apikey);
                         sessionStorage.setItem('myemail', message.email);
                         window.location.replace("http://localhost/usermenu.html");  
                     }
                  },
              });
          }
      });

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



function isEmail(email) {
    var x = document.forms["signup_form"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        return false;
    }
    else
        return true;
}


function conf_pass(form_id)
{
      
    if ($("password").val() != $("conf_password").val()) {
        return false;
    }
    else
        return true;
}

