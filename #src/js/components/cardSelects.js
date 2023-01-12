import Choices from "choices.js";

export function cardSelects() {

    const selects = document.querySelectorAll('.card__sel');

    selects.forEach(sel => {

        var customSel = new Choices(sel, {
            allowHTML: true,
            searchEnabled: false,
            shouldSort: false,
            itemSelectText: '',
            noResultsText: '',
            loadingText: '',
            searchPlaceholderValue: '',

/*            sorter: function (a, b) {
                return a.value - b.value
            }*/
        });
    })
}