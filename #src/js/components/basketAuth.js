import {validateEmail} from "./mvjs/validateEmail";
import {fetchPost} from "./mvjs/fetchPost";
import {modalPopup} from "./modalPopup";

export function basketAuth() {

    const email      = document.querySelector('.checkout_email');
    const pass       = document.getElementById('pass');
    const csrf       = document.querySelector('meta[name="csrf-token"]').content;

    if (email){
        email.addEventListener('keyup', () => {

            if (validateEmail(email.value)){
                fetchPost('/auth/checkEmail',JSON.stringify({ email: email.value, _token : csrf }), body => {

                    if (body && body.success && body.success === true && body.pre_phone && body.pre_phone.length > 10){
                        document.querySelector('.cnt__form_inpt-fio').style.display = 'none';
                        document.querySelector('.cnt__form_inpt-phone').style.display = 'none';
                        document.getElementById('checkout_prephone').innerHTML = body.pre_phone;
                        document.querySelector('.cnt__form_inpt-auth').style.display = 'flex';
                        document.getElementById('pass').focus();
                    }else if(body.error){
                        // not found this email
                        console.log('error');
                        modalPopup(body.error,'Внимание',true)
                    }
                });
            }
        })
    }


    if (pass){
        pass.addEventListener('keyup', () => {

            pass.parentElement.classList.remove('error');

            if (pass.value.length === 4){
                fetchPost('/auth/enter',JSON.stringify({ email: email.value, pass: pass.value, _token : csrf }), body => {

                    if (body && body.success && body.success === true){
                        location.reload();
                    }else{
                        pass.parentElement.classList.add('error');
                        console.log('error');
                    }
                });
            }
        })
    }

}