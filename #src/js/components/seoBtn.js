export function seoBtn() {
    const btnEl = document.querySelector('.seo__more_btn');

    const seoEx = document.querySelector('.seo__body_ex');


    if(seoEx && btnEl) {
        btnEl.addEventListener('click', () => {
            seoEx.classList.toggle('active');

            if(seoEx.classList.contains('active')) {
                seoEx.style.height = `${seoEx.scrollHeight}px`;
                btnEl.innerHTML = 'Скрыть'
            }

            if(!seoEx.classList.contains('active')) {
                seoEx.style.height = '0';
                btnEl.innerHTML = 'Показать полностью';
            }
        });
    }
}