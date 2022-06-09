// SIGNUP
function checkSignupInfo () {
  var name = document.querySelector("input[type='text']").value;
  var email = document.querySelector("input[type='email']").value;
  var password = document.querySelector("input[type='password']").value;

  if (name === "" || email === "" || password === "") {
    alert("Please fill in all the fields.");
  }
  else if (email.indexOf("@") === -1 || email.indexOf(".") === -1 || email.indexOf(" ") !== -1) {
    alert("Please enter a valid E-mail address (E-mail addresses must contain '@' and '.', and must not contain spaces");
  }
  else if ((password.trim()).length < 8) {
    alert("Password must contain at least 8 characters.");
  }
  else {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    window.location.href = "Login.html";
  }
}

// LOGIN
var userEmail;
var userPassword;

var adminEmail = "admin@cis";
var adminPassword = "admin123";

function getSignupInfo () {
  userEmail = localStorage.getItem("userEmail");
  userPassword = localStorage.getItem("userPassword");
}

function checkLoginInfo () {
  if (document.querySelector("input[type='email']").value === userEmail && document.querySelector("input[type='password']").value === userPassword) {
    window.location.href = "Home.html";
    localStorage.setItem("loggedIn", "true");
  }
  else if (document.querySelector("input[type='email']").value === adminEmail && document.querySelector("input[type='password']").value === adminPassword) {
    window.location.href = "Admin.html";
  }
  else {
    alert("Incorrect E-mail or password");
  }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// var queryString = window.location.search;
// var parameters = new URLSearchParams(queryString);
// var query = parameters.get("query");

// if (query === "dark") {
//   document.querySelector("body").style.cssText = "height: 100vh; overflow: hidden; font-family: system-ui; background: linear-gradient(120deg, black, rgb(255, 80, 37)); text-align: center;";

//   document.querySelector(".main-content").style.visibility = "visible";
//   document.querySelector("#removed").style.visibility = "hidden";
// }
// else if (query === "light") {
//   document.querySelector("body").style.cssText = "height: 100vh; overflow: hidden; font-family: system-ui; background: linear-gradient(120deg, white, rgb(255, 80, 37)); text-align: center;";

//   document.querySelector(".main-content").style.visibility = "visible";
//   document.querySelector("#removed").style.visibility = "hidden";
// }
// else if (query === "remove") {
//   document.querySelector(".main-content").style.visibility = "hidden";
//   document.querySelector("#removed").style.visibility = "visible";
// }
// else if (query === "restore") {
//   document.querySelector(".main-content").style.visibility = "visible";
//   document.querySelector("#removed").style.visibility = "hidden";
// }
// else {
//   document.querySelector(".main-content").style.visibility = "visible";
//   document.querySelector("#removed").style.visibility = "hidden";
// }
