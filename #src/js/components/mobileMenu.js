export function mobileMenu() {

    const mobmenuDropEl = document.querySelector('.mobmenu__nav_item_drop');
    const mobmenuDropMenu = document.querySelector('.mobmenu__subnav_wr');

    mobmenuDropEl.addEventListener('click', (e) => {
        e.preventDefault();
        mobmenuDropMenu.classList.toggle('active');
        mobmenuDropEl.classList.toggle('active');
        if(mobmenuDropMenu.classList.contains('active')) {

            mobmenuDropMenu.style.cssText = `height: ${mobmenuDropMenu.scrollHeight}px; padding-top: 34px; padding-bottom: 34px`;
        }

        if(!mobmenuDropMenu.classList.contains('active')) {
            mobmenuDropMenu.style.cssText = `height: 0; padding-top: 0; padding-bottom: 0`;
        }
    });
}