
let burgerOpener = document.querySelector('.menu__sidemenu-button');
let burgerMenu = document.querySelector('.burger-menu');
let contentBackground = document.querySelector('.sidemenu-contentbackground');
burgerOpener.addEventListener('click', function (evt) {
    evt.preventDefault();
    burgerMenu.classList.toggle('burgermenu-open');
    contentBackground.classList.toggle('contentbackground');
    burgerOpener.classList.toggle('menu__sidemenu-button');
    burgerOpener.classList.toggle('menu__sidemenu-button--active');
});
let exitButton = document.querySelector('.exitbutton');
exitButton.addEventListener('click', function(ada) {
    ada.preventDefault();
    burgerMenu.classList.toggle('burgermenu-open');
    contentBackground.classList.toggle('contentbackground');
    burgerOpener.classList.toggle('menu__sidemenu-button');
    burgerOpener.classList.toggle('menu__sidemenu-button--active');
});

