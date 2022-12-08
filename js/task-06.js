const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.toggle("invalid");
    }
    return inputEl.classList.add("valid");
  } else {
    return inputEl.classList.add("invalid");
  }
});
