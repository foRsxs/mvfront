export function selectCard() {



    const parent = document.querySelectorAll('.dropdown');

    if(parent.length > 0) {

        parent.forEach(p => {
            let head = p.querySelector('.dropdown__head');
            let list = p.querySelector('.dropdown__list');
    
            let items = list.querySelectorAll('.dropdown__list_item');
    
            p.addEventListener('click', (e) => {
    
                if(e.target) {
                    p.classList.toggle('active');
                }

                items.forEach(i => {
                    i.addEventListener('click', () => {
                        head.innerHTML = `${i.innerHTML}`;
                        head.dataset.current = i.dataset.value;
                    })
                })
                
    
                // if(e.target.hasAttribute('data-carddrop')) {
                //     head.innerHTML = `${}`;
                //     head.dataset.current = e.target.dataset.value;
                // }
    
            });
        })

        
    }
}