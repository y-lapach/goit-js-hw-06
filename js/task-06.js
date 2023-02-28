const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', (event) => {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    textInput.classList.add('valid');
  } else {
    textInput.classList.add('invalid');
  }
});