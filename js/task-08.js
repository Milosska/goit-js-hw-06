const loginFormEl = document.querySelector(".login-form");

console.dir(loginFormEl);
console.dir();

loginFormEl.addEventListener("submit", validateSubmit);

function validateSubmit(event) {
  event.preventDefault();
  if (
    !event.currentTarget.elements.email.value ||
    !event.currentTarget.elements.password.value
  ) {
    return alert("All imputs should be filled!");
  }
  // Перевірка пошти
  else if (
    !event.currentTarget.elements.email.value.includes("@") ||
    !event.currentTarget.elements.email.value.includes(".")
  ) {
    return alert("Invalide email!");
  } else {
    const formData = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };

    // Або:
    // const formData = new FormData(event.currentTarget);

    console.dir(formData);
    event.currentTarget.reset();
  }
}
