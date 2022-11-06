export function selectionAcc() {
    const selHead = document.querySelector('.selection__head_title');
    const selHeadEx = document.querySelector('.selection__head_ex');
    const selBody = document.querySelector('.selection__body');
    const selHeadTitle = document.querySelector('.selection__head_title');

    if(selHead && selBody) {
        selHead.addEventListener('click', (e) => {
            selBody.classList.toggle('active');
            selHeadEx.classList.toggle('active');
            selHeadTitle.classList.toggle('active');

            if(selBody.classList.contains('active') && selHeadEx.classList.contains('active')) {
                selBody.style.cssText = `height: ${selBody.scrollHeight}px;`;
                selHeadEx.style.cssText = `height: ${19.2}px`;
                
            }

            if(!selBody.classList.contains('active') && !selHeadEx.classList.contains('active')) {
                selBody.style.cssText = `height: 0px;`;
                selHeadEx.style.cssText = `height: 0px`;
            }
            
        });
        if(selBody.classList.contains('active') && selHeadEx.classList.contains('active')) {
            selBody.style.cssText = `height: ${selBody.scrollHeight}px;`;
            selHeadEx.style.cssText = `height: ${19.2}px`;
            
        }

        if(!selBody.classList.contains('active') && !selHeadEx.classList.contains('active')) {
            selBody.style.cssText = `height: 0px;`;
            selHeadEx.style.cssText = `height: 0px`;
        }
        // if(window.innerWidth <= 1200) {
        //     selHead.addEventListener('click', (e) => {
        //         selBody.classList.toggle('active');
        //         selHeadEx.classList.toggle('active');
        //         selHeadTitle.classList.toggle('active');

        //         if(selBody.classList.contains('active') && selHeadEx.classList.contains('active')) {
        //             selBody.style.cssText = `height: ${selBody.scrollHeight}px;`;
        //             selHeadEx.style.cssText = `height: ${19.2}px`;
                    
        //         }

        //         if(!selBody.classList.contains('active') && !selHeadEx.classList.contains('active')) {
        //             selBody.style.cssText = `height: 0px;`;
        //             selHeadEx.style.cssText = `height: 0px`;
        //         }
                
        //     });
        // }

        // window.addEventListener('resize', (e) => {
        //     if(window.innerWidth <= 1200) {
        //         selHead.addEventListener('click', (e) => {
        //             selBody.classList.toggle('active');
        //             selHeadEx.classList.toggle('active');
        //             selHeadTitle.classList.toggle('active');
    
        //             if(selBody.classList.contains('active') && selHeadEx.classList.contains('active')) {
        //                 selBody.style.cssText = `height: ${selBody.scrollHeight}px;`;
        //                 selHeadEx.style.cssText = `height: ${19.2}px`;
                        
        //             }
    
        //             if(!selBody.classList.contains('active') && !selHeadEx.classList.contains('active')) {
        //                 selBody.style.cssText = `height: 0px;`;
        //                 selHeadEx.style.cssText = `height: 0px`;
        //             }
                    
        //         });
        //     }
        // })
    }
    
}