import MicroModal from "micromodal";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

export function burgerBtn() {

    const wrapper = document.querySelector('.wrapper');

    const mobMenuEl = document.querySelector('#mobmenu');
    const burgerButtonEl = document.querySelector('.header__burger_btn');
    const mobmenuWrapper = document.querySelector('.mobmenu__wrapper');


    if(burgerButtonEl) {
        burgerButtonEl.addEventListener('click', () => {
            mobMenuEl.classList.toggle('is-open');
            burgerButtonEl.classList.toggle('active');      
            disablePageScroll(document.body);
        });

        mobmenuWrapper.addEventListener('click', (e) => {
            
            if(e.target.classList.contains('mobmenu__wrapper')) {
                mobMenuEl.classList.remove('is-open');
                burgerButtonEl.classList.remove('active');  
                enablePageScroll(document.body);
            }
        });
    }
}