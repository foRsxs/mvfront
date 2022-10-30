const basketAcc = () => {
    const items = document.querySelectorAll('.basket-acc');

    if(items.length > 0 && window.innerWidth < 600) {
        items.forEach(item => {
            const head = item.querySelector('.basket-acc-head')
            const body = item.querySelector('.basket-acc-body')

            head.addEventListener('click', () => {
                item.classList.toggle('active')

                if(!item.classList.contains('active')) {
                    body.style.height = '0'
                }
                if(item.classList.contains('active')) {
                    body.style.height = `${body.scrollHeight}px`
                }
            })
            if(!item.classList.contains('active')) {
                body.style.height = '0'
            }
            if(item.classList.contains('active')) {
                body.style.height = `${body.scrollHeight}px`
            }
        })
    }
    
}

export default basketAcc;