$(document).ready(function(){

	$('#sub_btn').on('click', function(e) {
		e.preventDefault();
		// $('.first-section').addClass('hidee');
		// $('.second-section').removeClass('hidee');
		$('.first-section').fadeOut("fast",function(){
			$('.second-section').fadeIn("fast");
		});
		

	});
	$('#change_category').on('click', function(e){
		$('.second-section').fadeOut("fast",function(){
			$('.first-section').fadeIn("fast");
		});
	});
	$('#cross_icon').on('click', function(){
		$('.second-section').fadeOut("fast",function(){
			$('.first-section').fadeIn("fast");
		});
	});

});


// second-section =664px
//form-body = 660px
//tech-form = 502px