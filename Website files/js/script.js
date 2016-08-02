var username;
var password;

function login() {
	username=document.getElementById("usernameInput").value;
	password=document.getElementById("passwordInput").value;

	if(username == "010701" || password == "1832"){
		alert("Correct");
	} else {
		alert("Incorrect");
	}
}