const btns = document.querySelectorAll('.sex-button');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    btns[Math.abs(i - 1)].classList.remove('sex-button_selected');
    this.classList.add('sex-button_selected');
  });
}