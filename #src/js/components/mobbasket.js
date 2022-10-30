export const mobbasket = () => {

    const btn = document.querySelector('.basket__mobile_action');
    const basket = document.querySelector('.basket__body');


    if(btn) {
        
        btn.addEventListener('click', () => {
            basket.classList.add('active')
            console.log('click')
        })
    }
    
}