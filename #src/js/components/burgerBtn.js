import MicroModal from "micromodal";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export function burgerBtn() {

    const wrapper = document.querySelector('.wrapper');

    const mobMenuEl = document.querySelector('#mobmenu');
    const mobMenuContent = document.querySelector('.mobmenu__content');
    const burgerButtonEl = document.querySelector('.header__burger_btn');
    const mobmenuWrapper = document.querySelector('.mobmenu__wrapper');


    if(burgerButtonEl) {
        burgerButtonEl.addEventListener('click', () => {
            mobMenuEl.classList.toggle('is-open');
            burgerButtonEl.classList.toggle('active');      
            
            if(mobMenuEl.classList.contains('is-open')) {

                
                disablePageScroll(mobMenuEl);
            }

            if(!mobMenuEl.classList.contains('is-open')) {
                enablePageScroll(mobMenuEl);
            }
        });

        mobmenuWrapper.addEventListener('click', (e) => {
            
            if(e.target.classList.contains('mobmenu__wrapper')) {
                mobMenuEl.classList.remove('is-open');
                burgerButtonEl.classList.remove('active');  
                enablePageScroll(mobMenuEl);
            }
        });
    }
}