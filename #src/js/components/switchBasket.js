export function switchBasket() {
    const switcher = document.querySelector('#sw1');

    const swSelect = document.querySelector('#switchable');

    if(swSelect) {
        const selPar = swSelect.parentElement.parentElement;
        if(switcher.checked) {
            selPar.classList.remove('disabled');
        }

        if(!switcher.checked) {
            selPar.classList.add('disabled');
        }
        switcher.addEventListener('click', (e) => {
            
            if(switcher.checked) {
                selPar.classList.remove('disabled');
            }

            if(!switcher.checked) {
                selPar.classList.add('disabled');
            }
        });
    }

    
    
}