const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ulEl = document.querySelector("#ingredients");

const ingredient = ingredients.map((option) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = option;
  return liEl;
});
ulEl.append(...ingredient);
