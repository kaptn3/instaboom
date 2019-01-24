const mobileBar = document.querySelector('.header__mobile-menu');
const mobileSidebar = document.querySelector('.aside');
const app = document.querySelector('.app');

const overlay = document.createElement('button');
overlay.setAttribute('title', 'Закрыть меню');
overlay.className = 'overlay';

if (mobileBar && mobileSidebar) {
  mobileBar.addEventListener('click', function (e) {
    e.preventDefault;

    app.appendChild(overlay);
    mobileSidebar.style.left = '0';
  });

  document.addEventListener('click', function (e) {
    if (!mobileSidebar.contains(e.target) && !(mobileBar.contains(e.target)) && mobileSidebar.hasAttribute('style')) {
      mobileSidebar.removeAttribute('style');
      app.removeChild(overlay);
    }
  });
}

{
  const divGift = document.querySelector('.aside__gift');
  if (divGift) {
    if (document.body.clientWidth > 768) {
      divGift.style.top = Math.max(286, 286 + (0 - (646 - window.innerHeight))) + 'px';
    } else {
      divGift.style.top = Math.max(286, 286 + (0 - (523 - window.innerHeight))) + 'px';
    }
    window.onscroll = function () {
      let scrolled = window.pageYOffset || document.documentElement.scrollTop;
      let windowHeight = window.innerHeight;
      if (document.body.clientWidth > 768) {
        // 286 - высота блока с меню, 646 - высота меню + высота баннера, 360 - высота баннера
        divGift.style.top = Math.max(286, Math.min(286 + (scrolled - (646 - windowHeight)), (document.body.offsetHeight - 360))) + 'px';
      } else {
        divGift.style.top = Math.max(286, Math.min(286 + (scrolled - (523 - windowHeight)), (document.body.offsetHeight - 360))) + 'px';
      }
    }
  }
}