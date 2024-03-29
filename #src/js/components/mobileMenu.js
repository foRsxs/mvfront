
import {  disableBodyScroll ,  enableBodyScroll ,  clearAllBodyScrollLocks } from 'body-scroll-lock';  

export function mobileMenu() {

    const mobileEls = document.querySelectorAll('[data-mobile-drop]');
    const mobMenu = document.querySelector('#mobmenu');
    const scrollTarget = document.querySelector('.mobmenu__content');

    if(mobileEls.length > 0) {
        
        mobileEls.forEach(el => {
            let elClose = el.parentElement.querySelector('[data-mobile-close]');
            el.addEventListener('click', (e) => {
                e.preventDefault();

                let parentEl = el.parentElement;
                let submenu = parentEl.querySelector('.mobmenu__nav_item_submenu');
                parentEl.classList.add('active');

                
                if(parentEl.classList.contains('active')) {
                    scrollTarget.style.cssText = 'overflow-y: hidden; -webkit-overflow-scrolling: auto';
                }
            });

            elClose.addEventListener('click', (e) => {
                let parentEl = el.parentElement;
                let submenu = parentEl.querySelector('.mobmenu__nav_item_submenu');
                parentEl.classList.remove('active');

                if(!parentEl.classList.contains('active')) {
                    scrollTarget.style.cssText = 'overflow-y: auto; -webkit-overflow-scrolling: touch';
                }
                
            });
        });

        
    }

    
}