import {fetchPost} from "./mvjs/fetchPost";

export function reOrder() {
    const btn  = document.getElementById('btn_reorder');
    const uniq = document.getElementById('uniq');
    const csrf = document.querySelector('meta[name="csrf-token"]').content;

    if (btn && uniq){
        btn.addEventListener('click', ()=>{
            fetchPost('/order/reorder',JSON.stringify({ uniq: uniq.value, _token: csrf}), body =>{
                if (body && body.success){
                    window.location = body.url;
                }
            })
        })
    }

}