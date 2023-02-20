let nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (event) => {
  if ((nameOutput.textContent = event.currentTarget.value))
    console.log(event.currentTarget.value);
  else {
    nameInput.length === 0;
    console.log((nameOutput.textContent = "Anonymous"));
  }
});
