import {filter} from "./filter";

export function category() {

    const tabKapli       = document.getElementById('tab_kapli')
    const tabSol         = document.getElementById('tab_solutions')
    const typeProductsId = document.getElementById('typeproducts_id')
    const inputs         = document.querySelectorAll('.inp_form');


    if (inputs){
        inputs.forEach(input => {
            input.addEventListener('click', () =>{
                filter();
            })
        })
    }

    function clear_form_elements(formName) {

        const onlyInputs = document.querySelectorAll(
            '#'+ formName +' input'
        );

        onlyInputs.forEach(function(e) {
            switch(e.type) {
                case 'password':
                case 'select-multiple':
                case 'select-one':
                case 'text':
                case 'textarea':
                    //e.value = '';
                    break;
                case 'checkbox':
                case 'radio':
                    e.checked = false;
            }
        });
    }

    if (tabKapli && tabSol){
        tabKapli.addEventListener('click', ()=>{
            typeProductsId.value = 3;
            clear_form_elements('form_filter');
        })

        tabSol.addEventListener('click', ()=>{
            typeProductsId.value = 2;
            clear_form_elements('form_filter');
        })

    }


}