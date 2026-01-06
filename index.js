AOS.init();

const sidenavOpen = document.getElementById('sidenavOpen'); 
const sidenavClose = document.getElementById('sidenavClose');
const sidenav = document.getElementById('sidenav');

// Side navigation
sidenavOpen.style.display = 'block';
sidenavClose.style.display = 'none'; 

function showSidenav(){
  const sidenav = document.querySelector('.sidenav')
   sidenavOpen.style.display = 'none'; 
   sidenavClose.style.display = 'block';
  sidenav.style.display = 'flex' 
}

function hideSidenav(){
  const sidenav = document.querySelector('.sidenav')
   sidenavOpen.style.display = 'block'; 
  sidenavClose.style.display = 'none';
  sidenav.style.display = 'none' 
} 

// Back to top button
const mybutton = document.getElementById("backToTopBtn"); 

window.onscroll = function() {scrollFunction}; 

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", topFunction);

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


// Promo
//array = ["promo-item", "promo-item"];
const promoItem = document.getElementsByClassName("promo-item");
var countPromo = 0;
setInterval (() => {
    if(countPromo !== 2){
        countPromo ++;
        promoItem[0].classList.remove("active-first");
        promoItem[0].classList.add("remove-promo1");
        promoItem[1].classList.add("active-promo2");
        promoItem[1].classList.remove("remove-promo2");
        
    }
    if(countPromo == 2){
        countPromo = 0;
        promoItem[0].classList.add("active-promo1");
        promoItem[0].classList.remove("remove-promo1");
        promoItem[1].classList.remove("active-promo2");
        promoItem[1].classList.add("remove-promo2");

    }
}, 4000); 

// Trainers Swipper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400, 
  spaceBetween: 20, 
  direction: 'horizontal',
  slidesPerView: 4,
  loop: false,
  freeMode: true, 

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1024: { slidesPerView: 4},
    768: { slidesPerView: 2},
    480: { slidesPerView: 1},
  },

});