let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  const startValue = document.querySelector("#value");
  startValue.innerHTML = counterValue;
  console.log(counterValue);
});

const btnIncrement = document.querySelector('button[data-action="increment"]');
btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  const startValue = document.querySelector("#value");
  startValue.innerHTML = counterValue;
  console.log(counterValue);
});
