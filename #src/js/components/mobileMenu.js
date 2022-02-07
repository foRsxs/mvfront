import { disablePageScroll, enablePageScroll } from "scroll-lock";

export function mobileMenu() {

    const mobileEls = document.querySelectorAll('[data-mobile-drop]');



    if(mobileEls.length > 0) {
        
        mobileEls.forEach(el => {
            let elClose = document.querySelector('[data-mobile-close]');
            el.addEventListener('click', (e) => {
                e.preventDefault();

                let parentEl = el.parentElement;
                let submenu = parentEl.querySelector('.mobmenu__nav_item_submenu');
                parentEl.classList.add('active');

                disablePageScroll(submenu);
            });

            elClose.addEventListener('click', (e) => {
                let parentEl = el.parentElement;
                let submenu = parentEl.querySelector('.mobmenu__nav_item_submenu');
                console.log(parentEl);

                parentEl.classList.remove('active');

                enablePageScroll(submenu);
            });
        });

        
    }

    
}