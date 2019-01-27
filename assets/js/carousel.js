let carousel = (direction, wrapper, list) => {
  const sizeWrap = wrapper.offsetWidth;
  const sizeList = list.offsetWidth;
  let x;
  if (list.getAttribute('data-left')) {
    x = Number(list.getAttribute('data-left'));
  } else {
    x = 0;
    list.setAttribute('data-left', '0');
  }

  if (sizeList > sizeWrap) {
    if (direction === 'left') {
      x = Math.min(x + sizeWrap, 0);
    } else {
      x = Math.max(x - sizeWrap, sizeWrap - sizeList);
    }
  }
    list.setAttribute('data-left', x);
    list.style.transform = `translateX(${x}px)`;
}

const eventForBtns = (btns, wrapper, list) => {
  for (let i = 0; i < 2; i++) {
    const dir = (i === 0 ? 'left' : 'right');
    btns[i].addEventListener('click', function() {
      carousel(dir, wrapper, list);
    });
  }
}

const subscribeCarousel = () => {
  const btns = document.querySelector('.subscribe').querySelectorAll('.arrows__item');
  const wrapper = document.querySelector('.accounts');
  const list = document.querySelector('.accounts__list');

  eventForBtns(btns, wrapper, list);  

  var hammertime = new Hammer(list);
  hammertime.on('swipeleft', function () {
    carousel('right', wrapper, list);
  });

  hammertime.on('swiperight', function () {
    carousel('left', wrapper, list);
  });
}

const contentCarousel = () => {
  const btns = document.querySelector('.rate-content').querySelectorAll('.arrows__item');
  const wrapper = document.querySelector('.rate-content__wrapper');
  const list = document.querySelector('.rate-content__accounts');

  eventForBtns(btns, wrapper, list);  

  var hammertime2 = new Hammer(list);
  hammertime2.on('swipeleft', function () {
    carousel('right', wrapper, list);
  });

  hammertime2.on('swiperight', function () {
    carousel('left', wrapper, list);
  });
}

subscribeCarousel();
contentCarousel();