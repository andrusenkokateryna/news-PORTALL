

$(document).ready(function () {

	$(document).on("click","#add-comment", function () {
		var form = $("form[name='form']");
		form.css("display","block");
		$("#add-comment").replaceWith(form);

	});
	
		

	


	$(document).on("click", "input[name='send']", function(){
		var comment= $("textarea[name='field']").val ();
		alert('Подождите, идет загрузка комментариев...')
		$("<p>" + comment + "<hr>" + "</p>").appendTo("#comments");
		

		
	})

  
		
document.getElementById('comments').style.display='inline-block';
document.getElementById('comments').style.background='#fff';
document.getElementById('comments').style.boxSizing='borderBox';



});


