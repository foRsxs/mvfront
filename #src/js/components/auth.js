import {fetchPost} from "./mvjs/fetchPost";
import {serialize} from "./mvjs/serialize";
import {validateEmail} from "./mvjs/validateEmail";
import {modalPopup} from "./modalPopup";

export const accountAuth = () => {
    const btn           = document.getElementById('account_auth_check_email');
    const rbrPhone      = document.querySelector('.auth__form_ex');
    const error         = document.getElementById('auth_error');
    const codeForm      = document.getElementById('auth_form_code');
    const codePre       = document.querySelector('.auth__form_code_label');
    const lkEmail       = document.getElementById('lk-email');
    const lkPrephone    = document.getElementById('lk-prephone');

    if (rbrPhone){
        rbrPhone.addEventListener('click', ()=>{

            if (lkEmail.value){
                let data = serialize('#account_auth_form');
                data.email = lkEmail.value;

                fetchPost('/auth/recover',JSON.stringify(data), body => {

                    if (body && body.success && body.success === true){
                        modalPopup();

                    }else{

                    }

                });
            }

        })
    }


    if(btn) {
        btn.addEventListener('click', () => {
           auth();
        })

        if (lkEmail && error){

            lkEmail.addEventListener('input', ()=>{
                error.innerText = "";
                error.style.display = "none";
            })

            lkEmail.onkeydown = function(event){
                if(event.key === 'Enter')
                    auth();
            }
        }

        if (lkPrephone){
            lkPrephone.onkeyup= function(event){
                if(event.key === 'Enter' || lkPrephone.value.length === 4)
                    auth();
            }
        }
    }



    function auth() {
        error.innerText = "";
        error.style.display = "none";

        if (validateEmail(lkEmail.value) && lkPrephone.value) { // Check prephone and AUTH
            lkEmail.disabled = false; // In serialize disabled elements not added
            let data = JSON.stringify(serialize('#account_auth_form'));
            lkEmail.disabled = true;

            fetchPost('/auth/enter',data, body => {

                if (body && body.success && body.success === true){
                    location.reload();
                }else{
                    lkPrephone.parentElement.classList.add('error');
                    error.innerText = "Неправильные 4 последние цифры телефона";
                    rbrPhone.style.display = "block";
                }

            });

        }else if(validateEmail(lkEmail.value)){  // Check Email
            let data = JSON.stringify(serialize('#account_auth_form'));
            fetchPost('/auth/checkEmail',data, body => {

                if (body && body.pre_phone){
                    //codeForm.classList.add('show');
                    codeForm.style.display = 'flex';
                    codePre.innerHTML = body.pre_phone;
                    btn.innerHTML = 'ВОЙТИ';
                    lkEmail.disabled = true;

                    window.setTimeout(function() {
                        lkPrephone.focus();
                    }, 0);

                }else{
                    error.innerText = "Пользователь с таким Email не найден";
                    error.style.display = "block";
                }

            });
        }else{
            console.log('email error');
            error.innerText = 'Неправильный формат Email';
            error.style.display = "block";
        }
    }

}