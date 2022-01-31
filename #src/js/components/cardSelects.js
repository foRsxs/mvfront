import Choices from "choices.js";

export function cardSelects() {

    const selects = document.querySelectorAll('.card__sel');

    selects.forEach(sel => {

        var customSel = new Choices(sel, {
            allowHTML: true,
            searchEnabled: false,
            itemSelectText: '',
            noResultsText: '',
            loadingText: '',
            searchPlaceholderValue: '',
        });
    })
}