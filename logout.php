<?php  

require_once("dbconnect.php");

$select = "SELECT * FROM user";
$result = mysqli_query($conn, $select);


if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
     if ($row["api_key"] == $_POST["apikey"]){
   
    	    $update = "UPDATE user SET is_online = '0' WHERE api_key = '".$row["api_key"]."'";
            mysqli_query($conn, $update);
	 } 
    } 
}

?>