const validationInput = document.querySelector("input");
// console.log(validationInput.attributes)
// console.log(validationInput.getAttribute("data-length"))
// console.log(typeof validationInput.getAttribute("data-length"))
// console.log(Number.parseFloat(validationInput.getAttribute("data-length")))
const dataLength = Number(validationInput.getAttribute("data-length"));
validationInput.addEventListener("blur", () => {
  if (validationInput.value.length === dataLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
