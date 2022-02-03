export function seoBtn() {
    const btnEl = document.querySelector('.seo__more_btn');

    const seoEx = document.querySelector('.seo__body_ex');


    if(window.innerWidth < 601 && btnEl) {
        btnEl.addEventListener('click', () => {
            seoEx.classList.toggle('active');

            if(seoEx.classList.contains('active')) {
                seoEx.style.height = `${seoEx.scrollHeight}px`;
            }

            if(!seoEx.classList.contains('active')) {
                seoEx.style.height = '0';
            }
        });
    }
}