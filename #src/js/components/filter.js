import {serialize} from "./mvjs/serialize";
import {fetchPost} from "./mvjs/fetchPost";
import {favorites} from "./favorites";

export function filter() {

    const typeProductsId = document.getElementById('typeproducts_id');

    if (typeProductsId.value){
        let bodyProducts = document.querySelector('.products');
        let pag          = document.querySelector('.rev__nav');
        let frmData      = serialize('#form_filter');

        if (typeProductsId.value === 2){
            bodyProducts = document.getElementById('solutions');
            pag          = bodyProducts.parentElement.querySelector('.rev__nav');
        }else if (typeProductsId.value === '3'){
            bodyProducts = document.getElementById('kapli');
            pag          = bodyProducts.parentElement.querySelector('.rev__nav');
        }


        if (bodyProducts && frmData){
            fetchPost('/products/filter', JSON.stringify(frmData), body => {

                if (body && body.products){
                    bodyProducts.innerHTML = body.products;

                    favorites();

                    if (pag){
                        if (body.pagination)
                            pag.outerHTML = body.pagination;
                        else
                            pag.innerHTML = "";
                    }

                }
            })
        }


    }

}