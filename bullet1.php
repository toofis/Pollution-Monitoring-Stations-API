<?php

require_once("dbconnect.php");


$mes = "Μη έγκυρο api key";
$apk_result = mysqli_query($conn, "SELECT api_key FROM user");

if (mysqli_num_rows($apk_result) > 0) {
    while($row = mysqli_fetch_assoc($apk_result)) {
     if ($_GET["apikey"] == $row["api_key"]){
          $conn->query("UPDATE user SET counter1 = counter1 + 1 WHERE api_key = '".$row["api_key"]."'");
		  $mes = "ok";
     }
    } 
}

$result = $conn->query("SELECT * FROM stathmos");

$rows = array();
while($r = mysqli_fetch_assoc($result)) {
   $rows[] = $r;
}

$rows[0]["message"] = $mes;

$result->free();

echo json_encode($rows);

header('Content-Type: application/json');
?>
