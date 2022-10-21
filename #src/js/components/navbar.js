export const navbar = () => {
    const morebtn = document.querySelector('.navbar__item-more');
    const morediv = document.querySelector('.navbar__more')
    const moreclose = document.querySelector('.navbar__more_close');

    if(morebtn && morediv && moreclose) {
        morebtn.addEventListener('click', (e) => {
            e.preventDefault()
            morebtn.classList.toggle('active')
            morediv.classList.toggle('active')
        })

        morediv.addEventListener('click', (e) => {
            if(e.target.classList.contains('navbar__more')) {
                morediv.classList.remove('active')
                morebtn.classList.remove('active')
            }
        })

        moreclose.addEventListener('click', () => {
            morediv.classList.remove('active')
            morebtn.classList.remove('active')
        })
    }
}

