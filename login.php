<?php  

require_once("dbconnect.php");


$select = "SELECT * FROM user";
$result = mysqli_query($conn, $select);

$saltedPW = $_POST["password"] . $salt;
$hashedPW = hash('sha256', $saltedPW);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
     if ($row["email"] == $_POST["email"] and $row["password"] == $hashedPW){
    	    $update = "UPDATE user SET is_online = '1' WHERE email ='".$row["email"]."'" ;
            mysqli_query($conn, $update);
            $data = array("email" => $row["email"], "apikey" => $row["api_key"], "login" => 1, "admin" => $row["admin"], "pass" => $row["password"]);
            break;
	 }
	 else{
	 	$data = array("email" => 0, "apikey" => 0, "login" => 0, "admin" => 0, "pass" => $hashedPW);
     } 
	}
}
$result->free();



$json = json_encode($data);

echo ($json);

header('Content-Type: application/json');
?>