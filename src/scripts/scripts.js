// checkbox
const checkbox = document.getElementById("repeat-number");

checkbox.addEventListener("change", () => {
  const toggle = document.querySelector(".input-toggle");

  toggle.classList.toggle("active");
});

// Sortear

const form = document.getElementById("form");
const wrapperForm = document.querySelector(".form-wrapper");
const qtd = document.getElementById("quantity");
const min = document.getElementById("min");
const max = document.getElementById("max");
const formResult = document.querySelector(".result");
const result = document.querySelector(".result-wrapper");
const btnRepeat = document.querySelector(".btn-repeat");

form.onsubmit = (e) => {
  e.preventDefault();

  wrapperForm.classList.add("hidden");
  formResult.classList.remove("hidden");

  const numbers = randomNumber(
    Number(qtd.value),
    Number(min.value),
    Number(max.value)
  );

  numbers.forEach((num, index) => {
    const delay = 4000;

    setTimeout(() => {
      const div = document.createElement("div");
      const span = document.createElement("span");
      const p = document.createElement("p");
      const divBG = document.createElement("div");
      const spanBG = document.createElement("span");

      p.classList.add("number-result");
      divBG.classList.add("wrapper-bg");
      spanBG.classList.add("bg-result");

      p.textContent = num;

      p.classList.add("animation-number");
      spanBG.classList.add("animation-bg");

      div.appendChild(span);
      span.appendChild(p);
      span.appendChild(divBG);
      divBG.appendChild(spanBG);

      result.appendChild(div);
    }, index * delay);
  });
};

btnRepeat.addEventListener("click", (e) => {
  result.innerHTML = "";

  const numbers = randomNumber(
    Number(qtd.value),
    Number(min.value),
    Number(max.value)
  );

  numbers.forEach((num, index) => {
    const delay = 4000;

    setTimeout(() => {
      const div = document.createElement("div");
      const span = document.createElement("span");
      const p = document.createElement("p");
      const divBG = document.createElement("div");
      const spanBG = document.createElement("span");

      p.classList.add("number-result");
      divBG.classList.add("wrapper-bg");
      spanBG.classList.add("bg-result");

      p.textContent = num;

      p.classList.add("animation-number");
      spanBG.classList.add("animation-bg");

      div.appendChild(span);
      span.appendChild(p);
      span.appendChild(divBG);
      divBG.appendChild(spanBG);

      result.appendChild(div);
    }, index * delay);
  });
});

function randomNumber(qtd, min, max) {
  let numbers = [];

  for (let i = 0; i < qtd; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.push(randomNumber);
  }

  return numbers;
}
