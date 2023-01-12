import {fetchPost} from "./mvjs/fetchPost";
import {serialize} from "./mvjs/serialize";
import {changeCartCountHead} from "./mvjs/cartCountCh";

export const addBasket = () => {
    const btn = document.querySelector('.card__action_btn_el');
    const modal = document.querySelector('.addbasket');

    if(btn && modal) {
        btn.addEventListener('click', () => {

            let data = JSON.stringify(serialize('#product_form'));
            fetchPost('/cart/add',data, body => {
                if (body && body.cart_count){
                    const modalBody = document.querySelector('.addbasket__body_main');

                    if (body.cart_body && modalBody)
                        modalBody.innerHTML = body.cart_body;

                    if (body.cart_count){
                        changeCartCountHead(body.cart_count);
                    }

                    modal.classList.add('active');
                }
            });

        })
        modal.addEventListener('click', (e) => {
            if(e.target.classList.contains('addbasket__wrapper') || e.target.classList.contains('addbasket__body_head_close') || e.target.classList.contains('addbasket__body_button_close')) {
                modal.classList.remove('active')
            }
        })
    }
}