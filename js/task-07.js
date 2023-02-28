const rangeInput = document.querySelector('#font-size-control');
const newTextSize = document.querySelector('#text');

rangeInput.addEventListener('input', (event) => {
  newTextSize.style.fontSize = event.target.value + 'px';
});