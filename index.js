// chama o método assincronamente e faz chamada à API
async function getRandomUser() {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  console.log(response);
}

function displayUser(user) {
  const name = document.getElementById('name');
  const location = document.getElementById('location');

  name.innerText = `${user.name.title}`;
  country.innerText = `${user.country}`;
  image.setAttribute('src', `${user.image.large}`);
}

// inicia a app
getRandomUser();

import get from '.index.html';
const URL = 'https://randomuser.me/api/';

const img = get ('.user-img');
const title = get ('.user-title');
const value = get ('.user-value');
const btn = get ('.btn');
const btns = get (...document.querySelectorAll('.icon'));

const getUser = sync () => {
  const response = await fetch(URL);
  const data = await response.json();
  //destructure
  const person = data.results[0]
};

const showUser = () => {
  console.log('hello world');
};

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('DOMContentLoaded', showUser)

/* 
 // Método do Walter p/ correr Random User API

// cria uma abstração de sintaxe mais curta para document.querySelector()
const element = (selector, element = null) => (element || document).querySelector(selector);
// cria uma abstração de sintaxe mais curta para document.querySelectorAll()
const elementsAll = (selector, element = null) => (element || document).querySelectorAll(selector);

// cria uma abstração de sintaxe mais curta para o método fetch() e response.json()
const myFetch = (url, options) => new Promise( (resolve, reject) => fetch(url, options || {}).then(response => response.json().then( data => resolve(data) ).catch( error => reject(error) ) ).catch( error => reject(error) ));

// preenche os dados do user substituindo o conteúdo de cada tag
const fillUser = response => {
  const user = response.results[0];
  
  element('img', ".profile-pic").src = user.picture.medium;
  element('strong', ".profile-pic").innerHTML = `${user.name.first} ${user.name.last}`;
  element('.location span', data).innerHTML = `${user.location.city} ${user.location.country}`;
};

// faz a chamada à API com o myFetch()
const getRandomUser = () => {
  myFetch('https://randomuser.me/api').then(fillUser).catch(error => console.log('Erro!'));
};

// captura os elementos principais
const avatar = element('.profile-pic'); // secção avatar (img)
const data = element('.info'); // secção dados
const btn = element('.change-btn'); // botão de troca
btn.addEventListener('click', getRandomUser); // adiciona evento click ao botão

// inicia a "aplicação"
getRandomUser();


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

})
*/

// stories slider (carousel) usando function

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("status-card");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 5; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

/*
// // stories slider (carousel) usando ForEach

let statusCard = [...document.querySelectorAll('.status-card')];
let preBtn = [...document.querySelectorAll('.pre-btn')];
let nxtBtn = [...document.querySelectorAll('.nxt-btn')];

statusCard.forEach((item, i) => {
	let statusDimensions = item.getBoundingClientRect();
	let statusWidth = statusDimensions.width;

	nxtBtn[i].addEventListener('click', () => {
		item.scrollLeft += statusWidth - 300;
	})

	preBtn[i].addEventListener('click', () => {
		item.scrollLeft -= statusWidth + 300;
  })
})
*/
