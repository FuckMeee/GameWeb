$(document).ready(function() {
	$('.label1').bind("click", function(){
   		var radioId = $(this).attr('name');
    	$('.label1').removeClass('check') && $(this).addClass('check');
    	$(".yxdk").removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');

 	});

 	$('.label2').bind("click", function(){
   		var radioId = $(this).attr('name');
    	$('.label2').removeClass('check') && $(this).addClass('check');
    	$(".czk").removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
 	});

 	$('.label3').bind("click", function(){
   		var radioId = $(this).attr('name');
    	$('.label3').removeClass('check') && $(this).addClass('check');
    	$(".wyzf").removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
 	});

 	$('.label4').bind("click", function(){
   		var radioId = $(this).attr('name');
    	$('.label4').removeClass('check') && $(this).addClass('check');
    	$(".type").removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
 	});

 	$('.span1').bind("click", function(){
 		var checkboxId = $(this).attr('name');
    	$('.span1').toggleClass('check');
    	if($(".span1").hasClass('check')){
    		$('#' + checkboxId).attr('checked', 'checked');
		}else {
			$('#' + checkboxId).removeAttr('checked')
		}
 	});
});