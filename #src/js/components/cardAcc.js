export const cardAcc = () => {
    const items = document.querySelectorAll('.card-acc');


    if(items.length > 0 && window.innerWidth < 520) {
        items.forEach(item => {
            let trigger = item.querySelector('.card-acc-trigger')
            let ex = item.querySelector('.card-acc-ex')

            if (trigger){
                trigger.addEventListener('click', () => {
                    item.classList.toggle('active')

                    if(item.classList.contains('active')) {
                        trigger.innerHTML = 'Скрыть'
                    }
                    if(!item.classList.contains('active')) {
                        trigger.innerHTML = 'Показать полностью'
                    }
                })

                if(item.classList.contains('active')) {
                    trigger.innerHTML = 'Скрыть'
                }
                if(!item.classList.contains('active')) {
                    trigger.innerHTML = 'Показать полностью'
                }
            }


        })
    }
}