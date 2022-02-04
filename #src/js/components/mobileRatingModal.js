export function mobileRatingModal() {
    const btn = document.querySelector('.rev__mob_btn');
    const btnClose = document.querySelector('.revmodal__top_close');

    const mobRev = document.querySelector('.revmodal');

    if(btn) {
        btn.addEventListener('click', () => {
            mobRev.classList.add('active');
            document.body.classList.add('no-scroll');
        });
    }

    if(btnClose) {

        btnClose.addEventListener('click', () => {
            mobRev.classList.remove('active');
            document.body.classList.remove('no-scroll');
            
        });
    }
}