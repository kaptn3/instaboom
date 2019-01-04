const heading = document.querySelector('.account-info__username');
const arrow = heading.querySelector('.account-info__arrow');
const className = 'account-info__arrow_clicked';
const tooltip = heading.querySelector('.tooltip__container');
const tooltipArrow = tooltip.querySelector('.tooltip__arrow');

heading.addEventListener('click', function () {
  if (arrow.classList.contains(className)) {
    arrow.classList.remove(className);
    tooltip.removeAttribute('style');
  } else {
    arrow.classList.add(className);
    tooltip.style.display = 'block';
    if (document.body.clientWidth < 768) {
      tooltipArrow.style.left = `${heading.clientWidth + 76}px`;
    } else {
      tooltipArrow.style.left = `${heading.clientWidth - 7}px`;
    }
  }
});