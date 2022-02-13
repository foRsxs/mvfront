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
                
    
                if(e.target.classList.contains('dropdown__list_item')) {
                    head.innerHTML = `${e.target.innerHTML}`;
                    head.dataset.current = e.target.dataset.value;
                }
    
            });
        })

        
    }
}