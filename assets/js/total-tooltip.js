const showPhoto = (btn, tooltip, mobileTooltip, closeClass) => {
  if (tooltip && btn) {
    btn.addEventListener('click', function () {
      if (document.documentElement.clientWidth > 768) {
        if (!tooltip.hasAttribute('style')) {
          tooltip.style.display = 'block';
        }

        if (closeClass) {
          tooltip.querySelector(`.${closeClass}`).addEventListener('click', function () {
            tooltip.removeAttribute('style');
          });
        }
      } else {
        mobileTooltip.style.display = 'block';

        mobileTooltip.querySelector('.mobile-tooltip__back').addEventListener('click', function () {
          mobileTooltip.removeAttribute('style');
        });
      }
    });

    document.addEventListener('click', function (e) {
      if (!tooltip.parentNode.contains(e.target) && tooltip.hasAttribute('style')) {
        tooltip.removeAttribute('style');
      }
    });
  }
}

const div = document.querySelectorAll('.account-content__item');

for (let i = 0; i < div.length; i++) {
  const tooltip = div[i].querySelector('.total-tooltip');
  const mobileTooltip = div[i].querySelector('.mobile-tooltip');

  showPhoto(div[i].children[0], tooltip, mobileTooltip, 'total-tooltip__close');
}