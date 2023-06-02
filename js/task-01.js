const ulEls = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulEls.length}`);
ulEls.forEach.call(ulEls, (element) => {
  const title = element.querySelector("h2");
  const itemsLength = element.querySelectorAll("li");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${itemsLength.length}`);
});
