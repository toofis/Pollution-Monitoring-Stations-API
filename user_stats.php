<?php

require_once("dbconnect.php");

$result = mysqli_query($conn, "SELECT api_key, counter1, counter2, counter3 FROM user");

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
      	if ($_GET["apikey"] == $row["api_key"]){
        	$rr = $row;  
        }
    } 
}

$result->free();

echo json_encode($rr);

header('Content-Type: application/json');

?>
