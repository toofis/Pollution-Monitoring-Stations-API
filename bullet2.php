<?php

require_once("dbconnect.php");

$mes = "Μη έγκυρο api key";
$apk_result = mysqli_query($conn, "SELECT api_key FROM user");

if (mysqli_num_rows($apk_result) > 0) {
    while($row = mysqli_fetch_assoc($apk_result)) {
      if ($_GET["apikey"] == $row["api_key"]){
          $conn->query("UPDATE user SET counter2 = counter2 + 1 WHERE api_key = '".$row["api_key"]."'");
		  $mes = "ok";
      }
    } 
}

$rows = array();
 	

if($_GET["id"] == "all"){
	$result = $conn->query("SELECT onoma, id, timh, geog_m, geog_p FROM metrhsh,stathmos 
    WHERE stathmos_id=id AND datetime='".$_GET["datetime"]."'AND rypos='".$_GET["rypos"]."' GROUP BY id");
}
else{
	$result = $conn->query("SELECT onoma, id, timh, geog_m, geog_p FROM metrhsh,stathmos 
    WHERE stathmos_id='".$_GET["id"]."' AND stathmos_id=id AND datetime='".$_GET["datetime"]."'AND rypos='".$_GET["rypos"]."'");
} 	

while($r = mysqli_fetch_assoc($result)) {
  	$rows[] = $r;
}


$rows[0]["message"] = $mes;

$result->free();

echo json_encode($rows);

header('Content-Type: application/json');

?>
