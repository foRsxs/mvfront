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
            });

            elClose.addEventListener('click', (e) => {
                let parentEl = el.parentElement;
                console.log(parentEl);

                parentEl.classList.remove('active');
            });
        });

        
    }

    
}