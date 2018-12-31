let input = document.querySelector('.buy-coins__input');
let btn = document.querySelector('.buy-coins__btn');

function checkNumber(value) {
  return /^-?\d*$/.test(value);
};

if (btn && input) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    input.addEventListener(event, function() {
      if (checkNumber(this.value) && this.value) {
        btn.disabled = false;
      } else {
        btn.disabled = true;
      }
    });
  });
}
