let consultationButton = document.querySelector('.call-button');
let consultationElement = document.querySelector('.consultation-window');
let priceButton = document.querySelectorAll('.content__price');
let consultationExit = document.querySelector('.consultation-exitbutton');
let documentBackground = document.querySelector('.document-background');
const consultationElements = [consultationButton, consultationExit, documentBackground];
for (const el of consultationElements) {
    el.addEventListener('click', function(event) {
        event.preventDefault();
        consultationElement.classList.toggle('consultation-hidden');
        consultationElement.classList.toggle('consultation-window');
        overflowHidden.classList.toggle('hidden');
    })
};
priceButton.forEach((element)=>{
    element.addEventListener('click', ()=>{
        consultationElement.classList.toggle('consultation-hidden');
        consultationElement.classList.toggle('consultation-window');
        overflowHidden.classList.toggle('hidden');
    })
});


