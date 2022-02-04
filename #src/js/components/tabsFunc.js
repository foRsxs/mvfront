export function tabsFunc(wrapper, parent, tabs, content) {

    const wrapEl = document.querySelector(wrapper);

    if(wrapEl) {
        const parentEl = wrapEl.querySelector(parent);
        const tabsEl = wrapEl.querySelectorAll(tabs);
        const contentEl = wrapEl.querySelectorAll(content);

        function hideTabs() {
            contentEl.forEach(i => {
                i.style.display = 'none';
            });

            tabsEl.forEach(i => {
                i.classList.remove('active');
            });
        }

        function showTabs(index = 0) {
            contentEl[index].style.display = 'block';
            tabsEl[index].classList.add('active');
        }

        if(parentEl) {
            hideTabs();
            showTabs();


            parentEl.addEventListener('click', (e) => {

                let tar = e.target;

                if(tar && tar.hasAttribute('data-tab')) {
                    tabsEl.forEach((i, index) => {
                        if(tar == i) {
                            hideTabs();
                            showTabs(index);
                        }
                    });

                }
            });

        }
    }
    

}