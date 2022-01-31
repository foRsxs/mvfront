import Choices from 'choices.js';
import Swiper, {Navigation, Pagination, Thumbs} from 'swiper';
import { navMenu } from './components/navMenu';
import { selectionAcc } from './components/selectionAcc';
import MicroModal from 'micromodal'; 
import { burgerBtn } from './components/burgerBtn';
import { mobileMenu } from './components/mobileMenu';
import { cardSelects } from './components/cardSelects';
import { tabs } from './components/tabs';

document.addEventListener('DOMContentLoaded', () => {

    
    const headerSelect = new Choices('.header-ch', {
        itemSelectText: '',
        noResultsText: 'Ничего не найдено',
        loadingText: 'Загрузка',
        allowHTML: true,
        searchPlaceholderValue: 'Поиск по названию...',
        
    });

    const navChoice = new Choices('.nav-ch', {
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
    
    const connThumbs = new Swiper('.conn__thumbs', {
        
        slidesPerView: 3,
        spaceBetween: 20,
        
        

    });
    const connSlider = new Swiper('.conn__slider', {
        modules: [Thumbs],
        direction: 'horizontal',
        slidesPerView: 1,
        
        breakpoints: {
            600: {
            direction: 'vertical',
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: true,
            initialSlide: 2,
            }
        },
        thumbs: {
            swiper: connThumbs
        },
    });

    

    

    const connPrev = document.querySelector('#connPrev');
    const connNext = document.querySelector('#connNext');

    if(connPrev) {
        connPrev.addEventListener('click', () => {
            connSlider.slidePrev();
        });
    }
    if(connNext) {
        connNext.addEventListener('click', () => {
            connSlider.slideNext();
        })
    }


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


    navMenu();
    selectionAcc();
    burgerBtn();
    mobileMenu();
    cardSelects();
    tabs();


    
});





