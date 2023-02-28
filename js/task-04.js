let counterValue = 0;

const decrementCount = document.querySelector('button[data-action="decrement"]');
const incrementCount = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

decrementCount.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrementCount.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});