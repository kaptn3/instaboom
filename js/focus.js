const div = document.querySelector('.select');
const input = document.querySelector('.select > input');

input.onfocus = function() {
  div.style.borderColor = 'var(--main)';
};

input.onblur = function() {
  div.removeAttribute('style');
}