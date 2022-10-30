export const cardAcc = () => {
    const items = document.querySelectorAll('.card-acc');


    if(items.length > 0 && window.innerWidth < 520) {
        items.forEach(item => {
            let trigger = item.querySelector('.card-acc-trigger')
            let ex = item.querySelector('.card-acc-ex')

            trigger.addEventListener('click', () => {
                item.classList.toggle('active')

                if(item.classList.contains('active')) {
                    ex.style.height = `${ex.scrollHeight}px`
                    trigger.innerHTML = 'Скрыть'
                }
                if(!item.classList.contains('active')) {
                    ex.style.height = `${0}px`
                    trigger.innerHTML = 'Показать полностью'
                }
            })
        })
    }
}