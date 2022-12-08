// Рішення 1
const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

counterValue.textContent = 0;

decrementBtn.addEventListener("click", () => (counterValue.textContent -= 1));

incrementBtn.addEventListener("click", () => {
  let value = Number(counterValue.textContent);
  value += 1;
  return (counterValue.textContent = value);
});

// Рішення 2

// const counterValue = document.querySelector("#value");
// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const incrementBtn = document.querySelector('button[data-action="increment"]');
// const counter = {
//   value: 0,
//   decrement() {
//     return (this.value -= 1);
//   },
//   increment() {
//     return (this.value += 1);
//   },
// };

// decrementBtn.addEventListener("click", function () {
//   counter.decrement();
//   counterValue.textContent = counter.value;
// });
// incrementBtn.addEventListener("click", function () {
//   counter.increment();
//   counterValue.textContent = counter.value;
// });
