const like = document.querySelectorAll('.rates__item_like');
const span = document.createElement('span');
span.className = 'rates__reward-like';
span.innerHTML = '+5 монет';

//<span class="rates__reward-like">+5 монет</span>
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener('click', function() {
    like[i].appendChild(span);
    setTimeout(function(){
      like[i].removeChild(span);
    }, 1000);
  });
}