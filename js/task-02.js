// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ulEl = document.querySelector("#ingredients");

const ingredient = ingredients.map((option) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = option;
  return liEl;
});
ulEl.append(...ingredient);
