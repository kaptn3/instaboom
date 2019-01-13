var textarea = document.querySelector('textarea');
const btnSend = document.querySelector('.rate-content__comment-send');


function autosize() {
  const el = this;
  if (el.value) {
    btnSend.style.visibility = 'visible';
    textarea.style.borderRadius = '8px 0 0 8px';
  } else {
    btnSend.style.visibility = 'hidden';
    textarea.style.borderRadius = '8px';
  }

  if (el.scrollHeight > 93) {
    el.style.overflow = 'auto';
  } else {
    el.style.overflow = 'hidden';
  }
  el.style.height = 'auto';
  el.style.height = `${el.scrollHeight + 2}px`;
}

textarea.addEventListener('keyup', autosize);