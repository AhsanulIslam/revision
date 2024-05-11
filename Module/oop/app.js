// let person ={
// 	name: 'Ahsanul',
// 	id  : 'cs'
// 	age : 26
// }



//json format
// let person = {
// 	'name': 'Imon',
// 	'dept': 'cs',
// 	'email': 'imn@gmail.com'
// }


//json array
// let json =[
// 				{
// 					'name': 'Imon',
// 					'dept': 'cs',
// 					'email': 'imn@gmail.com'
// 				}

// 				{
// 					  'name': 'Imon',
// 					  'dept': 'cs',
// 				      'email': 'imn@gmail.com'
// 				}

// 	       ]

function ajax(){
	let person ={
				'name': 'Imon',
				'dept': 'cs',
				'email': 'imn@gmail.com'
				'id' : 124
				}
}



let json = JSON.stringify(person);  //making string


let xhttp = new XMLHttpRequest();{    // creates an XMLHttpRequest object
	xhttp.open('GET', 'abc.php?data='+json, true);
	xhttp.send();
	xhttp.onreadystatechange = function(){  //The onreadystatechange property specifies a function to be executed every time the status of the XMLHttpRequest object changes:

		if(this.readyState == 4 && this.status == 200){  //When readyState property is 4 and the status property is 200, the response is ready:

			alert(this.responseText);
		}
	}
}

























