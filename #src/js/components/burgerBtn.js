import MicroModal from "micromodal";

export function burgerBtn() {
    const mobMenuEl = document.querySelector('#mobmenu');
    const burgerButtonEl = document.querySelector('.header__burger_btn');
    const mobmenuWrapper = document.querySelector('.mobmenu__wrapper');

    if(burgerButtonEl) {
        burgerButtonEl.addEventListener('click', () => {
            mobMenuEl.classList.toggle('is-open');
            burgerButtonEl.classList.toggle('active');      
            document.body.classList.toggle('no-scroll');      
        });

        mobmenuWrapper.addEventListener('click', (e) => {
            
            if(e.target.classList.contains('mobmenu__wrapper')) {
                mobMenuEl.classList.remove('is-open');
                burgerButtonEl.classList.remove('active');  
                document.body.classList.remove('no-scroll');     
            }
        })
    }
}