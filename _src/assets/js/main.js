'use strict';

console.log('>> Ready :)');

const urlApi = "http://api.tvmaze.com/search/shows?q=";
const button = document.querySelector('.searcher__button');
const inputUser = document.querySelector('.searcher__input');
const listContainer = document.querySelector('.main__container-list');


// Al hacer clic sobre el botón de 'Buscar', nuestra aplicación debe conectarse al API:
function writeShow() {
  const show = inputUser.value;
  fetch(urlApi + show)
    .then(response => response.json())
    .then(data => {
      for(let i=0; i<data.length; i++) {
        console.log(data[i].show.name);
        let nameShow = data[i].show.name;
        let imageShow = data[i].show.image.original;
        listContainer.innerHTML += `
        <li class="show">
        <h2 class="title-show">${nameShow}</h2>
        <div class="img-container">
          <img class="img-show" src="${imageShow}" alt="${nameShow}">
        </div>
        </li>
        `;
      }
    });
}

button.addEventListener('click', writeShow);


// Recoger el texto que ha introducido el usuario en el campo de búsqueda.

// Por cada show contenido en el resultado de búsqueda debemos pintar en el ul una li de una tarjeta donde mostramos una imagen de la serie (img) y el título(h2).

// Si las series que obtenemos en los resultados no tienen cartel, debemos mostrar una imagen de relleno: https://via.placeholder.com/210x295/cccccc/666666/?text=TV

// Marcar como favorito al hacer click en los resultados de búsqueda. Añadir una clase para que se cambia el color de fondo y se pone un borde alrededor de la tarjeta.

// Almacenar la información de favoritos en el localStorage.
