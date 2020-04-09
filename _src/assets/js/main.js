'use strict';

const urlApi = 'https://api.tvmaze.com/search/shows?q=';
const button = document.querySelector('.searcher__button');
const inputUser = document.querySelector('.searcher__input');
const listContainer = document.querySelector('.main__container-list');
const favoriteClass = 'favorite';
let savedFavorites = [];

function writeShow() {
  listContainer.innerHTML = '';
  const show = inputUser.value;
  fetch(urlApi + show)
    .then(response => response.json())
    .then(data => {
      for(let i=0; i<data.length; i++) {
        let nameShow = data[i].show.name;
        let imageShow = data[i].show.image;
        let idShow = data[i].show.id;
        const placeholder = 'https://via.placeholder.com/210x295/cccccc/666666/?text=TV';

        const favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites'));

        let computedFavoriteClass = '';
        if(favoritesLocalStorage !== null) {
          savedFavorites = favoritesLocalStorage;
          let isFavorite = favoritesLocalStorage.findIndex(x => x === idShow.toString()) !== -1;
          computedFavoriteClass = isFavorite ? favoriteClass : '';
        }

        const newItem = document.createElement('li');
        newItem.setAttribute('class', `show ${computedFavoriteClass}`);
        newItem.setAttribute('id', idShow);
        listContainer.appendChild(newItem);

        if (imageShow === null) {
          newItem.innerHTML += `
          <div class="img-container">
            <img class="img-show" src=${placeholder} alt="${nameShow}">
          </div>
          <h2 class="title-show">${nameShow}</h2>
          `;
        } else {
          newItem.innerHTML += `
          <div class="img-container">
            <img class="img-show" src="${imageShow.medium}" alt="${nameShow}">
          </div>
          <h2 class="title-show">${nameShow}</h2>
          `;
        }
      }

      let items = document.querySelectorAll('.show');
      for (let i=0; i<items.length; i++) {
        items[i].addEventListener('click', markFavorite);
      }
    });
}

button.addEventListener('click', writeShow);

function markFavorite(e) {
  const item = e.currentTarget;
  item.classList.toggle(favoriteClass);
  if(item.classList.contains(favoriteClass)){
    savedFavorites.push(item.id);
  } else {
    let indexArray = savedFavorites.indexOf(item.id);
    savedFavorites.splice(indexArray,1);
  }
  localStorage.setItem('favorites', JSON.stringify(savedFavorites));
}
