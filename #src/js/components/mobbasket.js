export const mobbasket = () => {

    const btn = document.querySelector('.basket__mobile_action');
    const mobbasket = document.querySelector('.basket__mobile');
    const order = document.querySelector('.basket__body');


    if(btn) {
        btn.addEventListener('click', () => {
            mobbasket.classList.add('hide')
            order.classList.add('active')
        })
    }
    
}