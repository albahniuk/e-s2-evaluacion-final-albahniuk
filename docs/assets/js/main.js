"use strict";const urlApi="http://api.tvmaze.com/search/shows?q=",button=document.querySelector(".searcher__button"),inputUser=document.querySelector(".searcher__input"),listContainer=document.querySelector(".main__container-list"),favoriteClass="favorite";let savedFavorites=[];function writeShow(){listContainer.innerHTML="";const e=inputUser.value;fetch(urlApi+e).then(e=>e.json()).then(e=>{for(let t=0;t<e.length;t++){let s=e[t].show.name,i=e[t].show.image,n=e[t].show.id;const o="https://via.placeholder.com/210x295/cccccc/666666/?text=TV",a=JSON.parse(localStorage.getItem("favorites"));let r="";if(null!==a){savedFavorites=a,console.log(savedFavorites),r=-1!==a.findIndex(e=>e===n.toString())?favoriteClass:""}const l=document.createElement("li");l.setAttribute("class",`show ${r}`),l.setAttribute("id",n),listContainer.appendChild(l),l.innerHTML+=null===i?`\n          <div class="img-container">\n            <img class="img-show" src=${o} alt="${s}">\n          </div>\n          <h2 class="title-show">${s}</h2>\n          `:`\n          <div class="img-container">\n            <img class="img-show" src="${i.medium}" alt="${s}">\n          </div>\n          <h2 class="title-show">${s}</h2>\n          `}let t=document.querySelectorAll(".show");for(let e=0;e<t.length;e++)t[e].addEventListener("click",markFavorite)})}function markFavorite(e){const t=e.currentTarget;if(t.classList.toggle(favoriteClass),t.classList.contains(favoriteClass))savedFavorites.push(t.id);else{let e=savedFavorites.indexOf(t.id);savedFavorites.splice(e,1)}localStorage.setItem("favorites",JSON.stringify(savedFavorites))}button.addEventListener("click",writeShow);