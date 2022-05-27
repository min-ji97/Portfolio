
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

//  var swiper2 = new Swiper('.swiper_second', {

//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,

//   pagination: {
//     el : '.swiper-pagination',
//     clickable: true,
//   },

//  navigation: {
//    prevEl: '.swiper-button-prev',
//    nextEl: '.swiper-button-next',
//  },
//  scrollbar : {
//    el : '.swiper-scrollbar'
//  },

// });



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




gsap.registerPlugin(ScrollTrigger);

// Horizontal Scroll - GSAP ScrollTrigger


// const horizontalSections = gsap.utils.toArray('section.horizontal')

// horizontalSections.forEach(function (sec, i) {	
  
//   var thisPinWrap = sec.querySelector('.pin-wrap');
//   console.log(sec);
//   var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
  
//   var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth); 

//   gsap.fromTo(thisAnimWrap, { 
//     x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
//   }, { 
//     x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
//     ease: "none",
//     scrollTrigger: {
//       trigger: sec,		
//       start: "top top",
//       end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
//       pin: thisPinWrap,
//       invalidateOnRefresh: true,
//       //anticipatePin: 1,
//       scrub: true,
//       //markers: true,
//     }
//   });

// });	

//  gsap pinning 


gsap.defaults({ease: "power1", duration: 3});

const tl = gsap.timeline();
tl.from(".projects", {xPercent: 40 })


ScrollTrigger.create({
  animation: tl,
  trigger: "#project",
  start: "top top", 
  end: "+=4000",
  pin: true,
  scrub: true,
  anticipatePin: 1
});