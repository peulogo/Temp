let header = document.querySelector('.header');
let heroTitle = document.querySelector('.hero-title');
let select = document.querySelector('.hero-select');
let selectButton = document.querySelector('.hero-button');

window.onload = async() => { 
   setTimeout( () => {
    getHeder();
   }, 500)

   setTimeout( () => {
    getHeroTitle ();
   }, 1000)

   setTimeout( () => {
    getSelect ();
   }, 1500)

   setTimeout( () => {
    getSelectButton ();
   }, 2000)
   
}


let getHeder = () => {
    header.classList.add('active');
}

let getHeroTitle = () => {
    heroTitle.classList.add('active');
}

let getSelect = () => {
    select.classList.add('active');
}

let getSelectButton = () => {
    selectButton.classList.add('active');
}

