document.querySelector('.share-block__copy-btn').addEventListener('click', function() {
  document.querySelector('.share-block__input').select();
  document.execCommand('copy');
});
