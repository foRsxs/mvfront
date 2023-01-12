import {fetchPost} from "./mvjs/fetchPost";
import {basketUpdate} from "./basketUpd";
import Choices from "choices.js";
import {basketFrm} from "./basketFrm";

export const checkout = () => {

    const btnCounts  = document.querySelectorAll('.value__btn');
    const btnDelets  = document.querySelectorAll('.basket_delete_item');
    const cityCh     = document.getElementById('city');
    const shipCh     = document.getElementById('shipSelect');
    const inpUser    = document.getElementById('user_id');


    if(cityCh){
        const cityChoice = new Choices(cityCh, {
            itemSelectText: '',
            noResultsText: 'Ничего не найдено',
            loadingText: 'Загрузка',
            allowHTML: true,
            searchPlaceholderValue: 'Поиск по названию...',
            shouldSort: false
        });

        cityCh.addEventListener('choice',
            (e) =>  {
                //let data = e.detail.choice.customProperties;
                const city = e.detail.choice.value;

                if (city){

                    const ship_region_01    = document.querySelector('.ship_region_01');
                    const ship_region_2     = document.querySelector('.ship_region_2');
                    const ship2             = document.getElementById('ship2');
                    const ship3             = document.getElementById('ship3');
                    const pay1              = document.getElementById('pay1');
                    const pay2              = document.getElementById('pay2');

                    if (city === 'g1' || city === 'g2'){
                        ship_region_01.style.display = 'none';
                        ship_region_2.style.display = 'flex';
                        pay1.parentElement.parentElement.style.display = 'flex';
                        ship2.checked = true;
                    }else{
                        ship_region_2.style.display = 'none';
                        pay1.checked = false;
                        pay2.checked = true;
                        pay1.parentElement.parentElement.style.display = 'none';
                        ship_region_01.style.display = 'flex';
                        ship3.checked = true;
                        ship3.value = shipCh.value;
                    }
                }
            },
            false,
        );

        cityCh.addEventListener('change',
            (e) =>  {

                    fetchPost('/cart/update', JSON.stringify(basketFrm()) , body => {
                        if (body && body.success){
                            basketUpdate(body);
                        }
                    });

            },
            false,
        );
    }

    if (shipCh){
        shipCh.addEventListener('choice', (e) => {
            document.getElementById('ship3').value = e.detail.choice.value;

            fetchPost('/cart/update', JSON.stringify(basketFrm()) , body => {
                if (body && body.success){
                    basketUpdate(body);
                }
            });
        })
    }



    if (btnCounts.length >= 2){
        btnCounts.forEach( btn => {
            btn.addEventListener('click', function() {
                //let count = document.querySelector('.value__inp[data-rowid="'+this.dataset.rowid+'"]').value;
                const count = this.parentElement.querySelector('.value__inp');
                const dir = this.dataset.dir;
                const _rowId = this.dataset.rowid;

                if (!isNaN(count.value) && count.value >= 0){
                    const curValue = +count.value;
                    let newCount;

                    if (dir === 'plus'){
                        newCount = curValue + 1;
                    }else{
                        newCount = curValue - 1 > 0 ? curValue - 1 : 0;
                    }

                    if (newCount !== curValue && newCount > 0)
                    {
                        let dataForm = basketFrm();
                        dataForm.count = newCount;
                        dataForm.rowId = _rowId;

                        fetchPost('/cart/count', JSON.stringify(dataForm), body => {
                            if (body && body.success){
                                count.value = newCount;
                                basketUpdate(body);
                            }
                        });
                    }
                }
            })
        })
    }


    if (btnDelets){
        btnDelets.forEach( btn => {
            btn.addEventListener('click', function (){
                const _rowId = this.dataset.rowid;

                if (_rowId){
                    let dataForm = basketFrm();
                    dataForm.rowId = _rowId;

                    fetchPost('/cart/delete', JSON.stringify(dataForm), body => {
                        if (body && body.success){
                           this.parentElement.remove();
                            basketUpdate(body);
                        }
                    });
                }

            })
        })
    }





}