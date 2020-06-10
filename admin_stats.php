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

$result = mysqli_query($conn, "SELECT email, api_key, counter1, counter2, counter3, (counter1 + counter2 + counter3) as sum  FROM user ORDER BY sum DESC");
$sums = mysqli_query($conn, "SELECT sum(counter1) as sum1, sum(counter2) as sum2, sum(counter3) as sum3 FROM user");

$count = 0;
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
      	$arr[$count]["sum"] = $row["sum"];
        $arr[$count]["onoma"] = $row["email"];
      	$arr[$count]["apikey"] = $row["api_key"];
        $count++;
      	
    } 
}

arsort($arr);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($sums)) {
    	$arr[0]["sum1"] = $row["sum1"];
    	$arr[0]["sum2"] = $row["sum2"];
    	$arr[0]["sum3"] = $row["sum3"];
    }
}

$arr[0]["count"] = $count; 

$result->free();
$sums->free();

echo json_encode($arr);
}
else{
  echo $mes;
}


header('Content-Type: application/json');

?>
