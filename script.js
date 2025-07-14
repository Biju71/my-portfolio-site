function greetUser() {
  alert("Hello Biju! Welcome to my portfolio site.");
}
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-theme");

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("live-clock").textContent = timeString;
}

// Start the clock
setInterval(updateClock, 1000);
updateClock(); // call it once immediately
