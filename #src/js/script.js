import Choices from 'choices.js';
import Swiper, {Navigation, Pagination, Thumbs} from 'swiper';
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import { navMenu } from './components/navMenu';
import { selectionAcc } from './components/selectionAcc';
import MicroModal from 'micromodal'; 
import { burgerBtn } from './components/burgerBtn';
import { mobileMenu } from './components/mobileMenu';
import { cardSelects } from './components/cardSelects';
import { tabs } from './components/tabs';
import { seoBtn } from './components/seoBtn';
import { tabsFunc } from './components/tabsFunc';
import { ratingFunc } from './components/ratingFunc';
import { textareaAutoHeight } from './components/textareaAutoHeight';
import { mobileRatingModal } from './components/mobileRatingModal';

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



    //Range test
    let filterPrice = document.querySelector('.range');

    let input1 = document.querySelector('#test1');
    let input2 = document.querySelector('#test2');

    let inputs = [input1, input2];


    noUiSlider.create(filterPrice, {
        start: [0, 100000],
        connect: true,
        step: 1,
        tooltips: false,

        range: {
            'min': 0,
            'max': 100000
        },
        format: {
            from: function(value) {
                return parseInt(value);
            },
            to: function(value) {
                return parseInt(value);  
            }
        }
        // format: {
        //     from: wNumb({thousand: ' ', suffix: '₸', }),
        //     to: wNumb({thousand: ' ', suffix: '₸', })
        // }
    });

    filterPrice.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = `${values[handle]}`;
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
    mobileRatingModal();


    
});





