var firstnameok = false;
var caddressok = false;
var paddressok = false;
var emailok = false;
var phoneok = false;
var passwordok = false;
var cpasswordok = false;



document.getElementById('header-ul-li-profilename').onmouseleave = function() {
	document.getElementById('toprightddlid').classList.add("hide");
}
document.getElementById('profile-dropdown').onclick = function(e) {
	document.getElementById('toprightddlid').classList.toggle("hide");
}


function enableregister() {
	if ((firstnameok == true) && (paddressok == true) && (emailok == true) && (phoneok == true) && (passwordok == true) && (cpasswordok == true)) {
		var register = document.getElementById("register");
		register.removeAttribute("disabled");
	} else {
		document.getElementById("register").disabled = true;
	}
}

document.getElementById('register').onclick = function() {
	add();
}

function add() {
	var ul = document.getElementById('ul-dashboard');
	var fstName = document.getElementById('firstname').value;
	var lastName = document.getElementById('lastname').value;

	var emailR = document.getElementById('email').value;

	var a = document.createElement('a');
	a.setAttribute('href', '#');
	a.setAttribute('class', 'section-ul-li-div-ul-li-ul-dashboard-li-a');

	var div = document.createElement('div');
	div.setAttribute('class', 'email-dashboard');

	var nameNode = document.createTextNode(fstName + " " + lastName);
	var email = document.createTextNode(emailR);

	var li = document.createElement("li");
	li.setAttribute("class", "section-ul-li-div-ul-li-ul-dashboard-li");

	a.appendChild(nameNode);
	div.appendChild(email);

	li.appendChild(a);
	li.appendChild(div);

	ul.appendChild(li);
}


document.getElementById('chqbx').onclick = function() {
	copyaddress();
}

function copyaddress() {
	var temp;
	if (document.getElementById("chqbx").checked == true) {
		document.getElementById("caddress").value = document.getElementById("paddress").value;
	} else {
		document.getElementById("caddress").value = "";
	}
}



document.getElementById('firstname').onchange = function() {
	checkname();
}



function checkname() {
	if ((document.getElementById('firstname').value.indexOf(' ') >= 0) || (document.getElementById("firstname").value == "")) {
		alert("First Name cannot have space or blank");
		firstnameok = false;
		enableregister();
	} else {
		firstnameok = true;
		enableregister();
	}
	return true;
}


document.getElementById('paddress').onchange = function() {
	checkpaddress();
}


function checkpaddress() {
	if (document.getElementById("paddress").value == "") {
		alert("Permanent Address cannot be empty");
		paddressok = false;
		enableregister();
	} else {
		paddressok = true;
		enableregister();
	}
	return true;
}


document.getElementById('caddress').onchange = function() {
	checkcaddress();
}


function checkcaddress() {
	if (document.getElementById("caddress").value == "") {
		alert("Current Address cannot be empty");
		caddressok = false;
	} else {
		caddressok = true;
	}
	return true;
}

document.getElementById('email').onchange = function() {
	checkmail();
}

function checkmail() {
	var str = document.getElementById("email").value
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

document.getElementById('phn').onchange = function() {
	checkphone();
}


function checkphone() {
	var str = document.getElementById("phn").value
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

document.getElementById('password').onchange = function() {
	checkpassword();
}

function checkpassword() {
	var str = document.getElementById("password").value
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

document.getElementById('cpassword').onchange = function() {
	checkcpassword();
}

function checkcpassword() {
	var str1 = document.getElementById("password").value
	var str2 = document.getElementById("cpassword").value
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

document.getElementById('reset').onclick = function() {
	resetallfield();
}

function resetallfield() {
	document.getElementById("firstname").value = "";
	document.getElementById("lastname").value = "";
	document.getElementById("paddress").value = "";
	document.getElementById("caddress").value = "";
	document.getElementById("phn").value = "";
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";
	document.getElementById("cpassword").value = "";
	document.getElementById("chqbx").checked = false;
}


document.getElementById('toprightddlid').onclick = function() {
	ddl();
}

function ddl() {
	document.getElementById("toprightddlid").setAttribute("style", "display:flex");
}
