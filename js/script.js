$(document).ready(function(){

	$('#sub_btn').on('click', function(e) {
		e.preventDefault();
		// $('.first-section').addClass('hidee');
		// $('.second-section').removeClass('hidee');
		if ($('#tech_radio').is(':checked')) {
			$('.first-section').fadeOut("fast",function(){
				$('.second-section').fadeIn("fast");
			});
		}
		else if ($('#management_radio').is(':checked')) {
			$('.first-section').fadeOut("fast",function(){
				$('.management_section').fadeIn("fast");
			});
		}
		else if($('#design_radio').is(':checked')) {
			$('.first-section').fadeOut("fast",function(){
				$('.design_section').fadeIn("fast");
			});
			console.log("desig section is clicked");
		}
		
		

	});
	$('.change_category').on('click', function(e){
		$('.second-section , .design_section, .management_section').fadeOut("fast",function(){
			$('.first-section').fadeIn("fast");
		});
	});
	$('.cross_icon').on('click', function(){
		$('.second-section , .design_section, .management_section').fadeOut("fast",function(){
			$('.first-section').fadeIn("fast");
		});
	});

});


// second-section =664px
//form-body = 660px
//tech-form = 502px