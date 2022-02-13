export function tableDrop() {

    const pars = document.querySelectorAll('.tableDrop');

    if(pars.length > 0) {

        pars.forEach(item => {

            item.addEventListener('click', (e) => {

                let rows = item.querySelectorAll('.drop_row');
                let btn = item.querySelector('[data-drop]')
                if(e.target && e.target.hasAttribute('data-drop')) {
                    item.classList.toggle('active');

                    if(item.classList.contains('active')) {
                        rows.forEach((i, index) => {
                            i.style.cssText = `height: ${i.scrollHeight + 20}px; padding: 10px 15px; overflow: visible`;
                            btn.innerHTML = 'Скрыть';

                            if(index == 3) {
                                i.style.cssText = `height: 80px; padding: 10px 15px; overflow: visible `;
                            }
                        })
                    }

                    if(!item.classList.contains('active')) {
                        rows.forEach(i => {
                            i.style.cssText = `height: 0; padding: 0 15px; overflow: hidden`;
                            btn.innerHTML = 'Подробнее';
                        })
                    }
                }
            })
        })
    }
}