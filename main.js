 // core version + navigation, pagination modules:
 import Swiper, { Navigation, Pagination } from 'swiper';
 // import Swiper and modules styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
import 'swiper/css/bundle';

 // init Swiper:
 const swiper = new Swiper('.swiper', {
   // configure Swiper to use modules
   direction: 'vertical',
   loop: true,
   modules: [Navigation, Pagination],
  pagination: {
    el : '.swiper-pagination'
  },

  navigation: {
    nextEl: '.wiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar : {
    el : '.swiper-scrollbar'
  },


 });