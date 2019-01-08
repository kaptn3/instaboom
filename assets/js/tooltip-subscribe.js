{
  const btn = document.querySelector('.account-score__btn');
  const tooltip = document.querySelector('.account-score__tooltip');

  showTooltip(btn, tooltip, 'total-tooltip__close');
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