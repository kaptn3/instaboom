function autocomplete(inp, arr) {
  var clearBtn = document.querySelector('.select__clear');
  var image = document.querySelector('.select__img');

  clearBtn.addEventListener('click', function (e) {
    e.defaultPrevented;
    clear();
  })

  inp.addEventListener("input", function (e) {
    if (this.value) {
      clearBtn.style.display = 'block'; // включение кнопки стереть
    } else {
      return false;
    }

    let divItem;
    let val = this.value;
    closeAllLists(); // закрытые списка при ненахождении логина

    let arrow = document.createElement('i');
    arrow.className = 'tooltip__arrow select__arrow';

    let divWrap = document.createElement("div");
    divWrap.className = 'select__wrapper';
  
    let divList = document.createElement("div");
    divList.className = "select__list";
    this.parentNode.appendChild(divWrap);

    divWrap.appendChild(divList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        divItem = document.createElement("div");
        divItem.className = 'select__item';
        divItem.innerHTML = `<img class="select__item-img" src="${arr[i].picture}" alt="${arr[i].name}">`;
        divItem.innerHTML += `<div><span class="select__item-name">${arr[i].name}</span><span class="select__item-desc">${arr[i].greeting}</span></div>`;

        divItem.addEventListener("click", function (e) {
          let login = this.querySelector('.select__item-name');
          let desc = this.querySelector('.select__item-desc');
          inp.setAttribute('hidden', ''); // скрытие инпута
          inp.value = login.textContent; // добавляет логин instagram в скрытый input

          let divInput = document.createElement('div');
          divInput.className = 'select__item-text';

          divInput.appendChild(login);
          divInput.appendChild(desc);

          image.setAttribute('src', this.getElementsByTagName('img')[0].getAttribute('src'));
          image.className = 'select__img_item';

          document.querySelector('.select').insertBefore(divInput, clearBtn);

          closeAllLists();
        });
        divList.appendChild(divItem);
        divWrap.appendChild(arrow);
      }
    }
  });

  function clear() {
    clearBtn.removeAttribute('style');
    image.className = 'select__img';
    image.setAttribute('src', 'assets/icons/login.svg');
    inp.removeAttribute('hidden');
    if (document.querySelector('.select__item-text')) {
      document.querySelector('.select__item-text').remove();
    }
    inp.value = '';
  }

  function closeAllLists(elmnt) {
    var selectList = document.getElementsByClassName("select__wrapper");
    for (var i = 0; i < selectList.length; i++) {
      if (elmnt != selectList[i] && elmnt != inp) {
        selectList[i].parentNode.removeChild(selectList[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

// список логинов
fetch('assets/js/generated.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    autocomplete(document.getElementById("loginInput"), json);
  });