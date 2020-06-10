<?php

require_once("dbconnect.php");

 $result = $conn->query("SELECT DISTINCT id, onoma FROM stathmos");

 $rows = array();
 while($r = mysqli_fetch_assoc($result)) {
     $rows[] = $r;
 }

echo json_encode($rows);

header('Content-Type: application/json');

?>

