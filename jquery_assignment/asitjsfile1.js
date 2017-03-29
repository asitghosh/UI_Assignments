var firstnameok = false;
var caddressok = false;
var paddressok = false;
var emailok = false;
var phoneok = false;
var passwordok = false;
var cpasswordok = false;


function enableregister() {
	if ((firstnameok == true) && (paddressok == true) && (emailok == true) && (phoneok == true) && (passwordok == true) && (cpasswordok == true)) {

		$('#register').attr({
			'disabled': false
		});
	} else {
		$('#register').attr({
			'disabled': true
		});
	}
}


function add() {
	var ul = $('#ul-dashboard');
	var firstName = $('#firstname').val();
	var lastName = $('#lastname').val();

	var emailR = $('#email').val();

	var a = $("<a></a>", {
		class: "section-ul-li-div-ul-li-ul-dashboard-li-a",
		href: "#"
	}).text(firstName + " " + lastName);

	var div = $("<div></div>", {
		class: "email-dashboard"
	}).text(emailR);

	var li = $("<li></li>", {
		class: "section-ul-li-div-ul-li-ul-dashboard-li"
	});

	li.append(a);
	li.append(div);

	ul.append(li);
}



function copyaddress() {
	if ($("#chqbx").prop("checked", true)) {
		$('#caddress').val($('#paddress').val());
	} else {
		alert("test1");
		$("#caddress").val("");
	}
}



function checkname() {
	if (($('#firstname').val().indexOf(' ') >= 0) || ($("#firstname").val() == "")) {
		alert("First Name cannot have space or blank");
		firstnameok = false;
		enableregister();
	} else {
		firstnameok = true;
		enableregister();
	}
	return true;
}



function checkpaddress() {
	if ($("#paddress").val() == "") {
		alert("Permanent Address cannot be empty");
		paddressok = false;
		enableregister();
	} else {
		paddressok = true;
		enableregister();
	}
	return true;
}



function checkcaddress() {
	if ($("#caddress").val() == "") {
		alert("Current Address cannot be empty");
		caddressok = false;
	} else {
		caddressok = true;
	}
	return true;
}

function checkmail() {
	var str = $("#email").val();
	var pattern = new RegExp("[a-z0-9._%]+@[a-z0-9]+\.[a-z]{2,3}");
	var response = pattern.test(str);
	if (response == false) {
		alert("Not a valid email id");
		emailok = false;
		enableregister();
	} else {
		emailok = true;
		enableregister();
	}
	return true;
}



function checkphone() {
	var str = $("#phn").val();
	var pattern = new RegExp("[0-9]");
	var response = pattern.test(str);
	if (response == false) {
		alert("Not a valid phone number");
		phoneok = false;
		enableregister();
	} else {
		phoneok = true;
		enableregister();
	}
	return true;
}


function checkpassword() {
	var str = $("#password").val();
	var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
	var response = re.test(str);
	if (response == false) {
		alert("Not a valid password");
		passwordok = false;
		enableregister();
	} else {
		passwordok = true;
		enableregister();
	}
	return true;
}

function checkcpassword() {
	var str1 = $("#password").val();
	var str2 = $("#cpassword").val();
	if (str1 != str2) {
		alert("password not matched");
		cpasswordok = false;
		enableregister();
	} else {
		cpasswordok = true;
		enableregister();
	}
	return true;
}

function resetallfield() {
	$("#firstname").val("");
	$("#lastname").val("");
	$("#paddress").val("");
	$("#caddress").val("");
	$("#phn").val("");
	$("#email").val("");
	$("#password").val("");
	$("#cpassword").val("");
	$("#chqbx").prop('checked', false);
}


$('#profile-dropdown').on('click', function() {
	$('#toprightddlid').toggleClass('hide');
});


$('#firstname').change(checkname);
$('#paddress').change(checkpaddress);
$('#caddress').change(checkcaddress);
$('#email').change(checkmail);
$('#phn').change(checkphone);
$('#password').change(checkpassword);
$('#cpassword').change(checkcpassword);
$('#reset').click(resetallfield);
$('#chqbx').click(copyaddress);
$('#register').click(add);
