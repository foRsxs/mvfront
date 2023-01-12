import {fetchPost} from "./mvjs/fetchPost";

export function favorites() {

    const favs = document.querySelectorAll('.product__like');
    const csrf = document.querySelector('meta[name="csrf-token"]').content;

    if (favs){
        favs.forEach( fav => {

            if (fav.dataset.id){
                fav.addEventListener('click',(e)=>{

                    fetchPost('/favorites/add',JSON.stringify({'product_id' : fav.dataset.id, '_token' : csrf }), body => {

                        if (body && body.success){
                            console.log('test');
                        }
                    })

                    if (!fav.classList.contains('active')){
                        fav.classList.add('active')
                    }else{
                        fav.classList.remove('active')
                    }

                })
            }

        })
    }
}