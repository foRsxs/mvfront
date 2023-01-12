export function loader(param) {

    const loader = document.getElementById('loader');

    if (loader){

        if (param === 'show'){
            loader.classList.add('active');

          /*  setTimeout(()=>{
                loader.classList.remove('active');
                    }, 1000000);*/
        }else if(param === 'hide'){
            loader.classList.remove('active');
        }
    }
}

