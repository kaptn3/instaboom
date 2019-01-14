const checkInput = (input, btn, dir) => {
  if (dir === undefined) {
    dir = 'bottom';
  }
  if (input, btn) {
    let errorTooltip;
    const errorRemove = () => {
      if (input.hasAttribute('style')) {
        input.removeAttribute('style');
      }
      errorTooltip.style.display = 'none';
    }

    const errorDivCreate = () => {
      let div = document.createElement('div');
      div.className = `tooltip__container tooltip-${dir}`;

      div.innerHTML = `<i class="tooltip__arrow"></i>Допустимы только цифры`;

      input.parentNode.appendChild(div);
    }

    if (btn && input) {
      errorDivCreate();
      errorTooltip = input.parentNode.querySelector('.tooltip__container');
      ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        input.addEventListener(event, function () {
          if (this.checkValidity() && this.value) {
            btn.disabled = false;
            errorRemove();
          } else if (!this.checkValidity()) {
            btn.disabled = true;
            input.style.borderColor = 'var(--red)';
            showTooltip('', errorTooltip);
          } else {
            btn.disabled = true;
            errorRemove();
          }
        });
      });
    }
  }
}