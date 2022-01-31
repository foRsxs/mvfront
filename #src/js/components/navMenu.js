export function navMenu() {

    const navMenuParent = document.querySelector('.nav__menu_item_drop');

    navMenuParent.addEventListener('mouseenter', (e) => {
        let currentMenu = e.currentTarget.querySelector('.nav__menu_item_list');
        let currentHead = e.currentTarget.querySelector('.nav__menu_item_head');

        navMenuParent.classList.add('active');
        currentMenu.style.display = 'flex';
        
        
        
    });

    navMenuParent.addEventListener('mouseleave', (e) => {
        let currentMenu = e.currentTarget.querySelector('.nav__menu_item_list');
        let currentHead = e.currentTarget.querySelector('.nav__menu_item_head');
        
        navMenuParent.classList.remove('active');
        currentMenu.style.display = 'none';
    });
}