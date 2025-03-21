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


/*=============== SWIPER POPULAR ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
