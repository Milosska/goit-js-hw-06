const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function createIngridientListEl(name) {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = name;
  return liEl;
}

const ingridientsList = [];
ingredients.forEach((elem) =>
  ingridientsList.push(createIngridientListEl(elem))
);

const ulEl = document.querySelector("#ingredients");
ulEl.append(...ingridientsList);
