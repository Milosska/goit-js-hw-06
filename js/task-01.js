const categories = document.querySelector("#categories");
console.log("Number of categories:", categories.children.length);

const subcategories = document.querySelectorAll(".item");
subcategories.forEach((elem) => {
  console.log("Category:", elem.firstElementChild.textContent);
  console.log("Elements:", elem.lastElementChild.children.length);
});
