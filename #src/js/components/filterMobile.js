import { disablePageScroll, enablePageScroll } from "scroll-lock";


export function filterMobile() {

    const filterEl = document.querySelector('.category__body_filter_wr');

    const filterBtn = document.querySelector('.category__body_filter_action_btn');
    const filterClose = document.querySelector('.category__body_filter_head_close');

    if(filterEl && filterBtn) {

        filterBtn.addEventListener('click', () => {
            filterEl.classList.add('active');
            disablePageScroll(document.body);
        });

        filterClose.addEventListener('click', () => {
            filterEl.classList.remove('active');
            enablePageScroll(document.body);
        });

        filterEl.addEventListener('click', (e) => {
            if(e.target.classList.contains('category__body_filter_wr')) {
                filterEl.classList.remove('active');
                enablePageScroll(document.body);
            }
        });

    }
}