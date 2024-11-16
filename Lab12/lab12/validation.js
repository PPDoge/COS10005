function validate() {
	var message = document.getElementById("message").value;
	var sid = document.getElementById("Sid").value;


	var errMsg = "";
	var result = true;
	
	
	if (message == ""){
		errMsg += "Message cannot be empty.\n";
	}

	if (sid == ""){
		errMsg += "Student ID cannot be empty.\n";
	}
	else if (sid.indexOf('s') == -1) {
		errMsg += "Student ID must start with the letter 's'. \n"
	}
	if (errMsg != "") {
		alert(errMsg);
		result = false;
	}
	return result;
}

/* link HTML elements to corresponding event function */
function init () {
	/* link the variables to the HTML elements */
	var msgForm = 	document.getElementById("msgform");

	/* assigns functions to corresponding events */
	msgForm.onsubmit = validate;
}

/* execute the initialisation function once the window*/
window.onload = init;
