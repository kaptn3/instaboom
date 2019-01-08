const showTooltip = (btn, tooltip, closeClass) => {
  if (tooltip && btn) {
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

    document.addEventListener('click', function (e) {
      if (!tooltip.parentNode.contains(e.target) && tooltip.hasAttribute('style')) {
        tooltip.removeAttribute('style');
      }
    });
  } else if (tooltip && !btn) {
    tooltip.style.display = 'block';
  }
}