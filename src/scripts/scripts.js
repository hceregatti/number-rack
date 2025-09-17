// checkbox
const checkbox = document.getElementById("no-repeat");
const toggle = document.querySelector(".input-toggle");

checkbox.addEventListener("change", () => {
  toggle.classList.toggle("active", checkbox.checked);
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

form.addEventListener("input", () => {
  qtd.value = qtd.value.replace(/\D/g, "");
  min.value = min.value.replace(/\D/g, "");
  max.value = max.value.replace(/\D/g, "");
});

form.onsubmit = (e) => {
  e.preventDefault();

  wrapperForm.classList.add("hidden");
  formResult.classList.remove("hidden");

  generateNumbers();
};

btnRepeat.addEventListener("click", (e) => {
  e.preventDefault();

  generateNumbers();
});

function randomNumber(qtd, min, max, allowRepeat) {
  let numbers = [];

  if (!allowRepeat) {
    if (qtd > max - min + 1) {
      console.error(
        "Quantidade de números solicitada é maior que o range de números"
      );
      
      alert("Quantidade de números solicitada é maior que o range de números");

      return [];
    }

    while (numbers.length < qtd) {
      const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      if (!numbers.includes(newNumber)) {
        numbers.push(newNumber);
      }
    }
  } else {
    for (let i = 0; i < qtd; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.push(randomNumber);
    }
  }
  return numbers;
};

function generateNumbers() {
  result.innerHTML = "";

  const allowRepeat = !checkbox.checked;

  const numbers = randomNumber(
    Number(qtd.value),
    Number(min.value),
    Number(max.value),
    allowRepeat
  );

  if(numbers.length === 0) {
    wrapperForm.classList.remove("hidden");
    formResult.classList.add("hidden");

    qtd.value = "";
    min.value = "";
    max.value = "";
    
    return;
  }

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
}
