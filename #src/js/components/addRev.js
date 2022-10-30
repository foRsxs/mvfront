export const addRev = () => {
    const btn = document.querySelector('.rev__total_action_btn');
    const mobBtn = document.querySelector('.rev__mob_part_action_btn');
    const modal = document.querySelector('.addrev');
    if(mobBtn && modal) {
        mobBtn.addEventListener('click', () => {
            modal.classList.add('active')
        })
    }
    if(btn && modal) {
        btn.addEventListener('click', () => {
            modal.classList.add('active')
        })
    }

    if(modal) {
        modal.addEventListener('click', (e) => {
            if(e.target.classList.contains('addrev__wrapper') || e.target.classList.contains('addrev__body_head_close')) {
                modal.classList.remove('active')
            }
        })
    }
}