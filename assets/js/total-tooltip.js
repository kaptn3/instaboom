const div = document.querySelectorAll('.account-content__item');

for (let i = 0; i < div.length; i++) {
  div[i].children[0].addEventListener('click', function () {
    const tooltip = div[i].querySelector('.total-tooltip');

    if (tooltip) {
      tooltip.querySelector('.total-tooltip__close').addEventListener('click', function () {
        tooltip.removeAttribute('style');
      });

      if (!tooltip.hasAttribute('style')) {
        for (let k = 0; k < div.length; k++) {
          if (div[k].querySelector('.total-tooltip')) {
            div[k].querySelector('.total-tooltip').removeAttribute('style');
          }
        }

        tooltip.style.display = 'block';
      }
    }
  });
}