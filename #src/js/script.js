import Choices from 'choices.js';
import Swiper, {Navigation, Pagination, Thumbs} from 'swiper';

import { navMenu } from './components/navMenu';
import { selectionAcc } from './components/selectionAcc';
import { burgerBtn } from './components/burgerBtn';
import { mobileMenu } from './components/mobileMenu';
import { cardSelects } from './components/cardSelects';
import { tabs } from './components/tabs';
import { seoBtn } from './components/seoBtn';
import { tabsFunc } from './components/tabsFunc';
import { ratingFunc } from './components/ratingFunc';
import { textareaAutoHeight } from './components/textareaAutoHeight';

import { rangeSlider } from './components/rangeSlider';
import { filterMore } from './components/filterMore';
import { filterMobile } from './components/filterMobile';
import { cardGallery } from './components/cardGallery';
import { input } from './components/input';
import { counter } from './components/conuter';
import { customSelect } from './components/choice';
import { switchBasket } from './components/switchBasket';
import { selectCard } from './components/selectCard';
import { tableDrop } from './components/tableDrop';
import { navbar } from './components/navbar';
import { mobbasket } from './components/mobbasket';
import { search } from './components/search';
import { addRev } from './components/addRev';
import { addBasket } from './components/addBasket';
import basketAcc from './components/basketAcc';
import { cardAcc } from './components/cardAcc';
import lkMenu from './components/lkMenu';
import cardOpt from './components/cardOpt';


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


    // const products = document.querySelectorAll('.product');

    // products.forEach(i => {
    //     i.addEventListener('mouseover', (e) => {
    //         let exBody = e.currentTarget.querySelector('.product__body_action');

    //         exBody.style.cssText = `height: ${exBody.scrollHeight}px`;
    //         i.style.cssText = `height: ${356 + exBody.scrollHeight}px;`;
    //     });

    //     i.addEventListener('mouseout', (e) => {
    //         let exBody = e.currentTarget.querySelector('.product__body_action');
    //         exBody.style.cssText = `height: 0px`;
    //         i.style.cssText = `height: 356px`;
    //     });
    // });





    //filter tabs test
    // const flTabs = document.querySelectorAll('.category__body_filter_action_tab');

    // if(flTabs.length > 0) {
    //     flTabs.forEach(i => {
    //         i.addEventListener('click', () => {
    //             flTabs.forEach(item => {
    //                 item.classList.remove('active');
    //             });
    //             i.classList.add('active');
    //         })
    //     });
    // }




    //card slider test

    

    const cardThumbs = new Swiper('.card__img_thumbs', {
        slidesPerView: 4,
        direction: 'horizontal',
        spaceBetween: 10,
        slideToClickedSlide: true,
    });

    const cardSlider = new Swiper('.card__img_slider', {
        modules: [Thumbs, Pagination],
        slidesPerView: 1,
        spaceBetween: 15,
        pagination: {
            type: 'bullets',
            el: '.card__img_pag',
            bulletActiveClass: 'card__img_pag_item_active',
            bulletClass: 'card__img_pag_item'
        },
        thumbs: {
            swiper: cardThumbs
        }
    });

   
    
    


    navMenu();
    selectionAcc();
    burgerBtn();
    mobileMenu();
    cardSelects();
    tabs();
    seoBtn();
    tabsFunc('.tabs-wrapper', '.tabs-parent', '.tabs-tab', '.tabs-content');
    ratingFunc('.rating__item', '.rating__value');
    ratingFunc('.revmodal__rating_item', '.revmodal__rating_total');
    textareaAutoHeight('.autoheight');
    rangeSlider();
    filterMore('.filter__item_drop', '.filter__item_body_drop', '.filter__item_more');
    filterMobile();
    cardGallery();

    tabsFunc('.del__action', '.del__action_tabs', '.del__action_tab', '.del__action_tabcontent');
    input();
    counter();
    customSelect();
    switchBasket();


    tabsFunc('.hist__content', '.hist__content_tabs', '.hist__content_tab', '.hist__content_item');
    tabsFunc('.cat_tabwrapper', '.category__body_filter_action_tabs', '.category__body_filter_action_tab', '.category__body_list_tabcontent')
    selectCard();

    tableDrop();
    navbar()
    mobbasket()
    search();
    addRev();
    addBasket();
    basketAcc();
    cardAcc();
    lkMenu();
    cardOpt();
    tabsFunc('.cardParams', '.cardParams__head_els', '.cardParams__head_els_item', '.cardParams__body_item')
    
});





