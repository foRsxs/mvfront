export function ratingFunc(el, num) {
    const stars = document.querySelectorAll(el);
    const valueNum = document.querySelector(num);

    if(stars.length > 0) {
        const starsArr = Array.prototype.slice.call(stars);

        starsArr.forEach(i => {
            i.addEventListener('click', () => {
                const { rateValue } = i.dataset;
                i.parentNode.dataset.rateTotal = rateValue;

                if (valueNum)
                    valueNum.innerHTML = rateValue;
            });
        });
    }

    
}