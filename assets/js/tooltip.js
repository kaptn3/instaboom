const showTooltip = (btn, tooltip, closeClass, downContent) => {
  const toggleModal = () => {
    tooltip.classList.toggle('opened');

    if (downContent) {
      downContent();
    }
  }

  const clickOutside = (e) => {
    if (!tooltip.parentNode.contains(e.target) && tooltip.classList.contains('opened')) {
      tooltip.classList.remove('opened');
    }
  }

  if (tooltip && btn) {
    document.addEventListener('click', clickOutside);

    btn.addEventListener('click', toggleModal);

    if (closeClass) {
      tooltip.querySelector(`.${closeClass}`).addEventListener('click', toggleModal);
    }
  } else if (tooltip && !btn) {
    toggleModal();
  }
}