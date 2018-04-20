$("#payment-gateway").prop("disabled", true);
	$("select").change(function() {
    	if ($('#payment').val() === "Online") {
        	$("#payment-gateway").prop("disabled", false);
    	} else {
        if($('#payment').index() === 0 || $('#payment').val() === "Offline")
            $('#payment-gateway').prop("disabled", true);       
    }	
});