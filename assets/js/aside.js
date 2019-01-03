const mobileBar = document.querySelector('.header__mobile-menu');
const mobileSidebar = document.querySelector('.aside');
const app = document.querySelector('.app');

const overlay = document.createElement('div');
overlay.className = 'overlay';

mobileBar.addEventListener('click', function(e) {
  e.preventDefault;

  app.appendChild(overlay);
  mobileSidebar.style.left = '0';
});

document.addEventListener('click', function(e) {
  if (!mobileSidebar.contains(e.target) && !(mobileBar.contains(e.target))) {
    mobileSidebar.removeAttribute('style');
    app.removeChild(overlay);
  }
});