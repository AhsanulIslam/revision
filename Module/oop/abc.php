<?php 

		$person = $_GET['data'];


		$obj = json_decode($person);


		echo $obj-> name;


?>