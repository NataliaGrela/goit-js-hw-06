const fontSizeControl = document.querySelector("#font-size-control");
const textAbracadabra = document.querySelector("#text");
console.log(textAbracadabra.textContent);
fontSizeControl.addEventListener("input", (event) => {
  textAbracadabra.style.fontSize = `${event.currentTarget.value}px`;
  console.log(event.currentTarget.value);
});
