function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector(".change-color");
const colorNameEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

changeColorBtnEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = `${bodyEl.style.backgroundColor}`;
});
