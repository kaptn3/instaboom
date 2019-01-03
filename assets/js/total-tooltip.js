const div = document.querySelectorAll('.account-content__item');

for (let i = 0; i < div.length; i++) {
  const tooltip = div[i].querySelector('.total-tooltip');

  showTooltip(div[i].children[0], tooltip, 'total-tooltip__close');
}