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


$select = "SELECT id FROM stathmos";
$result = mysqli_query($conn, $select);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        if ($row["id"] == $_GET["id"]) $insert_flag = 1;
    } 
}

$result->free();

if (!$insert_flag && $mes == "ok")
{
	$result = "INSERT INTO stathmos (id, onoma, geog_m, geog_p) VALUES('".$_GET["id"]."', '".$_GET["onoma"]."', '".$_GET["geogm"]."', '".$_GET["geogp"]."')";

	
	if ($conn->query($result) === TRUE){
	echo ("Ο νέος σταθμός προστέθηκε στη βάση σας");
	}
}
elseif($insert_flag == 1){
	echo "Υπάρχει σταθμός με το ίδιο id";
}
elseif($mes == "Μη έγκυρο api key"){
	echo "Μη έγκυρο api key";
}











?>