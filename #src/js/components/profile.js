import {validateEmail} from "./mvjs/validateEmail";
import {modalPopup} from "./modalPopup";
import {serialize} from "./mvjs/serialize";
import {fetchPost} from "./mvjs/fetchPost";

export function profile() {

    const btnSave = document.getElementById('save_profile')

    if (btnSave){
        btnSave.addEventListener('click', ()=>{

            let error       = ''
            const _name     = document.getElementById('lk-name')
            const _email    = document.getElementById('lk-email')
            const _phone    = document.getElementById('lk-phone')
            const _city     = document.getElementById('lk-city')
            const _address  = document.getElementById('lk-address')


            let phone = _phone.value.replace(/[^0-9\.]+/g, "");

            if (phone.length !== 11)
                error = 'Неправильный формат номера телефона +'+phone;

            if (!_email.value || !validateEmail(_email.value.replace(/\s/g, "")))
                error = 'Неправильный формат Email';


            if (error){
                modalPopup(error, 'Проверка данных',true);
            }else {
                let form  = serialize('#form_profile')
                fetchPost('/account/update',JSON.stringify(form), body => {

                    if (body && body.response && body.response === true){

                        console.log('success')

                        if (body.info)
                            modalPopup('<h3 style="color: green;">' + body.info + '</h3>', 'Информация',false);

                    }else if(body.error){
                        modalPopup(body.error, 'Проверка данных',true);
                    }


                });
            }


        })
    }

}