<?php

require_once("dbconnect.php");

$saltedPW =  $_POST["password"] . $salt;
$saltedapk = $_POST["email"] . $salt;

$hashedPW = hash('sha256', $saltedPW);
$hashedapk = hash('sha256', $saltedapk);


$insert = "INSERT INTO user (email, password, admin, api_key, is_online, counter1, counter2, counter3) VALUES('".$_POST["email"]."', '".$hashedPW."', '0', '".$hashedapk."', '1', '0', '0', '0')";



if ($conn->query($insert) === TRUE)
     $data = array("email" => $_POST["email"], "apikey" => $hashedapk, "login" => 1, "admin" => 0);
else 
	 $data = array("email" => 0, "apikey" => 0, "login" => 0, "admin" => 0);


$json = json_encode($data);
echo ($json);
header('Content-Type: application/json');

?>
