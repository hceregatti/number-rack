const checkbox = document.getElementById("repeat-number");
const toggle = document.querySelector(".toggle-input");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    toggle.classList.add("active");
  } else {
    toggle.classList.remove("active");
  }
});