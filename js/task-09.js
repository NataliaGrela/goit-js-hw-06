function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // .padStart(6, 0)}`;
}

const colorBody = document.querySelector("body");
const colorName = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");

buttonChangeColor.addEventListener("click", (event) => {
  const newColor = getRandomHexColor();
  colorBody.style.backgroundColor = newColor;
  colorName.textContent = newColor;
});
