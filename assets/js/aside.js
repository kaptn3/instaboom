const mobileBar = document.querySelector('.header__mobile-menu');
const mobileSidebar = document.querySelector('.aside');
const app = document.querySelector('.app');

const overlay = document.createElement('div');
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
  divGift.style.top = Math.max(286, 286 + (0 - (646 - window.innerHeight))) + 'px';

  window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    if (scrolled > (646 - windowHeight)) {
      divGift.style.top = Math.max(286, 286 + (scrolled - (646 - window.innerHeight))) + 'px';
    }
  }
}