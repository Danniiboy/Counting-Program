$('#button-1').on('click', function(){
	var input=$('#first').val();
	$('#name-2').append('<br>'+input);
	$('#name-2').addClass('box');
})

$('#button-1').on('click', function(){
	var userInput=$('#first').val();
		if (userInput==='') {
			alert('Please enter name!');
		}else{
			$('#first').html(userInput);
		}
})

$('#button-2').on('click', function(){
	var sum=$('#num').val();
	$('#number-2').addClass('box');
    	for ( i=0; i<=sum; i+=1){
    		$('#number-2').append(i+'<br>');
    	}
})

$('#button-2').on('click', function(){
	var user=$('#num').val();
		if (user==='') {
			alert('Please enter number!');
		} else {
			$('#num').html(user);
		}
})
