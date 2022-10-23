export const addRev = () => {
    const btn = document.querySelector('.rev__total_action_btn');
    const modal = document.querySelector('.addrev');
    
    if(btn && modal) {
        btn.addEventListener('click', () => {
            modal.classList.add('active')
        })

        modal.addEventListener('click', (e) => {
            if(e.target.classList.contains('addrev__wrapper') || e.target.classList.contains('addrev__body_head_close')) {
                modal.classList.remove('active')
            }
        })
    }
}