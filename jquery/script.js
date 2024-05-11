function sum(){

}




$(document).ready(function(){      //callback function
	// alert('ready.....');

	// $('input').click(function()
	// 	{
	// 		// alert('clicked');
	// 		// $('h1').html("test..");
	// 		$('#hid').html("test...");
	// 		$('body>h1').html('test!!!'); //body tag a 1st h1 chnage hobe
	// 	});

// 2nd syntax
	// $('input').on('click', function(){
	// 	$('body>h1').html('perameter a event and function');
	// });



	// $('input[type=button]').click(function(){
	// 	let name = $('input[type=text]').val();
	// 	$('body>h1').html(name);
	// })

	$('input[type=button]').click(function(){


		let abc ={
			name: $('input[type=text]').val()
			
		}

		$.ajax({
			url: 'abc.php',
			type: 'GET',
			// data: {name: 'Ahsanul', id:12},
			data :abc,
			success:function(response){    //server response korle perameter a value pabo
					alert(response);
			},
			error: function(error){

			}
		});
	})


});         