function autocomplete(inp, arr) {
  var clearBtn = document.querySelector('.select__clear');
  var image = document.querySelector('.select__img');

  clearBtn.addEventListener('click', function(e) {
    e.defaultPrevented;
    clear();    
  })

  inp.addEventListener("input", function(e) {
    if (!inp.value) {
      clear();
    } else {
      clearBtn.style.display = 'block';
    }
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.classList.add("select__list");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.classList.add('select__item');
          b.innerHTML = `<img class="select__item-img" src="${arr[i].picture}" alt="${arr[i].name}">`;
          b.innerHTML += `<div>${arr[i].name}<span class="select__item-desc">${arr[i].greeting}</span></div>`;
          b.innerHTML += `<input type="hidden" value="${arr[i].name}">`;
          
          b.addEventListener("click", function(e) {
            hiddenInput = this.getElementsByTagName("input")[0];
            inp.value = hiddenInput.value;
            image.setAttribute('src', this.getElementsByTagName('img')[0].getAttribute('src'));
            image.classList.add('select__img_item');
            closeAllLists();
          });
          a.appendChild(b);
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
    var x = document.getElementsByClassName("select__list");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

fetch('https://raw.githubusercontent.com/kaptn3/instaboom/master/js/generated.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    autocomplete(document.getElementById("myInput"), myJson);
  });
