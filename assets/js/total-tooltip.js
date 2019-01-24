const showPhoto = (btn, tooltip, mobileTooltip, closeClass) => {
  const toggleModal = () => {
    if (document.documentElement.clientWidth > 768) {
      tooltip.classList.toggle('opened');
    } else {
      mobileTooltip.classList.toggle('opened');
    }
  }

  const clickOutside = (e) => {
    if (!tooltip.parentNode.contains(e.target) && tooltip.classList.contains('opened')) {
      tooltip.classList.remove('opened');
    }
  }

  if (tooltip && btn) {
    btn.addEventListener('click', toggleModal);

    if (closeClass) {
      tooltip.querySelector(`.${closeClass}`).addEventListener('click', toggleModal);
    }

    mobileTooltip.querySelector('.mobile-tooltip__back').addEventListener('click', toggleModal);

    document.addEventListener('click', clickOutside);
  }
}

const div = document.querySelectorAll('.account-content__item');

for (let i = 0; i < div.length; i++) {
  const tooltip = div[i].querySelector('.total-tooltip');
  const mobileTooltip = div[i].querySelector('.mobile-tooltip');

  showPhoto(div[i].children[0], tooltip, mobileTooltip, 'total-tooltip__close');
}