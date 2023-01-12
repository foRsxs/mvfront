import {fetchGet, fetchPost} from "./mvjs/fetchPost";
import {serialize} from "./mvjs/serialize";

export function review(){
    const btnRev        = document.getElementById('add_review_button');
    const divRating     = document.getElementById('add_review_rating');
    let product_id      = document.getElementById('product_id');
    const errorMsg      = document.getElementById('error_msg');
    const msg           = document.getElementById('msg');
    const linkPags      = document.querySelectorAll('.rev__nav_item');
    const csrf          = document.querySelector('meta[name="csrf-token"]').content;

    if (btnRev){

        if (product_id)
            product_id = product_id.value;

        btnRev.addEventListener('click', () => {

            errorMsg.innerHTML = '';
            msg.innerHTML   = '';
            let error       = '';
            let data        = serialize('#form_review')
            data.product_id = product_id;
            data.rating     = divRating.dataset.rateTotal;

            if (data.review.length < 3)
                error = 'Напишите текст отзыва';

            if (data.rating < 1)
                error = 'Выберите оценку';

            if (error === ''){
                fetchPost('/review/add',JSON.stringify(data), body => {

                    if (body && body.success && body.msg){
                        btnRev.style.display = 'none';
                        msg.innerHTML = body.msg;
                    }else if (body.error){

                        if (Object.hasOwn(body.error, 'g-recaptcha-response'))
                            errorMsg.innerHTML = body.error['g-recaptcha-response'][0]
                        else
                            errorMsg.innerHTML = 'Возникла ошибка при отправке отзыва'
                    }
                })
            }else
                errorMsg.innerHTML = error;
        })


        if (linkPags){
            linkPags.forEach( lp => {
                lp.addEventListener('click', (e)=>{
                    e.preventDefault();
                    let links = document.querySelectorAll('.rev__nav_item')
                    links.forEach( link => {
                        link.classList.remove('active')
                    })
                    lp.classList.add('active');
                    let url = lp.getAttribute('href')
                    let page=lp.getAttribute('href').split('page=')[1];

                    fetchPost(url, JSON.stringify({'_token': csrf, 'page' : page, 'product_id' : product_id }), body => {

                        if (body && body.msg){
                            const revList = document.querySelector('.rev__list')
                            revList.innerHTML = body.msg;
                            review();
                        }
                    })
                })
            })
        }


    }
}