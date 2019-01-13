{
  const cities = ['Не имеет значения', 'Санкт-Петербург', 'Москва', 'Екатеринбург', 'Калинград', 'Самара', 'Томск'];
  const locationDiv = document.querySelector('.location');
  const locationInp = document.querySelector('.location__input');
  const locationTooltip = document.querySelector('.location__tooltip');
  const locationList = document.querySelector('.location__list');
  const locationArrow = document.querySelector('.location__arrow');

  locationDiv.addEventListener('click', function () {
    if (locationTooltip.hasAttribute('style')) {
      locationArrow.classList.remove('location__arrow_opened');
      closeList();
    } else {
      locationTooltip.style.display = 'block';
      locationArrow.classList.add('location__arrow_opened');
    }
  });
  
  const initList = () => {
    for (let i = 0; i < cities.length; i++) {
      const locationItem = document.createElement('div');
      locationItem.className = 'location__item';
      locationItem.innerHTML = cities[i];

      locationList.appendChild(locationItem);

      locationItem.addEventListener('click', function () {
        locationDiv.innerHTML = cities[i];
        locationInp.value = cities[i];

        closeList();
      });
    }
  }

  const closeList = () => {
    locationTooltip.removeAttribute('style');
  }

  initList();

  document.addEventListener('click', function (e) {
    if (!locationTooltip.parentNode.contains(e.target) && locationTooltip.hasAttribute('style')) {
      closeList();
    }
  });
}