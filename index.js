let header = document.querySelector('.header');
let heroTitle = document.querySelector('.hero-title');
let select = document.querySelector('.hero-select');
let selectButton = document.querySelector('.hero-button');
let animItems = document.querySelectorAll('.apis-item');

window.onload = () => { 
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




window.addEventListener('scroll', animOnScroll)

function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemPoint)){
            animItem.classList.add('active');
        }
    }
}

function offset(el) {
    const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

animOnScroll();