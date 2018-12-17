function autocomplete(inp, arr) {
  var clearBtn = document.querySelector('.select__clear');
  var image = document.querySelector('.select__img');

  clearBtn.addEventListener('click', function (e) {
    e.defaultPrevented;
    clear();
  })

  inp.addEventListener("input", function (e) {
    if (!inp.value) {
      clear();
    } else {
      clearBtn.style.display = 'block';
    }
    var divList, divItem, i, val = this.value;
    closeAllLists();

    if (!this.value) {
      return false;
    }
  
    currentFocus = -1;
    divList = document.createElement("div");
    divList.setAttribute("id", this.id + "autocomplete-list");
    divList.classList.add("select__list");
    this.parentNode.appendChild(divList);

    for (i = 0; i < arr.length; i++) {
      if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        divItem = document.createElement("div");
        divItem.classList.add('select__item');
        divItem.innerHTML = `<img class="select__item-img" src="${arr[i].picture}" alt="${arr[i].name}">`;
        divItem.innerHTML += `<div>${arr[i].name}<span class="select__item-desc">${arr[i].greeting}</span></div>`;
        divItem.innerHTML += `<input type="hidden" value="${arr[i].name}">`;

        divItem.addEventListener("click", function (e) {
          hiddenInput = this.getElementsByTagName("input")[0];
          inp.value = hiddenInput.value;
          image.setAttribute('src', this.getElementsByTagName('img')[0].getAttribute('src'));
          image.classList.add('select__img_item');
          closeAllLists();
        });
        divList.appendChild(divItem);
      }
    }
  });

  function clear() {
    clearBtn.removeAttribute('style');
    image.classList.remove('select__img_item');
    image.setAttribute('src', 'icons/login.svg');
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

fetch('https://raw.githubusercontent.com/kaptn3/instaboom/master/js/generated.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    autocomplete(document.getElementById("loginInput"), json);
  });