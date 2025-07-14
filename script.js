document.addEventListener("DOMContentLoaded", function () {
  // Dark mode toggle
  const toggleButton = document.getElementById("toggle-theme");
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  // Greet user
  const greetButton = document.getElementById("click-me");
  greetButton.addEventListener("click", function () {
    alert("Hello Guest! Welcome to my portfolio site.");
  });

  // Clock
  function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("live-clock").textContent = timeString;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // Carousel
  const screenshots = ["form.png", "report.png", "vba.png"];
  let currentIndex = 0;
  const imgElement = document.getElementById("carousel-image");

  function showNextImage() {
    currentIndex = (currentIndex + 1) % screenshots.length;
    imgElement.src = screenshots[currentIndex];
  }

  setInterval(showNextImage, 3000);
});
