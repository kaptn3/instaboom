{
  const container = document.querySelectorAll('.rate-content__tooltip');

  for (let i = 0; i < container.length; i++) {
    const btn = container[i].querySelector('.rate-content__bar');
    const tooltip = container[i].querySelector('.tooltip__container');
    
    showTooltip(btn, tooltip);
  }
}