import {basketFrm} from "./basketFrm";
import {fetchPost} from "./mvjs/fetchPost";
import {validateEmail} from "./mvjs/validateEmail";
import {modalPopup} from "./modalPopup";

export function basketDone() {

    const btnOrder = document.getElementById('add_order');

    if (btnOrder){
        btnOrder.addEventListener('click', ()=>{

            const data = basketFrm();
            let error = false;

            if (!data.type_payment)
                error = 'Выберите тип оплаты';

            if (!data.type_ship)
                error = 'Выберите тип доставки';

            if (!data.city)
                error = 'Выберите город';

            if(!data.user_id){ // if user not auth

                let phone = data.phone.replace(/[^0-9\.]+/g, "");

                if (phone.length !== 11)
                    error = 'Неправильный формат номера телефона +'+phone;

                if (!validateEmail(data.email))
                    error = 'Неправильный формат Email';

            }


            if (!error){
                fetchPost('/cart/order', JSON.stringify(data) , body => {
                    if (body && body.success){
                        window.location = '/order/done/'+body.uniq;
                    }else if(body.error){

                        if (body.error === 'Пустая корзина'){
                            window.location.replace('/account/orders');
                            console.log('redirect')
                        }
                        else
                            modalPopup(body.error, 'Ошибка', true)
                    }
                });
            }else {
                modalPopup(error, 'Проверка данных', true)
                //console.log(error);
            }

        })
    }

}