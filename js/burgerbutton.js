
let burgerOpener = document.querySelector('.menu__sidemenu-button');
let burgerMenu = document.querySelector('.burger-menu');
let contentBackground = document.querySelector('.sidemenu-contentbackground');
let overflowHidden = document.querySelector('body');
let exitButton = document.querySelector('.exitbutton');
let menuPuncts = document.querySelectorAll('.menu-style');
const burgerElements = [burgerOpener, exitButton, contentBackground];
for (const el of burgerElements) {
    el.addEventListener('click', function(event) {
    event.preventDefault();
    overflowHidden.classList.toggle('hidden');
    burgerMenu.classList.toggle('burgermenu-open');
    contentBackground.classList.toggle('contentbackground');
    burgerOpener.classList.toggle('menu__sidemenu-button');
    burgerOpener.classList.toggle('menu__sidemenu-button--active');    
    })
}
menuPuncts.forEach((elem)=>{
	elem.addEventListener('click',()=>{
        overflowHidden.classList.toggle('hidden');
        burgerMenu.classList.toggle('burgermenu-open');
        contentBackground.classList.toggle('contentbackground');
        burgerOpener.classList.toggle('menu__sidemenu-button');
        burgerOpener.classList.toggle('menu__sidemenu-button--active');
  })
})

