const addBtn = document.getElementById("add-task");
const micBtn = document.getElementById("mic");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript;
  input.value = transcript;
};

micBtn.addEventListener("click", () => {
  recognition.start();
});

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">❌</button>
  `;

  // Toggle completed
  li.querySelector("span").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete task
  li.querySelector("button").addEventListener("click", () => {
    li.remove();
  });

  list.appendChild(li);
  input.value = "";
}
