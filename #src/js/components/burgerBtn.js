import MicroModal from "micromodal";
import {  disableBodyScroll ,  enableBodyScroll ,  clearAllBodyScrollLocks } from 'body-scroll-lock';  

export function burgerBtn() {

    const wrapper = document.querySelector('.wrapper');

    const mobMenuEl = document.querySelector('#mobmenu');
    const mobMenuContent = document.querySelector('.mobmenu__content');
    const burgerButtonEl = document.querySelector('.header__burger_btn');
    const mobmenuWrapper = document.querySelector('.mobmenu__wrapper');


    const scrollTarget = document.querySelector('.mobmenu__content');


    if(burgerButtonEl) {
        burgerButtonEl.addEventListener('click', () => {
            mobMenuEl.classList.toggle('is-open');
            burgerButtonEl.classList.toggle('active');      
            
            if(mobMenuEl.classList.contains('is-open')) {
                disableBodyScroll(scrollTarget);
            }

            if(!mobMenuEl.classList.contains('is-open')) {
                enableBodyScroll(scrollTarget);
            }
        });

        mobmenuWrapper.addEventListener('click', (e) => {
            
            if(e.target.classList.contains('mobmenu__wrapper')) {
                mobMenuEl.classList.remove('is-open');
                burgerButtonEl.classList.remove('active');  
                enableBodyScroll(scrollTarget);
            }
        });
    }
}