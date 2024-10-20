const swiper = new Swiper('.swiper', {
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
      // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '!.swiper-scrollbar',
  },
  });