export function tabs() {


    const tabsParent = document.querySelector('.card__tabs_head_list');
    const tabsEl = document.querySelectorAll('.card__tabs_head_item');
    const tabsContent = document.querySelectorAll('.card__tabs_content_item');

    function hideTabs() {
        tabsContent.forEach(i => {
            i.classList.remove('show');
        });
        tabsEl.forEach(i => {
            i.classList.remove('active');
        })
    }

    function showTabs(index = 0) {
        tabsContent[index].classList.add('show');
        tabsEl[index].classList.add('active');
    }

    if(tabsParent) {
        hideTabs();
        showTabs();

        tabsParent.addEventListener('click', (e) =>  {
            if(e.target && e.target.classList.contains('card__tabs_head_item')) {
                tabsEl.forEach((i, index) =>  {
                    if(e.target == i) {
                        hideTabs();
                        showTabs(index);
                    }
                })
            }
        });
    }



    

    
}