export function modalPopup(body = null, title = null, isError = null) {

    const modal     = document.querySelector('.mod-popup');
    const divBody   = document.querySelector('.addbasket__body_main');
    const divTitle  = document.querySelector('.mod-popup__body_head_label');

    if (modal){

        if (title){

            if (isError === true)
                title = '<h3 style="color: red;">'+title+'</h3>';

            divTitle.innerHTML = title;
        }

        if (body && divBody)
            divBody.innerHTML = body;

        modal.classList.add('active');

        modal.addEventListener('click', (e) => {
            if(e.target.classList.contains('mod-popup__wrapper') || e.target.classList.contains('mod-popup__body_head_close') || e.target.classList.contains('addbasket__body_button_close')) {
                modal.classList.remove('active')
            }
        })
    }

}