function errorDivCreate(input, dir) {
  if (dir === undefined) {
    dir = 'bottom';
  }
  let div = document.createElement('div');
  div.className = `tooltip__container tooltip-${dir} tooltip__input-error`;

  div.innerHTML = `<i class="tooltip__arrow"></i>Допустимы только цифры`;

  input.parentNode.appendChild(div);
}

function checkInput(input) {
  const errorDiv = input.parentNode.querySelector('.tooltip__container');

  if (input.checkValidity()) {
    if (input.classList.contains('input__error')) {
      input.classList.remove('input__error');
    }
    errorDiv.style.display = 'none';
  } else {
    input.classList.add('input__error');
    errorDiv.style.display = 'block';
  }
}

function initCheckInput(input, dir) {
  if (input) {
    errorDivCreate(input, dir);

    input.addEventListener('input', () => {
      checkInput(input);
    });
  }
}

initCheckInput(document.querySelector('.buy-coins__input'), 'left');
initCheckInput(document.querySelector('.add-subscribe-form__input'), 'bottom');
initCheckInput(document.querySelectorAll('.form-order__input')[4], 'bottom');