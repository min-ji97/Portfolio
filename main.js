
// import Swiper from 'swiper.js';
// import 'swiper/swiper-bundle.css';


// npx http-server 서버 켜서 하기..! -> 이젠 키면 안됨..ㅎㅎㅎ 


 // init Swiper:
  var swiper = new Swiper('.swiper', {
   // configure Swiper to use modules
  // direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  //  modules: [Navigation, Pagination],
  pagination: {
    el : '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  scrollbar : {
    el : '.swiper-scrollbar'
  },


 });