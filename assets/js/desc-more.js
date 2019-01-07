const more = document.querySelector('.account-info__desc-more');

if (more) {
  more.addEventListener('click', function () {
    document.querySelector('.account-info__desc').style.height = 'auto';
    more.style.display = 'none';
  });
}