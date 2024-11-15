let screenCheck = window.matchMedia('(max-width: 1279px)');
let sertificateSwiper = document.querySelector('.swiper2');
window.addEventListener('DOMContentLoaded', () => {
  if (screenCheck.matches) {
sertificateSwiper.classList.toggle('swiper');
let swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.sertificate-pagination',
      type: 'bullets',
      clickable: true,
    },
      // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  });
} else {

    swiper.destroy(deleteInstance, cleanStyles);
}
})
