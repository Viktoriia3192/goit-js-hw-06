const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const desiredLength = Number(validationInput.getAttribute('data-length'));
  const enteredLength = validationInput.value.length;

  if (enteredLength === desiredLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});
