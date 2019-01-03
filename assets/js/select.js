function autocomplete(inp, arr) {
  var clearBtn = document.querySelector('.select__clear');
  var image = document.querySelector('.select__img');

  clearBtn.addEventListener('click', function (e) {
    e.defaultPrevented;
    clear();
  })

  inp.addEventListener("input", function (e) {
    if (this.value) {
      clearBtn.style.display = 'block';
    } else {
      return false;
    }

    var divList, divItem, i, val = this.value;
    closeAllLists();
  
    divList = document.createElement("div");
    divList.setAttribute("id", "select-list-" + this.id);
    divList.classList.add("select__list");
    this.parentNode.appendChild(divList);

    for (i = 0; i < arr.length; i++) {
      if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        divItem = document.createElement("div");
        divItem.classList.add('select__item');
        divItem.innerHTML = `<img class="select__item-img" src="${arr[i].picture}" alt="${arr[i].name}">`;
        divItem.innerHTML += `<div><span class="select__item-name">${arr[i].name}</span><span class="select__item-desc">${arr[i].greeting}</span></div>`;

        divItem.addEventListener("click", function (e) {
          let login = this.querySelector('.select__item-name');
          let desc = this.querySelector('.select__item-desc');
          inp.setAttribute('hidden', ''); // скрытие инпута
          inp.value = login.textContent; // добавляет логин instagram в скрытый input

          let divInput = document.createElement('div');
          divInput.classList.add('select__item-text')

          divInput.appendChild(login);
          divInput.appendChild(desc);

          image.setAttribute('src', this.getElementsByTagName('img')[0].getAttribute('src'));
          image.classList.add('select__img_item');

          document.querySelector('.select').insertBefore(divInput, clearBtn);

          closeAllLists();
        });
        divList.appendChild(divItem);
      }
    }
  });

  function clear() {
    clearBtn.removeAttribute('style');
    image.classList.remove('select__img_item');
    image.setAttribute('src', 'assets/icons/login.svg');
    inp.removeAttribute('hidden');
    if (document.querySelector('.select__item-text')) {
      document.querySelector('.select__item-text').remove();
    }
    inp.value = '';
  }

  function closeAllLists(elmnt) {
    var selectList = document.getElementsByClassName("select__list");
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

fetch('assets/js/generated.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {// добавить иф и к каждому id  сделать разную обработку на клик функцию
    autocomplete(document.getElementById("loginInput"), json);
  });