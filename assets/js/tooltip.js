const showTooltip = (btn, tooltip, closeClass) => {

  btn.addEventListener('click', function (e) {
    if (!tooltip.hasAttribute('style')) {
      tooltip.style.display = 'block';
    }

    if (closeClass) {
      tooltip.querySelector(`.${closeClass}`).addEventListener('click', function () {
        tooltip.removeAttribute('style');
      });
    }
  });
}