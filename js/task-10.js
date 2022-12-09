function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let divCollection = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divCollection.push(divEl);
  }

  divBoxesEl.append(...divCollection);
}

const divBoxesEl = document.querySelector("#boxes");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");

createBtnEl.addEventListener("click", () => {
  createBoxes(inputEl.value);
});

destroyBtnEl.addEventListener("click", () => {
  divBoxesEl.innerHTML = "";
});
