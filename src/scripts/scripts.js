const checkbox = document.getElementById("repeat-number");
const input = document.querySelector(".input-toggle");

checkbox.addEventListener("change", () => {
  input.classList.toggle("active")
}); 

