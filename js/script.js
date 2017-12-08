$(document).ready(function(){

	$('#sub_btn').on('click', function(e) {
		e.preventDefault();
		if($('#name').val()=='' || $('#reg_no').val()=='' || $('#email').val()=='')
		{
			// alert("Fill in the above details!");
			document.getElementById('modallink').click();
			return false;
		}
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
	$('#others-subdomain').click(function(){
		$('#others-specification').fadeToggle("fast");
	});
	$('.change_category').on('click', function(e){
		$('.second-section , .design_section, .management_section').fadeOut("fast",function(){
			$('.first-section').fadeIn("fast");
			$('.second-section , .design_section, .management_section').find("input[type=text], textarea").val("");
		});
	});
	$('.cross_icon').on('click', function(){
		$('.second-section , .design_section, .management_section').fadeOut("fast",function(){
			$('.first-section').fadeIn("fast");
			$('.second-section , .design_section, .management_section').find("input[type=text], textarea").val("");

		});
	});

});

$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });


// second-section =664px
//form-body = 660px
//tech-form = 502px