<?php

require_once("dbconnect.php");



$mes = "Μη έγκυρο api key";
$apk_result = mysqli_query($conn, "SELECT api_key,admin FROM user");

if (mysqli_num_rows($apk_result) > 0) {
    while($row = mysqli_fetch_assoc($apk_result)) {
      if ($_GET["apikey"] == $row["api_key"] && $row["admin"] == 1){
 		  $mes = "ok";
      }
    } 
}

if($mes == "ok"){

$delete_met = "DELETE FROM metrhsh WHERE stathmos_id='".$_GET['id']."'";
$delete = "DELETE FROM stathmos WHERE id='".$_GET['id']."'";

$conn->query($delete_met);


	if ($conn->query($delete) === TRUE) {
	  echo "Ο σταθμός διεγράφη";
	} 
	else {
	    echo "Σφάλμα κατά την διαγραφή";
	}
}
else{
	echo "Μη έγκυρο api key";
}

$conn->close();
?>