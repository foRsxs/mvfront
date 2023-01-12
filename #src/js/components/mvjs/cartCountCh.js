export function changeCartCountHead(count) {

    const cartCount = document.getElementById('cart_count_main');
    const cartCountMobile = document.querySelector('.navbar__item_ind');

    if (cartCount){
        cartCount.innerHTML = count;
    }

    if (cartCountMobile){
        cartCountMobile.innerHTML = count;
    }

}