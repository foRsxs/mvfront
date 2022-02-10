export function counter() {

    const btns = document.querySelectorAll('.value__btn');

    if(btns.length >= 2) {
        btns.forEach(btn => {
            btn.addEventListener('click', function() {
                const dir = this.dataset.dir;
                const inp = this.parentElement.querySelector('.value__inp');

                const curValue = +inp.value;

                let newVal;

                if(dir === 'plus') {
                    newVal = curValue + 1;
                } else  {
                    newVal = curValue - 1 > 0 ? curValue - 1 : 0;
                }

                inp.value = newVal;

            });
        });
    }
}