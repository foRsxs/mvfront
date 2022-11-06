const cardOpt = () => {
    const left = document.querySelector('#same');
    const right = document.querySelector('#dif')
    const body = document.querySelector('.card__params_form_main');

    if(left && body && right) {
        left.addEventListener('change', (e) => {
            if(e.target.checked) {
                body.classList.remove('db')
            } else {
                body.classList.add('db')
            }
        })
        right.addEventListener('change', (e) => {
            if(e.target.checked) {
                body.classList.add('db')
            } else {
                body.classList.remove('db')
            }
        })
    }
}

export default cardOpt;