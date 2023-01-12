import {counter} from "./counter";

const cardOpt = () => {
    const btnSame   = document.getElementById('btn_same');
    const btnDiff   = document.getElementById('btn_diff');
    const inpParam  = document.getElementById('param');
    const diffSels  = document.querySelectorAll('.diff');
    const count     = document.getElementById('count');
    const count_2   = document.getElementById('count_2');

    if (count){
        count.addEventListener('change', ()=>{
            counter();
        })
    }

    if (count_2){
        count_2.addEventListener('change', ()=>{
            counter();
        })
    }

    if(btnSame && btnDiff) {

        btnSame.addEventListener('click', (e) => {
            inpParam.value = 'same';
            btnDiff.classList.toggle('active');
            btnSame.classList.toggle('active');

            diffSels.forEach( diff => {
                diff.classList.toggle('hide');
            })

            counter();
        })

        btnDiff.addEventListener('click', (e) => {
            inpParam.value = 'diff';
            btnSame.classList.toggle('active');
            btnDiff.classList.toggle('active');

            diffSels.forEach( diff => {
                diff.classList.toggle('hide');
            })

            counter();
        })

    }
}

export default cardOpt;