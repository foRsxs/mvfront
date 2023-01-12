export function input() {

    const customFields = document.querySelectorAll('.customField');

/*    if(customFields && customFields.length > 0) {
        customFields.forEach(filed => {
            if(filed.value != null) {
                filed.parentElement.classList.add('active');
            }
            if(filed.value == '') {
                filed.parentElement.classList.remove('active');
            }
            filed.addEventListener('change', () => {
                if(filed.value != null) {
                    filed.parentElement.classList.add('active');
                }
                if(filed.value == '') {
                    filed.parentElement.classList.remove('active');
                }
            });
        });
    }*/

    if (customFields && customFields.length > 0) {
        customFields.forEach(filed => {
            if (filed.value != null) {
                filed.parentElement.classList.add('active');
            }
            if (filed.value == '') {
                filed.parentElement.classList.remove('active');
            }
            filed.addEventListener('change', () => {
                if (filed.value != null) {
                    filed.parentElement.classList.add('active');
                }
                if (filed.value == '') {
                    filed.parentElement.classList.remove('active');
                }
            });

            if (filed.id) {
                let label = document.querySelector("label[for=" + filed.id + "]");

                if (label) {
                    label.addEventListener('click', () => {
                        filed.parentElement.classList.add('active')
                        filed.focus();
                    });
                }
            }
        });

    }
}