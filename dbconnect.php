<?php

$servername = "localhost";
$username = "root";
$password = "linux";
$dbname = "ypeka";
$salt = "D3nTh@mp3|$p0T3";


$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn,'utf8');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?> 