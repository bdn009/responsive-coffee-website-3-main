/*=============== SHOW MENU ===============*/
const toggle=document.getElementById('nav-toggle');
const navMenu=document.getElementById('nav-menu');
const navClose=document.getElementById('nav-close');
if(toggle){
    toggle.addEventListener('click',()=>{
        navMenu.classList.toggle('show__menu');
    });
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show__menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link');

const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show__menu');
}
navLink.forEach(n=>n.addEventListener('click',linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header');
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 
        ? header.classList.add('shadow-header') 
        : header.classList.remove('shadow-header');
}

window.addEventListener('scroll', shadowHeader);

/*=============== SWIPER POPULAR ===============*/
const swiperpopular = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 32,
    slidePreView: 'auto',
    centerdSlides: true,

    breakpoints:{
        1120:{
            spaceBetween: 80,
        }
    }
  });

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
