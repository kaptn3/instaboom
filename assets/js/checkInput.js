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

function btnValue(input) {
  if (input.checkValidity() && input.value) {
    return false;
  } else {
    return true;
  }
}

function initCheckInput(input, dir, btn) {
  if (input) {
    errorDivCreate(input, dir);

    input.addEventListener('input', () => {
      checkInput(input);
      if (btn) {
        btn.disabled = btnValue(input); // активность кнопки
      }
    });
  }
}


initCheckInput(document.querySelector('.buy-coins__input'), 'left', document.querySelector('.buy-coins__btn')); // пополнить баланс
initCheckInput(document.querySelector('.add-subscribe-form__input'), 'bottom', document.querySelector('.add-subscribe-form__btn')); // добавить подписчиков
initCheckInput(document.querySelectorAll('.form-order__input')[4], 'bottom', document.querySelectorAll('.form-order__btn')[2]); // хочу ещё просмотров