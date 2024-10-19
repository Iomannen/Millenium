let arrowButton = document.querySelector('.cards__button');
let cardsSection = document.querySelector('.cards-list');
arrowButton.addEventListener('click', function() {
    cardsSection.classList.toggle('cards-hidden');
    cardsSection.classList.toggle('cards-list');
    arrowButton.classList.toggle('cards__button-active');
    arrowButton.classList.toggle('cards__button');
})