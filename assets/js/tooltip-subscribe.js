{
  const btn = document.querySelector('.account-score__btn');
  const tooltip = document.querySelector('.account-score__tooltip');


  const downContent = () => {
    if (document.body.clientWidth < 768) {
      if (tooltip.classList.contains('opened')) {
        document.querySelector('.account-score').style.marginBottom = '427px';
      } else {
        document.querySelector('.account-score').style.marginBottom = '0';
      }
    }
  }

  showTooltip(btn, tooltip, 'total-tooltip__close', downContent);
}

{
  const tooltip = document.querySelector('.add-subscribe-form__tooltip');

  const btn = document.querySelector('.add-subscribe-form__preview-btn');
  const tooltipContainer = tooltip.querySelector('.tooltip__container');

  showTooltip(btn, tooltipContainer, 'tooltip__close');
}

{
  const input = document.querySelector('.add-subscribe-form__input');
  const btn = document.querySelector('.add-subscribe-form__btn');

  checkInput(input, btn);
}