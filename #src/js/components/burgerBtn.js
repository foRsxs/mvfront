import MicroModal from "micromodal";

export function burgerBtn() {
    const mobMenuEl = document.querySelector('#mobmenu');
    const burgerButtonEl = document.querySelector('.header__burger_btn');

    if(burgerButtonEl) {
        burgerButtonEl.addEventListener('click', () => {
            mobMenuEl.classList.toggle('is-open');
            burgerButtonEl.classList.toggle('active');            
        });
    }
}