 // core version + navigation, pagination modules:
//  import Swiper, { Navigation, Pagination } from 'swiper';
import Swiper from './swiper.js';


 // import Swiper and modules styles
import './swiper/swiper-bundle.css';

//  import 'swiper/css';
//  import 'swiper/css/navigation';
//  import 'swiper/css/pagination';
// import 'swiper/css/bundle';

// npx http-server 서버 켜서 하기..!

console.log('입력이 잘 되는가?!?!');


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