
import {filter} from "./filter";

export const quickSearch = () => {
    const btn       = document.getElementById('quick_search_action');
    const btnMore   = document.querySelector('.btn__products__more');
    const _title    = document.querySelector('.section__title');

    if(btn) {
        btn.addEventListener('click', () => {
            filter();

            if (btnMore)
                btnMore.style.display = 'none';

            if (_title)
                _title.innerHTML = 'Результаты поиска';

        })
    }
}