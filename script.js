var query = window.location.search.substring(1);
let usr = localStorage.getItem("username");
let ema = localStorage.getItem("email");
let pas = localStorage.getItem("password");
console.log(usr);
console.log(ema);
console.log(pas);

document.getElementById("acc").innerHTML = "Guest User";
//Login function(barebones, admin has no use aside from accessing a differing page.)
function login(){
	const user1 = ["Admin", "Password"]
	var username = document.getElementById("Username").value
	var Password = document.getElementById("Password").value

	if(username == user1[0] && Password == user1[1]){
		window.location.href = "home.html?id=455645";
		var sel = 1;
	}
	if(username == usr && Password == pas) {
		window.location.href = "home.html?id=420";
		var sel = 1;
	}
	else{
		window.alert("Error: Login Credentials not found.");
	}
}
function ret(){
	window.location.href = "home.html"
}
function register(){

	var username = document.getElementById('Username').value;
	var email = document.getElementById('Email').value;
	var password = document.getElementById('Password').value;
	var ppassword = document.getElementById('PPassword').value;
	if (password == ppassword) {
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
		localStorage.setItem("email", email);
		window.alert('your account has been successfully registered!');
	}
	else{
		window.alert('your passwords are mismatched. Try again.');
	}

}
//this part here on will be reserved for account permissions, most specifically for the admin class.
if(query == "id=455645"){
	document.getElementById("acc").innerHTML = "Admin User";
	}
else if(query == "id=420"){
	document.getElementById("acc").innerHTML = ema;
	}