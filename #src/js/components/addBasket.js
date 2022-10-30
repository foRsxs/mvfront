export const addBasket = () => {
    const btn = document.querySelector('.card__action_btn_el');
    const modal = document.querySelector('.addbasket');
    const modalSw = document.querySelector('.addbasket')

    if(btn && modal) {
        btn.addEventListener('click', () => {
            modal.classList.add('active')
        })
        modal.addEventListener('click', (e) => {
            if(e.target.classList.contains('addbasket__wrapper') || e.target.classList.contains('addbasket__body_head_close')) {
                modal.classList.remove('active')
            }
        })
    }
}