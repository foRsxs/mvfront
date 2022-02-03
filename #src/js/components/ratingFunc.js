export function ratingFunc(el) {
    const stars = document.querySelectorAll(el);

    if(stars.length > 0) {
        const starsArr = Array.prototype.slice.call(stars);

        starsArr.forEach(i => {
            i.addEventListener('click', () => {
                const { rateValue } = i.dataset;
                i.parentNode.dataset.rateTotal = rateValue;
            });
        });
    }

    
}