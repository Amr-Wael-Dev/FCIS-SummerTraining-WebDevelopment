function darkMode () {
  localStorage.setItem("mode", "dark");
  window.location.href = "Home.html";
}

function lightMode () {
  localStorage.setItem("mode", "light");
  window.location.href = "Home.html";
}