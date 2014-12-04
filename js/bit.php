<?php
header('Content-type: application/json');
$homepage = file_get_contents('https://www.bitstamp.net/api/ticker/');
echo $homepage;
?>
