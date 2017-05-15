





$("#submitquest").on("click", function() {
	var inputName = $("#inputName").val().trim();
	var inputLink = $("#inputLink").val().trim();
    console.log(inputName + " " + inputLink);


	for ( i=0 ; i<10 ; i++) {
		var place = "inlineRadioOptions" + (i+1);
//		var value = $("input:radio[name="place"]:checked", $(this)).val();
   		console.log(value);
	}

});

		var place = "inlineRadioOptions" + 1;
	var value = $(":radio[name="place"]:checked").val();
   		console.log(value);





//$("#submitquest").on("click", function () {
//	$("#thefriend").modal('show');
//});
