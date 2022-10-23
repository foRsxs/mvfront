export const search = () => {
    const btn = document.querySelector('.header__search');
    const nav = document.querySelector('.nav');

    if(btn && nav) {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active')
            nav.classList.toggle('active')
        })
    }
}