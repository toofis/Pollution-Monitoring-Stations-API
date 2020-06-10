<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

    <link rel="stylesheet" type="text/css" href="menu.css">    

</head>

<body>

<form action="http://localhost/adminmenu.html">
    <input type="submit" value="Επιστροφή">
</form>
<?php

require_once("dbconnect.php");



$select = "SELECT pkey FROM metrhsh";
$result = mysqli_query($conn, $select);

$insert_flag = 0;

$file_handle = fopen($_FILES["fileToUpload"]["tmp_name"], "r");

while (!feof($file_handle) ) {
    
    $data = fgetcsv($file_handle, 1024);
    $num = count($data);
    $row++;
    $date = explode("-", $data[0]);

    for ($c=1; $c < $num; $c++){
    		if($data[$c] != -9999 & $insert_flag == 0){
            $hour=$c-1;
        		$datetime = "$date[2]-" . "$date[1]-" . "$date[0]-" . "$hour-" . "00-00" ;
        		$pkey = $_POST["onomac"].$_POST["ryposc"].$datetime;
                
                if (mysqli_num_rows($result) > 0) {
                    while($row = mysqli_fetch_assoc($result)) {
                        if ($row["pkey"] == $pkey){
                            $insert_flag = 1;
                            break;   
                        } 
                    } 
                }

                if(!$insert_flag){
                    $insert = "INSERT INTO metrhsh (pkey, stathmos_id, rypos, datetime, etos, timh) VALUES('".$pkey."', '".$_POST["onomac"]."', '".$_POST["ryposc"]."', '".$datetime."', '".$_POST["etos"]."', '".$data[$c]."')";
            	    $conn->query($insert);
            	}
        }
    }
}
if($insert_flag == 0) echo "<p>Οι μετρήσεις καταχωρήθηκαν με επιτυχία!</p>";
fclose($file_handle);


?>

</body>
</html>