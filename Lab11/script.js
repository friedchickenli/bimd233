var username = prompt("Please enter your name:");
var password = prompt("Please enter your passoword:");

var el = document.getElementById("user");
el.textContent = "Username: " + username;

el = document.getElementById("pass");
el.textContent = "Password: " + password;

console.log("Username: " + username);
console.log("Password: " + password);

function myFunction() {
  var username = prompt("Please enter your name:");
  var password = prompt("Please enter your passoword:");

  var el = document.getElementById("user");
  el.textContent = "Username: " + username;

  el = document.getElementById("pass");
  el.textContent = "Password: " + password;

  console.log("Username: " + username);
  console.log("Password: " + password);
}
