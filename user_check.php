<?php  

require_once("dbconnect.php");

$select = "SELECT * FROM user";
$result = mysqli_query($conn, $select);


$data = array("message" => "ok");

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
     if ($row["api_key"] == $_POST["apikey"]){
     	if ($row["admin"] == 0)
     		$data = array("message" => "user");
 	 } 
 	} 
}

$json = json_encode($data);

echo ($json);

header('Content-Type: application/json');

?>