const inputEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

inputEl.addEventListener("input", () => {
  spanTextEl.style.fontSize = `${inputEl.value}px`;
});
