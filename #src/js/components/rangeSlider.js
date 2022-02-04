import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

export function rangeSlider() {
    let filterPrice = document.querySelector('.range-test');

    let input1 = document.querySelector('#test1');
    let input2 = document.querySelector('#test2');

    let inputs = [input1, input2];

    if(filterPrice) {
        noUiSlider.create(filterPrice, {
            start: [0, 100000],
            connect: true,
            step: 1,
            tooltips: false,
    
            range: {
                'min': 0,
                'max': 100000
            },
            format: {
                from: function(value) {
                    return parseInt(value);
                },
                to: function(value) {
                    return parseInt(value);  
                }
            }
            // format: {
            //     from: wNumb({thousand: ' ', suffix: '₸', }),
            //     to: wNumb({thousand: ' ', suffix: '₸', })
            // }
        });
    
        filterPrice.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = `${values[handle]}`;
        });
    }
    
}