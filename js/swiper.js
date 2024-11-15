let windowCheck = window.matchMedia('(max-width: 767px)');

window.addEventListener('DOMContentLoaded', () => {
  if (windowCheck.matches) {
let swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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
  swiper.destroy(deleteInstance, cleanStyles)
}
})
