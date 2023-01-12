import {changeCartCountHead} from "./mvjs/cartCountCh";

export function basketUpdate(body) {

    if (!body)
        return;

    const total         = document.getElementById('total');
    const subtotal      = document.getElementById('subtotal');
    const subtotalMob   = document.getElementById('subtotal_mobile');
    const shipCost      = document.getElementById('ship_cost');
    const bonusPlus     = document.getElementById('bonus_plus');
    const bonusPay      = document.getElementById('bonus_pay');
    const rowPrices     = document.querySelectorAll('.row_price');

    if (body.cart_count === 0)
        window.location.reload();

    if (subtotal && body.subtotal) {
        subtotal.innerHTML = body.subtotal;
        if (subtotalMob)
            subtotalMob.innerHTML = body.subtotal;
    }

    if (total && body.total)
        total.innerHTML = body.total;

    if (shipCost && !isNaN(body.shipCost))
        shipCost.innerHTML = body.shipCost;

    if (bonusPlus && body.bonusPlus){
        bonusPlus.innerHTML = '+'+body.bonusPlus;
        if (body.bonusPlus > 0){
            bonusPlus.parentElement.classList.remove('hide');
        }else
            bonusPlus.parentElement.classList.add('hide');
    }

    if (bonusPay && body.bonusPay) {
        bonusPay.innerHTML = body.bonusPay;
        if (body.bonusPay > 0){
            bonusPay.parentElement.classList.remove('hide');
        }else
            bonusPay.parentElement.classList.add('hide');
    }

    if (body.cart_count)
        changeCartCountHead(body.cart_count);

    if (body.cart){
        body.cart.forEach( row => {
            if (row.price){
                let item = document.getElementById(row.rowId);
                item.innerHTML = row.price;
            }
        })
    }



}