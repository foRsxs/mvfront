import {serialize} from "./mvjs/serialize";

export function basketFrm() {

    const csrf      = document.querySelector('meta[name="csrf-token"]').content;
    const _city     = document.getElementById('city');
    const address   = document.getElementById('address');
    const typeShip  = document.querySelector('input[name="type_ship"]:checked');
    const typePayment  = document.querySelector('input[name="type_payment"]:checked');
    const response  = serialize('#form_user');

    if (csrf)
        response._token = csrf;

    if(_city)
        response.city = _city.value;

    if(typeShip && typeShip.value)
        response.type_ship = typeShip.value;

    if (typePayment && typePayment.value)
        response.type_payment = typePayment.value;

    if (address && address.value)
        response.address = address.value;

    return response;
}