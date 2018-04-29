$(document).ready(function () {
	$(document).on("click","#add-comment", function () {
		var form = $("form[name='form']");
		form.css("display","block");
		$("#add-comment").replaceWith(form);
	});

	$(document).on("click", "input[name='send']", function(){
		var comment= $("textarea[name='field']").val ();
		alert('Подождите, идет загрузка комментариев...')
		$("<p>" + comment + "</p>").appendTo("#comments");
	})

});


