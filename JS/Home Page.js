/*Start Image Slide Bar */

var i = 0; 			// Start Point or counter
var images = [];	// Images Array
var time = 4000;	// Time Between Switch
var slider = document.getElementById("slider");
// Image List
images[0] = "url('Images/18.jpg')";
images[1] = "url('Images/19.jpg')";
images[2] = "url('Images/20.jpg')";
images[3] = "url('Images/21.jpg')";
images[4] = "url('Images/22.jpg')";
images[5] = "url('Images/23.jpg')";
images[6] = "url('Images/24.jpg')";
images[7] = "url('Images/25.png')";

// Change Image
function changeImg() {
  slider.style.backgroundImage = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Increment Index
    i++;
  }
  else {
    // Reset Counter
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;

/*End Image Slide Bar */


var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// DETERMINE IF A USER IS LOGGED IN
// function checkLoggedIn () {
  
// }

function logOut () {
  localStorage.setItem("loggedIn", "false");
  window.location.href = "Home.html";
}