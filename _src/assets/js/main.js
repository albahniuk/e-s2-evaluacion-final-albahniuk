'use strict';

console.log('>> Ready :)');

const urlApi = 'http://api.tvmaze.com/search/shows?q=';
const button = document.querySelector('.searcher__button');
const inputUser = document.querySelector('.searcher__input');
const listContainer = document.querySelector('.main__container-list');
const favoriteClass = 'favorite';
let savedFavorites = [];


// Al hacer clic sobre el botón de 'Buscar', nuestra aplicación debe conectarse al API:
function writeShow() {
  listContainer.innerHTML = '';
  // Recoger el texto que ha introducido el usuario en el campo de búsqueda.
  const show = inputUser.value;
  fetch(urlApi + show)
    .then(response => response.json())
    .then(data => {
      for(let i=0; i<data.length; i++) {
        let nameShow = data[i].show.name;
        let imageShow = data[i].show.image;
        let idShow = data[i].show.id;
        const placeholder = 'https://via.placeholder.com/210x295/cccccc/666666/?text=TV';

        //PASO 3: convertir JSON a objeto(array) y leer favoritos del local storage
        const favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites'));

        // si no hay nada en el localStorage añadir favoriteCssClass vacío
        let favoriteClass = '';
        //si existe el localStorage y no es null
        if(favoritesLocalStorage !== null) {
          // actualizar lista de favoritos guardados con los datos del localstorage, para no perderlos cuando se recarga la página o se cambia de búsqueda:
          savedFavorites = favoritesLocalStorage;

          // comprobar si el id del show está en favoritos
          let isFavorite = favoritesLocalStorage.findIndex(x => x === idShow.toString()) !== -1;
          // Si está en favoritos le pone la clase favorite, sino le pone una cadena vacía. Operador ternario: condicion boolean ? true : false
          favoriteClass = isFavorite ? favoriteClass : '';
        }

        // Por cada show contenido en el resultado de búsqueda mostrar una imagen de la serie y el título. Si las series que obtenemos en los resultados no tienen cartel, debemos mostrar una imagen de relleno
        if (imageShow === null) {
          listContainer.innerHTML += `
          <li class="show ${favoriteClass}" id="${idShow}">
          <div class="img-container">
            <img class="img-show" src=${placeholder} alt="${nameShow}">
          </div>
          <h2 class="title-show">${nameShow}</h2>
          </li>
          `;
        } else {
          listContainer.innerHTML += `
          <li class="show ${favoriteClass}" id="${idShow}">
          <div class="img-container">
            <img class="img-show" src="${imageShow.medium}" alt="${nameShow}">
          </div>
          <h2 class="title-show">${nameShow}</h2>
          </li>
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


// Marcar como favorito al hacer click en los resultados de búsqueda
function markFavorite(e) {
  const item = e.currentTarget;
  item.classList.toggle(favoriteClass);
  // PASO 1 localStorage: Si tiene la clase favorite
  if(item.classList.contains(favoriteClass)){
    //añadir favorito a la array cuando se selecciona
    savedFavorites.push(item.id);
  } else {
    //sino eliminar favorito de la array al ser deseleccionado
    let indexArray = savedFavorites.findIndex(x => x === item.id);
    savedFavorites.splice(indexArray,1);
  }
  //PASO 2: almacenar favoritos en el localStorage y convertirlo a JSON
  localStorage.setItem('favorites', JSON.stringify(savedFavorites));
}
