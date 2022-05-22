
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



 // 마우스 커서 이벤트..!! 
 
// const cursor = document.querySelector('.cursor');

// mouseEffect.addEventListener('mousemove',(e) => {
//   cursor.style.left = `${e.clientX}px`;
//   cursor.style.top = `${e.clientY}px`;
// });

// console.log(e.clientX);




// let mouseCursor = document.querySelector(".cursor");
// let navLinks = document.querySelectorAll(".navbar_menu_list li a"); //메뉴 링크
// //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
// window.addEventListener("scroll", cursor);
// window.addEventListener("mousemove", cursor);
// //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴

// function cursor(e) {
//   mouseCursor.style.left = e.pageX + "px";
//   mouseCursor.style.top = e.pageY - scrollY + "px";
// }

// navLinks.forEach((link) => {
//   link.addEventListener("mouseover", () => {
//     mouseCursor.classList.add("link-grow");
//     mouseCursor.style.zIndex = "-1";
//     link.classList.add("hovered-link");
//   });
//   link.addEventListener("mouseleave", () => {
//     mouseCursor.classList.remove("link-grow");
//     mouseCursor.style.zIndex = "1000";
//     link.classList.remove("hovered-link");
//   });
// });