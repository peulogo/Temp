let header = document.querySelector('.header');

window.onload = () => { 
   let timeID = setTimeout( () => {
       getHeder();
       clearTimeout(timeID);
   }, 500)
   
}


let getHeder = () => {
    header.classList.add('active');
}

let getHeroTitle = () => {
    
}
