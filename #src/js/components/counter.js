export function counter() {

    const count     = document.getElementById('count');
    const count_2   = document.getElementById('count_2');
    const inpParam  = document.getElementById('param');
    const price2    = document.getElementById('price2');
    const price     = document.getElementById('price');
    const showPrice = document.getElementById('show_price');

    if (price2 && count){
        let qty = +count.value;

        if (inpParam.value === 'diff' && count_2)
            qty += +count_2.value;

        if (qty === 1)
            showPrice.innerHTML = price.value;
        else if (qty >= 2)
            showPrice.innerHTML = price2.value;
    }

}