export function input() {

    const customFields = document.querySelectorAll('.customField');


    if(customFields.length > 0) {
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
    }
}