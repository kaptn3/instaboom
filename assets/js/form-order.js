let form = document.querySelectorAll('.form-order');

function checkNumber(value) {
  return /^-?\d*$/.test(value);
};

if (form) {
  for (let i = 0; i < form.length; i++) {
    let input = form[i].querySelectorAll('.form-order__input');
    let btn = form[i].querySelector('.form-order__btn');
    for (let k = 0; k < input.length; k++) {
      ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        input[k].addEventListener(event, function () {
          if (checkNumber(this.value) && this.value) {
            btn.disabled = false;
          } else if (!checkNumber(this.value)) {
            btn.disabled = true;
            input[k].style.borderColor = 'var(--red)';
          } else {
            btn.disabled = true;
            input[k].removeAttribute('style');
          }
        });

      });
    }
  }
}