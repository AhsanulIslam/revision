<?php 

		// $person = $_GET['data'];
		// $obj = json_decode($person);
		// echo $obj-> name;


 //json ar moto dekte string  ----server to client 
	// $data = '{      
	// 	"name"    : "A. Imon",
	// 	"dept"    : "cs",
	// 	"email"   : "imn9906@gmail.com",
	// 	"id"      : 17-35499-3

	// }';
	// echo $data;

//assosiative Array
		$data = [      
		"name"    => "A. Imon",
		"dept"    => "cs",
		"email"   => "imn9906@gmail.com",
		"id"      => 17-35499-3
];

	$json = json_encode($data);
	echo $json;


?>