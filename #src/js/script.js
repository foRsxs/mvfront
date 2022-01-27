import Choices from 'choices.js';
import Swiper, {Navigation, Pagination} from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
    
    const headerSelect = new Choices('.choices', {
        itemSelectText: '',
        noResultsText: 'Ничего не найдено',
        loadingText: 'Загрузка',
        allowHTML: true,
        searchPlaceholderValue: 'Поиск по названию...',
        
    });


    const prevSlider = new Swiper('.prev__slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        navigation: {
            prevEl: '.prev__left',
            nextEl: '.prev__right'
        },
        pagination: {
            el: '.prev__pag',
            type: 'bullets',
            bulletClass: 'prev__pag_item',
            bulletElement: 'span',
            currentClass: 'prev__pag_cur',
            bulletActiveClass: 'prev__pag_active',
            clickable: true
        }

    });

    const connSlider = new Swiper('.conn__slider', {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        initialSlide: 2,
    });

    const connPrev = document.querySelector('#connPrev');
    const connNext = document.querySelector('#connNext');

    connPrev.addEventListener('click', () => {
        connSlider.slidePrev();
    });
    connNext.addEventListener('click', () => {
        connSlider.slideNext();
    })


    const products = document.querySelectorAll('.product');

    products.forEach(i => {
        i.addEventListener('mouseover', (e) => {
            let exBody = e.currentTarget.querySelector('.product__body_action');

            exBody.style.cssText = `height: ${exBody.scrollHeight}px`;
            i.style.cssText = `height: ${356 + exBody.scrollHeight}px;`;
        });

        i.addEventListener('mouseout', (e) => {
            let exBody = e.currentTarget.querySelector('.product__body_action');
            exBody.style.cssText = `height: 0px`;
            i.style.cssText = `height: 356px`;
        });
    });



    const navDropItem = document.querySelector('.nav__menu_item_drop');

    navDropItem.addEventListener('click', (e) => {
        let head = e.currentTarget.querySelector('.nav__menu_item_head');
        let menu = e.currentTarget.querySelector('.nav__menu_item_list');

        navDropItem.classList.toggle('active');

        if(navDropItem.classList.contains('active')) {
            menu.style.cssText = `height: ${menu.scrollHeight}px; visibility: visible; padding: 25px`;
        }

        if(!navDropItem.classList.contains('active')) {
            menu.style.cssText = `height: 0px; visibility: hidden; padding: 0 25px`;
        }
    });

    // navDropItem.addEventListener('mouseover', (e) => {
    //     let head = e.currentTarget.querySelector('.nav__menu_item_head');
    //     let menu = e.currentTarget.querySelector('.nav__menu_item_list');

    //     if(e.target == head || e.target == menu) {
    //         menu.style.cssText = `height: ${menu.scrollHeight}px; visibility: visible; `;

    //     }
    // });

    // navDropItem.addEventListener('mouseout', (e) => {
    //     let menu = e.currentTarget.querySelector('.nav__menu_item_list');
    //     menu.style.cssText = `height: 0px; visibility: hidden; `;
    // });

    // navDropItem.addEventListener('mouseout', (e) => {
    //     let head = e.currentTarget.querySelector('.nav__menu_item_head');
    //     let menu = e.currentTarget.querySelector('.nav__menu_item_list');

    //     if(e.target == head || e.target == menu) {
    //         menu.style.cssText = `height: 0px; visibility: hidden; `;

    //     }

    // });
});





