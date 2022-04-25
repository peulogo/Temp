let header = document.querySelector('.header');
let heroTitle = document.querySelector('.hero-title');

window.onload = async() => { 
   let timeID = setTimeout( () => {
    getHeder();
       clearTimeout(timeID);
   }, 500)
   let timeID2 = setTimeout( () => {
    getHeroTitle ();
       clearTimeout(timeID2);
   }, 1000)
     
   
}


let getHeder = () => {
    header.classList.add('active');
}

let getHeroTitle = () => {
    heroTitle.classList.add('active');
}
