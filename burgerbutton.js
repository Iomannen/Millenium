
let burgerOpener = document.querySelector('.menu__sidemenu-button');
let burgerMenu = document.querySelector('.burger-menu');
let contentBackground = document.querySelector('.sidemenu-contentbackground');
let overflowHidden = document.querySelector('body');
burgerOpener.addEventListener('click', function (evt) {
    evt.preventDefault();
    overflowHidden.classList.toggle('hidden');
    burgerMenu.classList.toggle('burgermenu-open');
    contentBackground.classList.toggle('contentbackground');
    burgerOpener.classList.toggle('menu__sidemenu-button');
    burgerOpener.classList.toggle('menu__sidemenu-button--active');
   
});
let exitButton = document.querySelector('.exitbutton');
exitButton.addEventListener('click', function(ada) {
    ada.preventDefault();
    overflowHidden.classList.toggle('hidden');
    burgerMenu.classList.toggle('burgermenu-open');
    contentBackground.classList.toggle('contentbackground');
    burgerOpener.classList.toggle('menu__sidemenu-button');
    burgerOpener.classList.toggle('menu__sidemenu-button--active');
    
});

