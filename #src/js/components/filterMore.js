export function filterMore(el, hidden, btn) {
    const wrap = document.querySelector(el);

    

    if(wrap) {
        const hiddenBlock = wrap.querySelector(hidden);
        const moreBtn = wrap.querySelector(btn);


        let showBtn = `
            Показать все
            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5.5 5L10 1" stroke="#DE2747" stroke-width="1.3" stroke-linecap="round"/>
                </svg>
                
        `;

        let hideBtn = `
            Скрыть
            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5.5 5L10 1" stroke="#DE2747" stroke-width="1.3" stroke-linecap="round"/>
                </svg>
                
        `;

        moreBtn.addEventListener('click', () => {
            moreBtn.classList.toggle('active');
            hiddenBlock.classList.toggle('active');

            if(moreBtn.classList.contains('active')) {
                moreBtn.innerHTML = hideBtn;
            }

            if(!moreBtn.classList.contains('active')) {
                moreBtn.innerHTML = showBtn;
            }

            if(hiddenBlock.classList.contains('active')) {
                hiddenBlock.style.height = `${hiddenBlock.scrollHeight}px`;
            }

            if(!hiddenBlock.classList.contains('active')) {
                hiddenBlock.style.height = `0px`;
            }

        });
    }
}