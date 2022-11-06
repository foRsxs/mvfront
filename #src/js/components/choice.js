import Choices from "choices.js";

export function customSelect() {

    const els = document.querySelectorAll('.custom__select');

    els.forEach(i => {
        const sel = new Choices(i, {
            allowHTML: true,
            itemSelectText: '',
            noResultsText: '',
            loadingText: 'Загрузка',
            noChoicesText: '',

            
        });
    });
}