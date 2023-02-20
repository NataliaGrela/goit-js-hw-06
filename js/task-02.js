const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const newIngredients = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const firstItem = document.createElement("li");
  firstItem.classList.add("item");
  firstItem.textContent = ingredient;
  newIngredients.append(firstItem);
}
